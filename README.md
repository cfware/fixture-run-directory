# @cfware/fixture-run-directory [![NPM Version][npm-image]][npm-url]

Base class for building daemons within a fixture run directory.

```js
import {FixtureRunDirectory} from '@cfware/fixture-run-directory';

const instance0 = new FixtureRunDirectory();

console.log(instance0.fixtureDirectory);
// => $CWD/fixtures

console.log(instance0.fixturePath('dir', 'file'));
// => $CWD/fixtures/dir/file

console.log(instance0.runDirectory);
// => $CWD/fixtures/per-run/run-0

console.log(instance0.runPath('dir', 'file'));
// => $CWD/fixtures/per-run/run-0/dir/file

const instance1 = new FixtureRunDirectory();

console.log(instance1.runDirectory);
// => $CWD/fixtures/per-run/run-1
```

### new FixtureRunDirectory(fixturePath, runID)

`fixturePath` defaults to `process.resolve(process.cwd(), 'fixtures')`.  The value
for `process.cwd()` is taken when this module is loaded.

`runID` defaults to an auto-incrementing number, the first value is `0`.

[npm-image]: https://img.shields.io/npm/v/@cfware/fixture-run-directory.svg
[npm-url]: https://npmjs.org/package/@cfware/fixture-run-directory
