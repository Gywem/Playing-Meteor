Counter = React.createClass({ 
  getInitialState: function() {
    return _.defaults({
      count: this.props.initialCount
    }, {
      count: 0
    });
  },

  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>You've pressed the button {this.state.count} times.</p>
      </div>
    );
  }
});