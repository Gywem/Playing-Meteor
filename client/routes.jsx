FlowRouter.route('/', {
    action: function(params, queryParams) {
    	FlowRouter.go('/counter');
    }
});

FlowRouter.route('/counter', {
    action: function(params, queryParams) {
    	ReactLayout.render(MainLayout, {
    		children: <Counter initialCount={0} />
    	});
    }
});

FlowRouter.route('/todoindex', {
    action: function(params, queryParams) {
    	ReactLayout.render(MainLayout, {
    		children: <TodoIndex />
    	});
    }
});