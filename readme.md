# longest-common-subsequence [![Build Status](https://travis-ci.org/elazzabi/longest-common-subsequence.svg?branch=master)](https://travis-ci.org/elazzabi/longest-common-subsequence)

> Get the longest common subsequence of two strings as described in [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)

## Install

```
$ npm install --save longest-common-subsequence
```

## Usage

```js
const lcs = require('longest-common-subsequence');

lcs('Abc def', 'abc');
//=> 'abc'

lcs('abc def','Abc Def', true); // case sensitive = true
//=> 'bc ef'
```

## Testing

```
$ npm test
```

## License

MIT © [EL AZZABI Ahmed](http://elazzabi.com)
