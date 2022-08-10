import {CreateNodecgInstance, CreateNodecgConstructor} from 'ts-nodecg/browser';
import {ReplicantMap, MessageMap} from './nodecg.js';

type BundleConfig = any;

declare global {
	interface Window {
		nodecg: CreateNodecgInstance<
			'my-usual-layout', // name of your bundle
			BundleConfig,
			ReplicantMap,
			MessageMap
		>;
		NodeCG: CreateNodecgConstructor<
			'my-usual-layout', // name of your bundle
			BundleConfig,
			ReplicantMap,
			MessageMap
		>;
	}
}
