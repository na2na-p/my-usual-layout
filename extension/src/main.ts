type ReplicantMap = {
	misskeyNotes: Array<{name:string, context: string}>
	players: Array<{name: string; twitter: string}>;
	// ...
};

type CustomError = unknown

type MessageMap = {
	updateFoo: {
		// optional value to send with sendMessage / value to receive from listenFor
		data: number;
		// optional value to receive from sendMessage / value to send with listenFor callback
		result: number;
		// optional error object/value sent from listenFor callback
		error: CustomError;
	};
};

type BundleConfig = any;

import {CreateNodecgInstance} from 'ts-nodecg/server';

type NodeCG = CreateNodecgInstance<
	'my-usual-layout', // name of your bundle
	BundleConfig,
	ReplicantMap,
	MessageMap
>;

export default (nodecg: NodeCG) => {
	nodecg.log.info('Hello, from your bundle\'s extension!');
	nodecg.log.info('I\'m where you put all your server-side code.');
	nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`);
	nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
	nodecg.log.info('Visit https://nodecg.com for full documentation.');
	nodecg.log.info('Good luck!');
};
