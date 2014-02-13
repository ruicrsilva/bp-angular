Boilerplate Angular
===================

A Boilerplate Angular project, with preconfigured Grunt tasks.


Installation
============


1) Get the Source
-----------------

Clone this repo:

```shell
git clone https://github.com/carlcraig/bp-angular.git
```


2) Install Global NPM Modules
-----------------------------

Run the following:

```shell
npm install -g grunt-cli
```


3) Install Project NPM Modules
------------------------------

Run the following:

```shell
npm install
```


4) Build the Application
------------------------

Run the following

```shell
grunt build
```

This will build the `www` directory


Grunt Tasks
===========


Watch
-----

```shell
grunt watch
```

This will watch files for changes, it also handles the livereloading.
Tasks need to be attached to the watch configuration.


Build
-----

```shell
grunt build
```

This will build the `www` directory from the `src` directory.


Server:Src
----------

```shell
grunt server:src
```

This will start a webserver on `127.0.0.1:9001` where you can view the application.
This will display the development app from the `src` directory.


Server:Build
----------


```shell
grunt server:build
```

This will start a webserver on `127.0.0.1:9002` where you can view the application.
This will display the built project from the `www` directory.
