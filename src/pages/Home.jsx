import { useEffect, useState, Fragment } from "react";
import { fetchUserTodosRequest, fetchUsersRequest } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import sortTodoByCompleted from "../utils/sortTodoByCompleted";
import TodoItem from "../components/TodoItem";
import { Combobox, Transition } from "@headlessui/react";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [selectedUser, setSelectedUser] = useState("");
  const userTodos = useSelector((state) => state.userTodos.userTodos);
  const [userTodo, setUserTodo] = useState(userTodos);
  const [todosDone, setTodosDone] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    setUserTodo(userTodos);
    if (userTodos && userTodos.length > 0) {
      const completedTodos = userTodos.filter(todo => todo.completed);
      setTodosDone(completedTodos.length);
    } else {
      setTodosDone(0);
    }
  }, [userTodos]);

  const handleUserSelect = (selectedItem) => {
    if (selectedItem) {
      console.log("selectedItem", selectedItem);
      setSelectedUser(selectedItem);
      dispatch(fetchUserTodosRequest(selectedItem.id));
    }
  };

  const handleMarkDone = async (todoId) => {
    setLoading(prev => ({ ...prev, [todoId]: true }));
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: true,
        }),
      });
      if (response.ok) {
        const updatedUserTodos = userTodos.map(todo => {
          if (todo.id === todoId) {
            return { ...todo, completed: true };
          }
          return todo;
        });
        setUserTodo(updatedUserTodos);
        setTodosDone(prev => prev + 1);
      } else {
        console.error("Failed to mark todo as done");
      }
    } catch (error) {
      console.error("Error marking todo as done:", error);
    } finally {
      setLoading(prev => ({ ...prev, [todoId]: false }));
    }
  };

  const filteredUser =
    query === ''
      ? users
      : users.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <>
      <div className="pt-[6%] p-5">
        <h1 className="font-RobotoSemibold my-5">User</h1>
        <div className="">
        </div>
        <div>
          <Combobox value={selectedUser} onChange={(selectedUser) => handleUserSelect(selectedUser)}>
            <div className='relative w-full'>
              <Combobox.Button className='absolute top-[14px]'>
                <img
                  src='https://statics.cdn.200lab.io/f/20230830172851/200lab-logo-beta.png'
                  width={50}
                  height={50}
                  className='ml-4 mt-1.5'
                  alt='200lab logo'
                />
              </Combobox.Button>

              <Combobox.Input
                className='w-full h-[48px] pl-20 p-4 rounded-l-full max-sm:rounded-full bg-neutral-100 outline-none cursor-pointer text-sm text-main'
                displayValue={(item) => item.name}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Leanne Graham...'
              />

              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options
                  className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  static
                >
                  {filteredUser.length === 0 && query !== "" ? (
                    <Combobox.Option
                      value={query}
                      className='cursor-default select-none py-2 pl-10 pr-4'
                    >
                      Create {query}
                    </Combobox.Option>
                  ) : (
                    filteredUser.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-main text-white" : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                              {item.name}
                            </span>

                            {selected ? (
                              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-teal-600"}`}
                              >

                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                  Create {query}

                </Combobox.Options>

              </Transition>
            </div>
          </Combobox>
        </div>
      </div>

      <div className="p-5">
        <h1 className="font-RobotoSemibold mb-5">Tasks</h1>
        <div className="h-[500px] overflow-y-auto border border-neutral-300 p-5 rounded-md">
          {selectedUser ? (
            userTodo ? (
              sortTodoByCompleted(userTodo).map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  loading={loading[todo.id]}
                  handleMarkDone={handleMarkDone}
                />
              ))
            ) : (
              <p className="font-RobotoMedium">No tasks</p>
            )
          ) : (
            <p className="font-RobotoMedium text-center opacity-40">Select a user to view tasks</p>
          )}

        </div>
      </div>

      <div className="py-2 px-5">
        <p className="font-RobotoSemibold">Done: {todosDone} / {userTodos.length} tasks</p>
      </div>
    </>
  )
}

export default Home
