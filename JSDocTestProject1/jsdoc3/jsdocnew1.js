/**
    * @description Test My New Function 1 - {@link NewFunction2} - Description
	* @author Lakshmi Kantha A C
	* @classdesc Class Description1
	* @constructor NewFunction1
	* @param input1 {string} param1 of the function
	* @param input2 {number} param2 of the function
	* @param input3 {boolean} param3 of the function
	* @returns {boolean} result of the function
	* @tutorial newfunction1_tutorial
*/
function NewFunction1(input1,input2,input3) {

	/** NewFunction1#var1 */
	this.var1 = 1;
	/** NewFunction1#var2 */
	this.var2 = 2;

	/** NewFunction1.var1 */
	this.var3 = 3;
	/** NewFunction1.var2 */
	this.var4 = 4;

	return true;	
	
}

/**
	* @description Test My New Function 2 - - {@link NewFunction1} - Description see {@tutorial newfunction2_tutorial}
	* @author Lakshmi Kanth A C
	* @classdesc Class Description2
	* @constructor NewFunction2
	* @param input1 {string} user input 1
	* @param input2 {string} user input 2
	* @param input3 {string} user input 3
	* @returns {string} returns a string value
*/
function NewFunction2(input1,input2,input3) {
	// return value
	return 'return-value';
}