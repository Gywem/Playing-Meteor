// Task component - represents a single todo item
Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },
  handleRemoveClick() {
  	Meteor.call('removeTodo', this.props.todo._id);
  },
  render() {
    return (
    	<li>{this.props.todo.text} <span ref="remove" onClick={this.handleRemoveClick}>x</span></li>
    );
  }
});