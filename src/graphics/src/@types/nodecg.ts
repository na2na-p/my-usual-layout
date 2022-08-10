export type ReplicantMap = {
	players: Array<{name: string; twitter: string}>;
	// ...
};

export type MessageMap = {
	updateFoo: {
		// optional value to send with sendMessage / value to receive from listenFor
		data: number;
		// optional value to receive from sendMessage / value to send with listenFor callback
		result: number;
		// optional error object/value sent from listenFor callback
		error: CustomError;
	};
};

type CustomError = unknown;
