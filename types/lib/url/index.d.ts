export declare type Value = string | number | boolean | {
    [key: string]: unknown;
} | null | undefined;
export declare type Obj = {
    [key: string]: Value;
};
export declare const serialize: (obj: Obj, removeEmpty?: boolean) => string;
export declare const deserialize: (queryString: string) => Obj;
export declare const pushHistoryState: (obj: Obj, title: string, path: string, queryString?: string | undefined) => boolean;
export declare const replaceHistoryState: (obj: Obj, title: string, path: string, queryString?: string | undefined) => boolean;
