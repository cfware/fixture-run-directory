import path from 'node:path';

const guessFixtureDirectory = path.join(process.cwd(), 'fixtures');

export class FixtureRunDirectory {
	constructor({instanceID, fixtureDirectory}) {
		this.instanceID = instanceID;
		this.fixtureDirectory = fixtureDirectory ?? guessFixtureDirectory;
		this.runDirectory = path.join(this.fixtureDirectory, 'instances', instanceID);
	}

	runPath(...args) {
		return path.join(this.runDirectory, ...args);
	}

	fixturePath(...args) {
		return path.join(this.fixtureDirectory, ...args);
	}
}
