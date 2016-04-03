// /**
 // * @file file related description details here
 // * @author Lakshmi Kanth
 // */

/**
 * AMD Module 4
 * @namespace1 amdmodule
 * @module jsdoc3/amdmodule4
 * @kind module
 * @licence
 * Test license details
*/
define('jsdoc3/amdmodule4',function(){
	return /** @alias module:jsdoc3/amdmodule4 */ {
		/** 
			* private class property - prop1
			* @access private
			* @type {boolean}	
		*/
		prop1: true,
		/** 
			* @description <i style='color:green'><b>protected class property - prop2</b></i>
			* @access protected	
			* @type {null}	
		*/
		prop2: null,
		/** 
			* public class property - prop3
			* @access public
			* @deprecated since version 2.0
			* @type {undefined}	
		*/
		prop3: undefined,

		/** 
			* private class property - prop4
			* @private	
			* @type {boolean}	
		*/
		prop4: true,
		/** 
			* protected class property - prop5
			* @protected	
			* @type {null}	
		*/
		prop5: null,
		/** 
			* public class property - prop6
			* @public	
			* @type {undefined}	
		*/
		prop6: undefined,
		
		/** 
			* @description method1
			* @example
			* // returns 2
			* method1.apply(object,2);	
			* @example
			* // returns 4
			* method1.apply(object,4);	
		*/
		method1: function() {
		},
		method2: function() {
		}
	};
});