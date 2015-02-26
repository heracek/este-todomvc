# Este.js • [TodoMVC](http://todomvc.com)

[![Dependency Status](https://david-dm.org/steida/este-todomvc.png)](https://david-dm.org/steida/este-todomvc) [![devDependency Status](https://david-dm.org/steida/este-todomvc/dev-status.png)](https://david-dm.org/steida/este-todomvc#info=devDependencies) [![Join the chat at https://gitter.im/steida/este-todomvc](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/steida/este-todomvc?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> ES6 React Flux webpack gulp om-like isomorphic immutable k̶i̶t̶c̶h̶e̶n̶s̶i̶n̶k̶ t̶w̶e̶e̶t̶y̶b̶i̶r̶d̶s̶ edition.

![Este Logo](https://cloud.githubusercontent.com/assets/66249/5931133/9e973dfc-a699-11e4-83bc-7b5c6fb58bfd.jpeg)

> The most cute web app boilerplate, with almost zero bus factor. Forget about over abstracted frameworks, use sheer libraries and leverage standards.

## Features

- Written in [BabelScript](https://babeljs.io/). Are you kidding me? No, the [babeljs.io](http://babeljs.io) is the best JavaScript transpiler. It handles future JavaScripts with [React JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax spiced by [Flowtype](http://flowtype.org/) type [annotations](http://flowtype.org/docs/type-annotations.html#_).
- [React](http://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [react-router](https://github.com/rackt/react-router), [immutable.js](http://facebook.github.io/immutable-js/), and more awesomeness.
- Isomorphic architecture with state-less stores, server rendering, and routing inside expressjs.
- The state of art performance thanks to [immutable.js](http://facebook.github.io/immutable-js) and [PureRendererMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) combo.
- Well tuned dev stack based on [gulp.js](http://gulpjs.com/) and [webpack](http://webpack.github.io/) configured both for dev and production.
- CSS livereload and webpack module hot reload, so you can tweak React components in real time.
- Vanilla [Flux](https://facebook.github.io/flux/), remember what I told you about frameworks?
- Isomorphic 404 and 500 pages.

## Install

```
  git clone https://github.com/steida/este-todomvc.git
  npm i
```

## Run

- `gulp` start development
- `gulp -p` run app in production mode
- `gulp build -p` build in production mode for continuous integration (CI)

## Todo

- jest, eslint, flowlang
- localization with http://formatjs.io
- sync app state in localstorage across tabs, that's how every web app should work
- app errors handling
- async actions


## Credit

Created by [Daniel Steigerwald](http://daniel.steigerwald.cz/)

