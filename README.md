# @calipsa/utils

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

## Installation
```bash
# using npm:
npm install --save @calipsa/utils

# or if you like yarn:
yarn add @calipsa/utils
```

## Usage
```javascript
import {
  delay,
  getObjectPaths,
  hasDuplicates,
  isPositiveInteger,
  isNonNegativeInteger,
  limitConcurrent,
  lockAsync,
  memoizeWeak,
  objectToArray,
  objectToFunction,
  objectToFunctionWithBind,
  objectToMap,
  ordinal,
  queryObjectToString,
  racePromises,
  racePromisesWithPositions,
  randomId,
  sliceRotate,
  toNearestByStep,
} from '@calipsa/utils'

// ...
```

[npm-url]: https://npmjs.org/package/@calipsa/utils
[downloads-image]: http://img.shields.io/npm/dm/@calipsa/utils.svg
[npm-image]: http://img.shields.io/npm/v/@calipsa/utils.svg
[david-dm-url]:https://david-dm.org/inker/@calipsa/utils
[david-dm-image]:https://david-dm.org/inker/@calipsa/utils.svg
[david-dm-dev-url]:https://david-dm.org/inker/@calipsa/utils#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/@calipsa/utils/dev-status.svg
