const sortTodoByCompleted = (todos) => {
  return todos.sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });
};

export default sortTodoByCompleted;
