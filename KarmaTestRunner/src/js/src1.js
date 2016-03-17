function test1(val) {	
	return val+10;
}

var page_view = Backbone.View.extend({
	el: 'body',
	events:{},
	initialize: function(model) {
		this.model = model;
	},
	validateField1: function(val) {
		return this.model;
	},
	validateField2: function(val) {
		return {'output': val+20};
	},
	validateField3: function(val) {
		return {'obj':{'a':2}};
	},
	
	setValue: function(value) {
		try {
			this.$el.find('#testdiv').text(value);
		} catch(e) {
			return false;
		}
		return true;
	}
});

var page_model = Backbone.Model.extend({
	p1: 'test_1',
	p2: 'test_2',
	p3: 'test_3',
	p4: 'test_4'
});

var page_view_obj = new page_view(new page_model());