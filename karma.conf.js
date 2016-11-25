//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'libs/angular.min.js',
      'libs/angular-route.min.js',
      'libs/angular-animate.min.js',
      'libs/angular-material.min.js',
      'libs/angular-messages.min.js',
      'libs/angular-aria.min.js', 
      'libs/angular-mocks.js',
      'libs/angular-resource.min.js',
      'config.js',
      'src/app.js',
      'src/library/Library.js',
      'src/AppController.js',
      'src/library/components/list/LibraryList.js',
      'src/library/components/details/LibraryDetails.js',
      'src/library/components/details/LibraryDialog.js',
      'src/**/*.spec.js'     
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
