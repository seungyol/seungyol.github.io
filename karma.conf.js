//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'jspm_packages/github/angular/bower-angular@1.5.8/angular.js',
      'jspm_packages/github/angular/bower-angular-route@1.5.8/angular-route.js',
      'jspm_packages/github/angular/bower-angular-animate@1.5.8/angular-animate.js',
      'jspm_packages/github/angular/bower-material@master/angular-material.js',
      'jspm_packages/github/angular/bower-angular-messages@1.5.8/angular-messages.js',
      'jspm_packages/github/angular/bower-angular-aria@1.5.8/angular-aria.js', 
      'jspm_packages/github/angular/bower-angular-mocks@1.5.9/angular-mocks.js',
      'jspm_packages/github/angular/bower-angular-resource@1.5.8/angular-resource.min.js',
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
