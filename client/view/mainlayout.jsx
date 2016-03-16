MainLayout = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to Meteor!</h1>        
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
          <li>
            <a href="/todoindex">React example</a>
          </li>
        </ul>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});