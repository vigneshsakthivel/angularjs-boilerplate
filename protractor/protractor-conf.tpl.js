exports.config = {

  allScriptsTimeout : 11000,

  specs : [ 'src/**/Test/*.scenario.js' ],

  capabilities : {
    'browserName' : 'phantomjs'
  },

  baseUrl : 'http://localhost:8080/',

  framework : 'jasmine',

  jasmineNodeOpts : {
    defaultTimeoutInterval : 30000
  },
  
  onPrepare: function() {      
    var reporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
        savePath: '<%= logsDir %>',
        consolidateAll: true
      })
    );
  }
};