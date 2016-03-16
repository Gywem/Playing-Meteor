Meteor.methods({
  addTodo(text) {
    Todos.insert({
      text: text,
      createdAt: new Date()
    });
  },
  removeTodo(todoId) {
    Todos.remove(todoId);
  }
});