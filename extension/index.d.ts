declare type ReplicantMap = {
    misskeyNotes: Array<{
        name: string;
        context: string;
    }>;
    players: Array<{
        name: string;
        twitter: string;
    }>;
};
declare type CustomError = unknown;
declare type MessageMap = {
    updateFoo: {
        data: number;
        result: number;
        error: CustomError;
    };
};
declare type BundleConfig = any;
import { CreateNodecgInstance } from 'ts-nodecg/server';
declare type NodeCG = CreateNodecgInstance<'my-usual-layout', BundleConfig, ReplicantMap, MessageMap>;
declare const _default: (nodecg: NodeCG) => void;
export default _default;
