import { useEffect, useState } from "react";
import { fetchUserTodosRequest, fetchUsersRequest } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import sortTodoByCompleted from "./utils/sortTodoByCompleted";
import TodoItem from "./components/TodoItem";
import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [selectedUser, setSelectedUser] = useState("");
  const userTodos = useSelector((state) => state.userTodos.userTodos);
  const [userTodo, setUserTodo] = useState(userTodos);
  const [todosDone, setTodosDone] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [searchUsername, setSearchUsername] = useState("");

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

  const handleUserSelect = (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);
    if (userId) {
      dispatch(fetchUserTodosRequest(userId));
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

  // const handleSearchChange = (event) => {
  //   setSearchUsername(event.target.value);
  // };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchUsername.toLowerCase())
  // );

  return (
    <>
      <Navbar />
      <div className="pt-[6%] p-5">
        <h1 className="font-RobotoSemibold my-5">User</h1>
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="font-RobotoMedium border rounded-md p-2"
            value={searchUsername}
            onChange={handleSearchChange}
          />
        </div> */}
        <div className="">
          <select
            className="font-RobotoMedium border rounded-md p-2"
            onChange={handleUserSelect}
            value={selectedUser}
          >
            <option disabled value="">Select User</option>
            {users && users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
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

export default App
