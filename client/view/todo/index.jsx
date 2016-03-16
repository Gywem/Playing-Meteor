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

  handleAddClick() {
    var text = ReactDOM.findDOMNode(this.refs.todoTextInput).value.trim();
    Meteor.call('addTodo', text);
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

        <input ref="todoTextInput" type="text" />
        <input value="add" type="button" onClick={this.handleAddClick} />
      </div>
    );
  }
});