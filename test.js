import path from 'node:path';
import t from 'libtap';

import {FixtureRunDirectory} from '@cfware/fixture-run-directory';

t.type(FixtureRunDirectory, 'function');

const fixtures = path.resolve('fixtures');
const instancePopulated = new FixtureRunDirectory({instanceID: 'custom', fixtures});
t.equal(instancePopulated.fixtureDirectory, fixtures);
t.equal(instancePopulated.runDirectory, path.join(fixtures, 'instances', 'custom'));

const instance0 = new FixtureRunDirectory({instanceID: 'run-0'});
t.equal(instance0.fixtureDirectory, fixtures);
t.equal(instance0.runDirectory, path.join(fixtures, 'instances', 'run-0'));
t.equal(instance0.fixturePath('file'), path.join(fixtures, 'file'));
t.equal(instance0.runPath('file'), path.join(instance0.runDirectory, 'file'));
