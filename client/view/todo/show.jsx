// Task component - represents a single todo item
Todo = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
});