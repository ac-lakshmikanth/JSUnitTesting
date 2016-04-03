/**
	* test2 function description
	* @constructor test2	
	* @param {string} title - the title of the book
	* @param {string} author - the author of the book
*/
function test2(title,author) {
	this.func2 = function() {
	}
	function func2() {
	}
}
test2.func2 = function() {
}

var t2 = new test2();
/** 
	* test2#func2 
*/
t2.func1();
/** 
	* test2.func2 
*/
test2.func2();

// \