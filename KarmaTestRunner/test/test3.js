xdescribe('test_suite_1',function(){
	it('test_case_1',function(){
		expect(1).toEqual(jasmine.anything());
		expect(window.test1).toBeDefined();
		expect(window.test1).toEqual(jasmine.any(Function));
		expect(window.test1(10)).toBe(20);
	});
});

describe('test_suite_2',function(){	
	it('test_case_1',function(){
		expect(1).toEqual(jasmine.anything());
		expect(Backbone).toBeDefined();
		expect(Backbone).toEqual(jasmine.any(Object));
		expect(page_view).toBeDefined();
		expect(page_model).toBeDefined();
		expect(page_view_obj.validateField1).toBeDefined();
		expect(page_view_obj.validateField1()).toEqual(jasmine.any(Object));
		console.log('----------TEST CONSOLE-------------------');
		expect(page_view_obj.validateField2(12).output).toEqual(jasmine.any(Number));
		expect(page_model.prototype.p1).toBe('test_1');
	});
});

describe('test_suite_3',function(){
	it('test_case_1',function(){
		$('body').html(window.__html__['views/test-view.html']);
		console.log('-------------------HTML2JS--------------------');
		expect(document.getElementById('testdiv').innerText).toBeDefined();
		expect(document.getElementById('testdiv').innerText).toBe('test value');		
		page_view_obj.setValue('test value - updated from test case');
		expect(document.getElementById('testdiv').innerText).toBe('test value - updated from test case');
	});
});