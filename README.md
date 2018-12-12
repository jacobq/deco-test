## Repro steps

* `git clone https://github.com/jacobq/deco-test.git`
* `cd deco-test`
* `npm install`
* `ember build`

**Update:** After moving `@ember-decorators/babel-transforms` from devDependencies to dependencies it seems to work!

## ~~Error~~

```
Build Error (broccoli-persistent-filter:Babel > [Babel: deco-test]) in deco-test/components/comp-with-decos.js

/path/to/deco-test/deco-test/components/comp-with-decos.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (10:3):

   8 |   greetee: 'world'
   9 | }) {
> 10 |   @computed('greetee')
     |   ^
  11 |   get greeting() {
  12 |     return `Hello, ${this.greetee}!`;
  13 |   }
```
