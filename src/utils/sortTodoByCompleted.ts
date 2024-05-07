
const sortTodoByCompleted = (todos: any) => {
  return todos.sort((a: any, b: any) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });
};

export default sortTodoByCompleted;
