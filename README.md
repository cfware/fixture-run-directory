# @cfware/fixture-run-directory [![NPM Version][npm-image]][npm-url]

Base class for building daemons within a fixture run directory.

```js
import path from 'path';
import {FixtureRunDirectory} from '@cfware/fixture-run-directory';

const fixtures = path.resolve('fixtures');
const instance0 = new FixtureRunDirectory({instanceID: 'instance0', fixtures});

console.log(instance0.instanceID);
// => instance0

console.log(instance0.fixtureDirectory);
// => $CWD/fixtures

console.log(instance0.fixturePath('dir', 'file'));
// => $CWD/fixtures/dir/file

console.log(instance0.runDirectory);
// => $CWD/fixtures/instances/instance0

console.log(instance0.runPath('dir', 'file'));
// => $CWD/fixtures/instances/instance0/dir/file

const instance1 = new FixtureRunDirectory({instanceID: 'instance1'});

console.log(instance1.runDirectory);
// => $CWD/fixtures/instances/instance1
```

### new FixtureRunDirectory({fixturePath, instanceID})

`fixturePath` defaults to `process.resolve(process.cwd(), 'fixtures')`.  The value
for `process.cwd()` is taken when this module is loaded.

`instanceID` must be provided and be a valid filesystem directory name.

[npm-image]: https://img.shields.io/npm/v/@cfware/fixture-run-directory.svg
[npm-url]: https://npmjs.org/package/@cfware/fixture-run-directory
