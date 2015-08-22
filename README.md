
# React Server rendering

A repo to test the way to render react component on server side, some code is copied from petehunt's ssr example.

There are two component file, `Timer.js`, `TimerEnhance.js`. 

### What does the `Timer.js` do?

Timer.js have a `render` method to just give a html presentaion, without event binding. It 
is used for the server rendering. So don't use `document`, `userAgent` in file like that.
We can rename this file to `Timer.ssr.js` for easy recognize.

### What does the `TimerEnhance.js` do?

`TimerEnhance` is a composited Component. It is used to rerender the Component on client side.
So the event binding etc will work.

## Test

`npm install && browserify -o browser-bundle.js && open index.html`.

or 

`borwserify -o browser-bundle.js && node server.js` after `npm install`.
