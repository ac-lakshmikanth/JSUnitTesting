/**
	* Prototype based class1 
	* @prototype prototype1
	* @ignore
*/
var prototype1 = {	
	prop1: null,
	prop2: null
};

/**
	* Prototype based class2 
	* @prototype prototype2
	* @extends prototype1
	* @ignore
*/
var prototype2 = Object.create(prototype1);
