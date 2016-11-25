System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "library/*": "src/library/*/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    'jasmine' : '../node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
    'jasmine-html' : '../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
    'jasmine-boot' : '../node_modules/jasmine-core/lib/jasmine-core/boot.js'      
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.8",
    "angular-animate": "github:angular/bower-angular-animate@1.5.8",
    "angular-aria": "github:angular/bower-angular-aria@1.5.8",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.5.8",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.9",
    "angular-resource": "github:angular/bower-angular-resource@1.5.8",
    "angular-route": "github:angular/bower-angular-route@1.5.8",
    "css": "github:systemjs/plugin-css@0.1.32",
    "jquery": "npm:jquery@3.1.1",
    "json": "github:systemjs/plugin-json@0.1.2",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "github:angular/bower-angular-animate@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-aria@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-messages@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-mocks@1.5.9": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-resource@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-angular-route@1.5.8": {
      "angular": "github:angular/bower-angular@1.5.8"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.5.8",
      "angular-animate": "github:angular/bower-angular-animate@1.5.8",
      "angular-aria": "github:angular/bower-angular-aria@1.5.8",
      "angular-messages": "github:angular/bower-angular-messages@1.5.8",
      "css": "github:systemjs/plugin-css@0.1.32"
    }
  }
});
