// Karma configuration
// Generated on Fri Feb 26 2016 14:21:53 GMT+0530 (India Standard Time)

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  {pattern:'src/lib/jquery-1.10.2.min.js',watched:false},
	  {pattern:'src/lib/underscore.js',watched:false},
	  {pattern:'src/lib/backbone-1.1.0.js',watched:false},
	  {pattern:'views/*.html'},
      {pattern:'src/js/*.js'},
      {pattern:'test/*.js'}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'**/*.html': ['html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,
	
	// host name
	//hostname: 'test',

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], //,'PhantomJS', 'Firefox'
	
	// set client browser related configuration
	client: {
		useIframe: false, // run the specs in a new window and not inside an iframe
		clearContext: false,
		captureConsole: true // capture console.log output and print it in terminal
	},
	
	// logging library to be used, defaults to console..
	// loggers: [{type:'console'}],
	
	// middleware
	// middleware: ['custom'],
	//plugins: [
	  // {'middleware:custom': CustomMiddlewareFactory}
	//],

    //plugins: ['karma-phantomjs-launcher','karma-html2js-preprocessor'],
	
	// customHeaders: [{
		// match: '.js',
		// name: 'testJSHeader',
		// value: 'js-header-value'
	// }],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 2 //Infinity
  });
  
  // var CustomMiddlewareFactory = function (config) {
	  // return function (request, response) {
		// response.writeHead(200)
		// return response.end("content!")
	  // }
  // };

  
}
