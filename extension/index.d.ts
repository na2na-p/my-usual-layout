type ReplicantMap = {
    misskeyNotes: Array<{
        name: string;
        context: string;
    }>;
    players: Array<{
        name: string;
        twitter: string;
    }>;
};
type CustomError = unknown;
type MessageMap = {
    updateFoo: {
        data: number;
        result: number;
        error: CustomError;
    };
};
type BundleConfig = any;
import { CreateNodecgInstance } from 'ts-nodecg/server';
type NodeCG = CreateNodecgInstance<'my-usual-layout', BundleConfig, ReplicantMap, MessageMap>;
declare const _default: (nodecg: NodeCG) => void;
export default _default;
