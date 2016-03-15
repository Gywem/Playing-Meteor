const {Router, Route, IndexRoute, DefaultRoute,  browserHistory} = ReactRouter;

Meteor.startup(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
    	<Route component={MainLayout}>
	   		<Route path="/" component={Counter} />
	   		<Route path="/counter" component={Counter} />
	   		<Route path="/todoindex" component={TodoIndex} />
	   	</Route>
	</Router>
  ), document.getElementById('main'));
});