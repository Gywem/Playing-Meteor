// Task component - represents a single todo item
Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.todo.text}</li>
    );
  }
});