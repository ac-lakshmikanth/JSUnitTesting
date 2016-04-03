/**
	* AMD Module 2
	* @namespace1 amdmodule
	* @module jsdoc3/amdmodule2
	* @requires jsdoc3/amdmodule1 
	* @todo todo task-1
	* @todo todo task-2
	* @todo todo task-3
	* @todo todo task-4
*/
define('jsdoc3/amdmodule2',function() {

	return function() {
		/** 
			* @property prop1 {boolean} boolean value
			* @default {boolean} false
		*/
		this.prop1 = false;
		/** 
			* @method method1 
		*/
		this.method1 = function() {
		}
	};		
	
});