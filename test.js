import path from 'path';
import t from 'libtap';

import {FixtureRunDirectory} from '@cfware/fixture-run-directory';

t.type(FixtureRunDirectory, 'function');

const fixtures = path.resolve('fixtures');
const instancePopulated = new FixtureRunDirectory(fixtures, 'custom');
t.equal(instancePopulated.fixtureDirectory, fixtures);
t.equal(instancePopulated.runDirectory, path.join(fixtures, 'per-run', 'run-custom'));

const instance0 = new FixtureRunDirectory();
t.equal(instance0.fixtureDirectory, fixtures);
t.equal(instance0.runDirectory, path.join(fixtures, 'per-run', 'run-0'));
t.equal(instance0.fixturePath('file'), path.join(fixtures, 'file'));
t.equal(instance0.runPath('file'), path.join(instance0.runDirectory, 'file'));

const instance1 = new FixtureRunDirectory();
t.equal(instance1.runDirectory, path.join(fixtures, 'per-run', 'run-1'));
