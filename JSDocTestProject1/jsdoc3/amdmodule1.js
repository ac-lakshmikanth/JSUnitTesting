define('jsdoc3/amdmodule1',function(){
	/**  
	 * AMD Module 1
	 * @exports jsdoc3/amdmodule1
	 * @namespace1 amdmodule	 
	*/
	var ret = {
		/** 
			* Property 1 
			* @default {boolean} true
		*/
		prop1: true,
		/** 
			* Property 2 
			* @default {boolean} false
		*/
		prop2: false,
		
		/** 
			* Method 1 
			* @returns {number} number value
		*/
		method1: function() {
			return 1;
		}
	};
	
	return ret;
})