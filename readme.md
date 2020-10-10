<br />
<p align="center">
  <img src="https://i.ibb.co/1X27zFt/Group-6.png" width="85%"/>
</p>
<h2 align="center"></h2>

<p align="center">🌪 Painless utility to handle scroll positions and methods in react < 1KB</p>

<br />
<br />

[![npm](https://badge.fury.io/js/aimscroll.svg)](https://www.npmjs.com/package/aimscroll)

[![NPM](https://nodei.co/npm/aimscroll.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aimscroll/)

<!-- useState, but simplified for complex states in React apps. -->

### [See Demo On Codesandbox](https://codesandbox.io/s/jolly-gould-6s6yl?file=/src/App.js)

## ⚡️Overview

Have you ever tried to add a feature to an element when the users scrolls to a
certain extent ? or even tried the popular scroll aesthetic of adding a
box-shadow to your navbar when the user scrolls up ?. aimscroll is Painless
utility libary to handle scroll positions and methods in React.

## 🔧 Installation

You can easily install this package with yarn or npm:

```
$ yarn add aimscroll
```

or

```
$ npm install --save aimscroll
```

## ✨ Features

- 😎 Easy to learn
- 📦 ~400b (gzipped)
- 🙅‍♂️ Zero dependencies
- ✂️ Super-flexible API
- ✅ Fully tested and reliable
- ⚒ CommonJS, ESM & browser standalone support

## 📖 Usage

Its really easy just like you use your popular React hooks. Here is a simple
example below

```jsx
import React from 'react';
import { useAimScroll } from 'aimscroll';

export default function App() {
  const [userScrolledUp] = useAimScroll(10);
  return (
    <div className="App">
      {userScrolledUp && <h2>Tada!! i showed when the user scrolled up</h2>}
    </div>
  );
}
```

You see!, its really easy check the documentation for an outline of each and
every utilites and how to use them properly.

## 🍷 Documentation

### useAimScroll - [Demo](https://codesandbox.io/s/jolly-gould-6s6yl?file=/src/App.js)

> returns -- Boolean and function, accepts -- Number

- `scrollStart` - at what scroll point you want the function to invoke.
- `scrollEnd` - at what point you want the function to unsubscribe.
- The returned function from `useAimScroll` is to force update and its advised
  not to be used. see example below

```jsx
import React from 'react';
import { useAimScroll } from 'aimscroll';

export default function App() {
  const [userScrolledUp, forceUpdate] = useAimScroll(10, 100); // starts at 10 and ends at 100
  return (
    <div className="App">
      {userScrolledUp && <h2>Tada!! i showed when the user scrolled up</h2>}
    </div>
  );
}
```

### useScrollPosition - [Demo](https://codesandbox.io/s/jolly-gould-6s6yl?file=/src/useScrollPositionDemo.js)

> returns -- Object

- `useScrollPosition` - checks for the current position of the users window /
  document on the X and Y axis. see example below

```jsx
import React from 'react';
import { useScrollPosition } from 'aimscroll';

export default function App() {
  const { x, y } = useScrollPosition();
  return (
    <div className="App">
      <p>
        {x} {/* Returns the current scroll position on X axis */}
      </p>
      <p>
        {y} {/* Returns the current scroll position on Y axis */}
      </p>
    </div>
  );
}
```

### useScrollX - [Demo](https://codesandbox.io/s/jolly-gould-6s6yl?file=/src/useScrollPositionDemo.js)

> returns -- Number

- `useScrollX` - Returns the scroll position on X axis see file
  [here](https://github.com/adenekan41/aimscroll/blob/master/src/use-scroll-position.js)

```jsx
import React from 'react';
import { useScrollX } from 'aimscroll';

export default function App() {
  return (
    <div className="App">
      <p>{useScrollX()}</p>{' '}
      {/* Returns the current scroll position on X axis */}
    </div>
  );
}
```

### useScrollY - [Demo](https://codesandbox.io/s/jolly-gould-6s6yl?file=/src/useScrollPositionDemo.js)

> returns -- Number

- `useScrollY` - Returns the scroll position on Y axis see file
  [here](https://github.com/adenekan41/aimscroll/blob/master/src/use-scroll-position.js)

```jsx
import React from 'react';
import { useScrollY } from 'aimscroll';

export default function App() {
  return (
    <div className="App">
      <p>{useScrollY()}</p>{' '}
      {/* Returns the current scroll position on Y axis */}
    </div>
  );
}
```

## 🤔Thought Process

Aimscroll is built on top of React. I first tried out this concept when i wanted
to add custom features to an element at the point the page offests a scroll
position, and i came up with aimscroll. Seeing its re-usability and convenience,
I decided to convert it to a standalone open-source library for others to
benefit from the awesomeness of this package.

## 🤝 License

> MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
> [@adenekan41 / codewonders](https://github.com/adenekan41)
