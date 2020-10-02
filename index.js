import path from 'path';
import {EventEmitter} from 'events';

const guessFixtureDirectory = path.join(process.cwd(), 'fixtures');
let uniqueRunIndex = 0;
const nextIndex = () => uniqueRunIndex++;

export class FixtureRunDirectory extends EventEmitter {
	constructor(fixtureDirectory = guessFixtureDirectory, runID = nextIndex()) {
		super();

		this.fixtureDirectory = fixtureDirectory;
		this.runDirectory = path.join(this.fixtureDirectory, 'per-run', `run-${runID}`);
	}

	runPath(...args) {
		return path.join(this.runDirectory, ...args);
	}

	fixturePath(...args) {
		return path.join(this.fixtureDirectory, ...args);
	}
}
