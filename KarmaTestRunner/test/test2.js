xdescribe('test suite 3',function(){
	var func = function(a,b) {
		if(a) {
			alert(b);
		}
	};
	it('test case 1',function() {
		func(1,3,function(){
			fail('function called');
		});
	});
});