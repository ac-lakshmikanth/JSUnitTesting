exports.handlers = {
	parseBegin: function(e) {
		console.log(e.sourcefiles);
	},
	beforeParse: function(e) {
		//e.source += '\n------------------------PLUGIN------------------\n';
	},
	newDoclet: function(e) {
		if(typeof e.doclet.description==='string') {
			e.doclet.description = e.doclet.description.toUpperCase();
		}		
	}
};