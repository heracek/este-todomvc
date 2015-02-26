# Este.js • [TodoMVC](http://todomvc.com)

[![Dependency Status](https://david-dm.org/steida/este-todomvc.png)](https://david-dm.org/steida/este-todomvc) [![devDependency Status](https://david-dm.org/steida/este-todomvc/dev-status.png)](https://david-dm.org/steida/este-todomvc#info=devDependencies) [![Join the chat at https://gitter.im/steida/este-todomvc](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/steida/este-todomvc?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> ES6 React Flux webpack gulp om-like isomorphic immutable k̶i̶t̶c̶h̶e̶n̶s̶i̶n̶k̶ t̶w̶e̶e̶t̶y̶b̶i̶r̶d̶s̶ edition.

![Este Logo](https://cloud.githubusercontent.com/assets/66249/5931133/9e973dfc-a699-11e4-83bc-7b5c6fb58bfd.jpeg)

> The most cute web app boilerplate, with almost zero bus factor. Forget about over abstracted frameworks, use sheer libraries and leverage standards.

## Features

- Written in [BabelScript](https://babeljs.io/). Are you kidding? No, the [babeljs.io](http://babeljs.io) seems to be the best JavaScript transpiler. It handles future JavaScripts with [React JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) syntax spiced by [Flowtype](http://flowtype.org/) type [annotations](http://flowtype.org/docs/type-annotations.html#_) already.
- [React](http://facebook.github.io/react/), [Flux](https://facebook.github.io/flux/), [react-router](https://github.com/rackt/react-router), [immutable.js](http://facebook.github.io/immutable-js/), and more awesomeness.
- Isomorphic architecture with state-less stores, server rendering, and routing inside expressjs.
- The state of art performance thanks to [immutable.js](http://facebook.github.io/immutable-js) and [PureRenderMixin](http://facebook.github.io/react/docs/pure-render-mixin.html) combo.
- Well tuned dev stack based on [gulp.js](http://gulpjs.com/) and [webpack](http://webpack.github.io/) configured both for dev and production.
- CSS livereload and webpack module hot reload, so you can tweak React in real time.
- Vanilla [Flux](https://facebook.github.io/flux/), remember what I told you about frameworks?
- Isomorphic 404 and 500 pages.

## Install

```
  git clone https://github.com/steida/este-todomvc.git
  cd este-todomvc
  npm install
```

## Run

- `gulp` start development
- `gulp -p` run app in production mode
- `gulp build -p` build in production mode for continuous integration (CI)

## Todo

* [ ] [Jest](https://facebook.github.io/jest)
* [ ] [ESLint](http://eslint.org/), almost [ready](https://github.com/eslint/espree/issues/10).
* [ ] [flowtype](http://flowtype.org/)
* [ ] Localization with [formatjs.io](http://formatjs.io)
* [ ] Sync app state into localStorate across browser tabs/windows.
* [ ] Global app errors handling with last several states and dispatched actions.
* [ ] Async actions and [CSP channels](https://github.com/ubolonton/js-csp), [video](https://www.youtube.com/watch?v=W2DgDNQZOwo&list=PLb0IAmt7-GS1cbw4qonlQztYV1TAW0sCr&index=6).
* [ ] [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* [ ] React 0.13 [plain JS class](http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#plain-javascript-classes).
* [ ] An optional Closure Tools support.

## Credit

Created by [Daniel Steigerwald](http://daniel.steigerwald.cz/), [twitter.com/steida](https://twitter.com/steida)

