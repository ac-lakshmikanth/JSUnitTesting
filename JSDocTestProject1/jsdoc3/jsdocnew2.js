/** 
	* Class representation for object structure of type class1 
	* @author Lakshmi Kanth <a.c.lakshmikanth@gmail.com>
	* @namespace1 jsdocnew
	* @class
*/
class class1 {
	/**
		* Class constructor
		* @param x {number} - the x value
		* @param y {number} - the y value
	*/
	constructor(x,y) {
	}
	
	/**
		* getter method
		* @returns {number} result number
	*/
	getValue() {
	}
	
	/**
		* setter method
		* @param x {number} the number value
	*/
	setValue(x) {
		this.x = x;
	}
}

/** 
	* Class representation for object structure of type class2 
	* @author Lakshmi Kanth <a.c.lakshmikanth@gmail.com>
	* @class
	* @extends class1
*/
class class2 extends class1 {
}