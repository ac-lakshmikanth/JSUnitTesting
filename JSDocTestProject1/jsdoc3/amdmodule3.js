// /**
 // * AMD Module 3
 // * @module jsdoc3/amdmodule3
// */
define('jsdoc3/amdmodule3',function() {

	/**
	 * AMD Module 3
	 * @constructor
	 * @namespace1 amdmodule
	 * @exports module:jsdoc3/amdmodule3
	*/
	var TestNew = function() {
	};
	
    /** 
		* Property 1 
		* @property {boolean} defaults to false
	 */	
	TestNew.prototype.prop1 = false;
    /** 
		* Property 2 
		* @property {boolean} defaults to true
	 */	
	TestNew.prototype.prop2 = true;
    /** 
		* Property 3 
		* @property {null} defaults to null
	 */	
	TestNew.prototype.prop3 = null;	
	
    /** 
		* Method 1 
		* @method method1
	 */
	TestNew.prototype.method1 = function () {
	};
    /** 
		* Method 2 
		* @method method2
		* @example <caption><h6><u>2 examples of using this code</u></h6></caption>
		* // returns 2
		* method1.apply(object,2);	
		* @example
		* // returns 4
		* method1.apply(object,4);	
	*/	 
	TestNew.prototype.method2 = function () {
	};
    /** 
		* Method 3 
		* @method method3
		* @example <caption>2 examples of using this code</caption>
		* // returns 2
		* method2.apply(object,2);	
		* @example
		* // returns 4
		* method2.apply(object,4);	
	*/	 
	TestNew.prototype.method3 = function () {
	};
	
	return TestNew;
	
});