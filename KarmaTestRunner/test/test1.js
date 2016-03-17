describe('test suite 1',function(){
	it('testcase 1',function(){
		expect(1).toBe(1);
	});
});

describe('test suite 2',function(){
	it('testcase 2',function(){
		expect(1).not.toBe(0);
	});
	
	it('test case 3', function(){
		expect(12).toEqual(12);
	});
	
	it('test case 4',function() {
		var a = {};
		var b = a;
		expect(a).toBe(b);
	});
	
	it('test case 5',function(){
		expect('a').toMatch(/a/);
	});
	
	it('test case 6',function(){
		expect('a').not.toMatch(/b/);
	});
	
	it('test case 7',function(){
		expect(window).toBeDefined();
	});

	it('test case 8',function(){
		expect(undefined).toBeUndefined();
	});
	
	it('test case 9',function(){
		expect(window.alert).toBeDefined();
		expect(window.document).toBeDefined();
		var foo = {a:12,b:24};
		var bar = {a:12,b:24};
		expect(foo).toEqual(bar);
		expect('a12h').toMatch(/^[a-z][0-9]{2}[a-z]$/g);
		expect(undefined).not.toBeDefined();
		expect(null).toBeDefined();
		expect(null).toBe(null);
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();
	});
	
	it('test case 10',function(){
		var arr = [1,2,3,4,5];
		expect(arr).toContain(4);
		expect(arr[0]).toBeLessThan(2);
		expect(arr[2]).toBeGreaterThan(2);
		expect(2.123535).toBeCloseTo(2.12,2);
		expect(3.1415926).toBeCloseTo(2.78,0);
		expect((function(){return 1+2})).not.toThrow();
		expect((function(){return a+2})).toThrow();
	});
	
	it('test case 11',function(){
		var func = function(x,callback) {
			if(x) {
				callback();
			}			
		};		
		func(false,function(){
			fail('call back has been called');
		});
	});
	
	var bae = 0;
	beforeEach(function(){
		if(bae===0) bae = 1;
	});
	afterEach(function(){
		if(bae===1) bae = 0;
	});	
	
	it('test case 12',function(){		
		expect(bae).toBe(1);
	});
	it('test case 13',function(){		
		expect(bae).toBe(1);
	});	
	
});

var gval = 12;

describe('test suite 3',function(){
	var inc = 0;
	beforeAll(function(){
		inc = 1;
	});
	afterAll(function(){
		inc = 0;
	});
	
	it('test case 14',function() {
		expect(inc).toBe(1);
		inc++;
	});
	it('test case 15',function(){
		expect(inc).toBe(2);
		expect(gval).toBeDefined();
	});
});

describe('test suite 4',function() {

	beforeEach(function(){
		this.num=1;
	});
	afterEach(function(){
		this.num=2;
	});
	
	it("test case 16",function(){
		expect(this.num).toBe(1);
		this.num = 1;
	});
	
	it("test case 17",function(){
		expect(this.num).toBe(1);
		this.num = 2;
	});
	
});


describe('test suite 5',function(){
	
	// beforeEach(function(){
		// this.num = 1;
	// });
	
	// it("test case 18",function(){
		// expect(this.num).toBe(1);
	// });
	
	describe("test suite 5-1",function(){
	
		beforeEach(function(){
			this.num = 2;
		});
		
		it("test scase 19",function(){
			expect(this.num).toBe(2);
		});
	});
	
	describe("test suite 5-2",function(){
	
		beforeEach(function(){
			this.num = 3;
		});
		
		it("test scase 20",function(){
			expect(this.num).toBe(3);
		});
		
		describe("test suite 5-2-1",function(){
	
			beforeEach(function(){
				this.num = 4;
			});
			
			it("test scase 21",function(){
				expect(this.num).toBe(4);
			});
		});
		
	});

});

describe('test suite 6',function(){

	xit('test case 22',function(){
	});
	
	it('test case 23');
	
	it('test case 34',function(){
		expect(true).toBe(true);
		pending('Reason for pending');
	});
});

describe('test suite 7',function() {

	var func;

	beforeEach(function(){
		func = {
			func1: function(a,b){
				return a+b;
			}
		};
		spyOn(func,'func1');//.and.callThrough(), //and.returnValue(), //and.returnValues()
		func.func1(1,2);
		func.func1(3,4);
	});

	it('test case 35',function(){
		expect(func.func1).toHaveBeenCalled();
		expect(func.func1).toHaveBeenCalledTimes(2);
		expect(func.func1).toHaveBeenCalledWith(1,2);
		//expect(func.func1).toBeNull();
	});	
	
});

describe('test suite 8',function(){
	it('test case 36',function(){
		expect([]).toEqual(jasmine.any(Object));
		expect([]).toEqual(jasmine.any(Array));
		//expect([]).toEqual(jasmine.any(Number));
		expect('').toEqual(jasmine.any(String));
		expect({}).toEqual(jasmine.anything());
		expect({a:2,b:4}).toEqual(jasmine.objectContaining({a:2}));
		expect([1,2,3,4,45,4]).toEqual(jasmine.arrayContaining([3,4,45]));
	});
});

describe('test suite 9',function(){

	var timerCallback;
	
	beforeEach(function(){
		timerCallback = jasmine.createSpy('timerCallback');
		jasmine.clock().install();
	});
	
	afterEach(function(){
		jasmine.clock().uninstall();
	});
	
	it("test case 36",function(){
		setTimeout(function(){
			timerCallback();
		},10000);
		expect(timerCallback).not.toHaveBeenCalled();
		jasmine.clock().tick(9999);
		expect(timerCallback).not.toHaveBeenCalled();
		jasmine.clock().tick(10000);
		jasmine.clock().tick(10001);
		expect(timerCallback).toHaveBeenCalled();
	});
	
});

describe('test suite 10',function(){

	beforeEach(function(){
		jasmine.clock().install();
	});
	
	afterEach(function(){
		jasmine.clock().uninstall();
	});
	
	it("test case 371",function(){
		var baseTime = new Date(2013,11,23);
		jasmine.clock().mockDate(baseTime);
		jasmine.clock().tick(1);
		expect(new Date().getTime()).toEqual(baseTime.getTime() + 1);
		//expect(new Date(2013,11,24).getTime()).toEqual(baseTime.getTime());
	});
	
});


xdescribe('test suite 11',function(){

	beforeEach(function(done){
		setTimeout(function(){
			done();
		},2000);	
	});
	
	it("test case 38",function(done){
		expect(1).toBe(1);
		done();
	});
	
	describe("test suite 11-1",function(){
	
		it("test case 39",function(done){
			setTimeout(function(){
				done();
			},3000);
		},3500);		
		
	});
	
});





