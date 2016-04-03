/**
	* Test Module 7
    * @module TestModule7
	* @namespace1 jsdocnew	
*/

/**
	* Property 0
	* @property thisProp {number} constant value
*/
this.thisProp = 100;

/** 
	* Property 1
	* @property thisProp1 {boolean} boolean value
*/
this.thisProp1 = true;


/** 
	* Property 2
	* @property thisProp2 {number} constant value
*/
this.thisProp2 = 0;

/** 
	* Property 3
	* @property thisProp3 {Object} object value
*/
this.thisProp3 = {};




/** 
	* Module This Method 1 
	* @param param1 {number} number parameter
	* @returns {string} constant value
*/
this.moduleThisMethod1 = function(param1) {
	this.thisProp1 = true;
}

/** Module This Method 2 */
this.moduleThisMethod2 = function() {
	this.thisProp2 = 2;
}

/** 
	* Module This Method 3 
	* @param param1 {number} number parameter
	* @returns {string} constant value
*/
this.moduleThisMethod3 = function(param1) {
	this.thisProp3 = {};
}

/** 
	* Module This Method 4 
	* @param param1 {number} number parameter
	* @returns {string} constant value
*/
this.moduleThisMethod4 = function(param1) {
}

/** Module This Method 5 */
this.moduleThisMethod5 = function() {
}