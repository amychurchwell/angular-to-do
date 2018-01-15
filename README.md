# Angular Homework

Is a framework, less code. Built-in tools.

https://angular.io/guide/cheatsheet

https://angular.io/guide/styleguide

Example Angular repo: https://github.com/epicodus-lessons/angular2-to-do/tree/1.0_angular_2_setup_dependencies_build_tools_and_typescript

### Setup

1. $ ng new [directory name]

PRO TIP: Run $ npm list -g --depth=0 to see what npm packages are installed on your machine.


A *polyfill* is code that implements a feature on browsers that don't technically support that feature. :O (Compensates for any issues.)

* Error concerning polyfills? USE THIS:

```
$ npm install promise-polyfill --save-exact
```

*SystemJS* is a module loader tool. Angular uses it internally to construct our apps.


* .gitignore

*.gitignore*
```
node_modules/
npm-debug.log
bower_components/
app/*.js
app/*.js.map
.DS_Store
build/
```


```
$ npm install
$ bower init
$ bower install
$ bower install bootstrap --save
$ gulp build
$ gulp serve
```

***
### Component Files

_Annotation_

_Class Definition_

The class annotation, where our template property resides, determines how a component appears, whereas the class declaration(?) defines how it behaves.

### Directives

* Angular has a set of built-in tools called _directives_ that allow us to add loops, conditionals, and other functionality directly into our templates.

1. !!! *Structural Directives*: These change the structure of the DOM by adding and removing elements. (This is similar to how we added and removed elements using the jQuery .append() and .remove() methods in Intro to Programming).

https://angular.io/guide/structural-directives

2. *Attribute Directives*: These change the appearance or behavior of an element in the DOM (for instance, we can dynamically add or remove CSS styles).

3. *Components*: Components are directives, too. This is because they can be dynamically rendered in the DOM, and alter its appearance.


### Vocab

* _Client_: A tool (usually a web browser) that runs on the user's local machine and facilitates their interaction with the internet.

* _Server_: A machine that waits for incoming requests from clients. It contains resources (such as web pages and files) that can be provided to requesting clients.

* _Client-Side_: The actions that must occur to run an application are handled primarily by the client instead of the server.

* _Server-Side_: Considered the "opposite" of client-side, in a sense, applications in which the client's request to view a page triggers the execution of a script that runs on the server to generate dynamic HTML. This HTML is then sent to the client browser.

* _Model-View-Controller_: A type of design followed by many frameworks (including Angular) in which application, and all interactions are managed by models, views, and controllers.

* _Model_: Represents data, and how the data is defined. Most applications require some sort of data.

* _View_: The portion of an application the user sees, or views. It represents the user interface of the application.

* _Controller_: Handles input from the user such as clicks or browser events. It is responsible for updating the model when necessary.

* _Client-Side MVC_: An application that both follows the MVC design structure, and relies on the client to handle most of the actions necessary to run. Angular 2, for example.

* _Component_: A small, reusable package of both front and back-end code that works together. That means components handle both rendering front-end pieces of user interface and any back-end logic required to make those front-end elements interactive.
