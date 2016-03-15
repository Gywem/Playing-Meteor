const { Link } = ReactRouter;

MainLayout = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to Meteor!</h1>        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todoindex">React example</Link>
          </li>
        </ul>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});