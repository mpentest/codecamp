(function () {
  'use strict';

  angular
    .module('myapp.sandbox')
    .config(configure);
  
  configure.$inject = [
    'c8yNavigatorProvider',
    'c8yViewsProvider'
  ];
  function configure(
    c8yNavigatorProvider,
    c8yViewsProvider
  ) {
    
    c8yNavigatorProvider.addNavigation({ // adds a menu item to the navigator with ...
      name: 'Speech to Text', // ... the name *"hello"*
      icon: 'microphone', // ... the cube icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
      priority: 100000, // ... a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item
      path: 'speech2text' // ... */hello* as path
    });

    c8yNavigatorProvider.addNavigation({ // adds a menu item to the navigator with ...
      name: 'Face Recognition', // ... the name *"hello"*
      icon: 'user', // ... the cube icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
      priority: 200000, // ... a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item
      path: 'faceRecognition' // ... */hello* as path
    });

    c8yNavigatorProvider.addNavigation({ // adds a menu item to the navigator with ...
      name: 'Smart Traffic', // ... the name *"hello"*
      icon: 'user', // ... the cube icon (icons are provided by the great Font Awesome library and you can use any of their [icon names](http://fontawesome.io/icons/) without the *fa-* prefix here
      priority: 300000, // ... a priority of 100000, which means that all menu items with a priority lower than 100000 appear before this menu item and all with a priority higher than 100000 appear after this menu item
      path: 'smarttraffic' // ... */hello* as path
    });

    c8yViewsProvider.when('/speech2text', { // when the path "/hello" is accessed ...
      templateUrl: ':::PLUGIN_PATH:::/sandbox/speech2text.html', //  ... display our html file "hello.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
      controller: 'myapp.sandbox.controller' // ... use "HelloController" as controller
    });

    c8yViewsProvider.when('/faceRecognition', { // when the path "/hello" is accessed ...
      templateUrl: ':::PLUGIN_PATH:::/sandbox/faceRecognition.html', //  ... display our html file "hello.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
      controller: 'myapp.sandbox.controller' // ... use "HelloController" as controller
    });
    c8yViewsProvider.when('/smarttraffic', { // when the path "/hello" is accessed ...
      templateUrl: ':::PLUGIN_PATH:::/sandbox/smarttraffic.html', //  ... display our html file "hello.html" inside the "views" folder of our plugin (the plugin's folder is represented using the magic string ```:::PLUGIN_PATH:::```, which is replaced by the actual path during the build process)
      controller: 'myapp.sandbox.controller' // ... use "HelloController" as controller
    });

  }
}());

