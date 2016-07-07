# The `src/app` Directory

## Overview

```
src/
  |- app/
  |  |- Phone/
  |  |  |- Controller
  |  |  |- Service
  |  |  |- View
  |  |  |- Tests
  |  |  |- phone.module.js
  |  |- app.js
```

The `src/app` directory contains all code specific to this application. Apart
from `app.js` and its accompanying tests (discussed below), this directory is
filled with subdirectories corresponding to high-level sections of the
application, often corresponding to top-level routes or modules. 

Each module will have its own directory and a module should be plug and playable 
and shouldn't depend on another module. Controllers, services and view for the 
module will be placed inside this folder with each sub-item having their own folder.

## `app.js`

This is our main app initialization file. It kickstarts the whole process by
requiring all the modules from `src/app` that we need. We must load these now to
ensure the routes are loaded. If as in our "phones" example there are
subroutes, we only require the top-level module, and allow the submodules to
require their own submodules.

As a matter of course, we also require the template modules that are generated
during the build.

However, the modules from `src/common` should be required by the app
submodules that need them to ensure proper dependency handling. These are
app-wide dependencies that are required to assemble your app.

```js
angular.module( 'ngBoilerplate', [
  'ngResource',
  'templates-app',
  'templates-common',
  'app.phone',
])
```

With app modules broken down in this way, all routing is performed by the
submodules we include, as that is where our app's functionality is really
defined.  So all we need to do in `app.js` is to include all the sub-modules
and configure an external 3rd party component.  

Use the main applications run method to execute any code after services
have been instantiated.

```js
.run( function run () {
})
```

## `config.js`
This is our configuration file. It has all the constants and configuration for the
application. In our 'phone' application we have a default route to follow,
which route of course is defined in a submodule. In this case, our `phone` module
is where we want to start, which has a defined route for `/phones` in
`Phone/phone.module.js`.

```js
.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/phones' );
});
```

### Testing

One of the design philosophies of `angularjs-boilerplate` is that tests should exist
alongside the code they test and that the build system should be smart enough to
know the difference and react accordingly. As such, the unit test for `app.js`
is `app.spec.js`, though it is quite minimal.

## `Modules`
The application will follow a modular approach. Each module has to be designed to work independently. There should be no dependency of a module in another module. 
Each module will have 
- A folder in its own name placed inside src/app/ folder. 
- A module initialization file in which all the configuration and routes for the modules are placed. The module initialization file should be named as `<Module_Name>.module.js`


## `Controller`
Controllers for the modules should be placed inside the Controller folder. Each 
controller will be named as `<Controller_Name>.controller.js`.  Controller should 
never hold the code for consuming / manipulating data.

## `Service`
All the data consumption and manipulation, business logic should be done 
in the service. It is advisable to have one service for each entity. Service 
should be placed inside the Service folder. `<Controller_Name>.service.js`


## `Tests`
Unit tests for the module should go into this folder. Extension of all the unit test cases should be .spec.js and should be placed in the Test folder. All the functions in Services should be unit tested.

## `Views`
All the partials should be placed inside the view folder and should have the extension .tpl.html. 
If a controller uses multiple partials, they can be placed inside an folder named by controller.