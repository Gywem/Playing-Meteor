TodoIndex = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe("todos");
    return {
      todos: Todos.find({}).fetch()
    }
  },

  getTodos() {
    return this.data.todos;
  },
 
  renderTodos() {
    return this.getTodos().map((todo) => {
      return <Todo key={todo._id} todo={todo} />;
    });
  },
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
});