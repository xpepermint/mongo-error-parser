# [mongo](https://docs.mongodb.com/ecosystem/drivers/node-js/)-error-parser

> Mongodb error message parser.

This is a simple helper package allows for parsing MongoDB error messages. Use this package to get detailed data from the error message (e.g. `index name` for code `11000`).

## Install

```
$ npm install mongo-error-parser
```

## Example

```js
const parse = require('mongo-error-parser');

try {
  // mongo code here which throws e.g. unique index error
} catch (e) {
  parse(e); // -> {name:, message:, code:, index:}
}
```
