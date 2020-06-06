export declare const sizes: readonly ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
export declare type Sizes = typeof sizes[number];
export declare const multiplier = 1024;
export declare const formatBytes: (bytes: number, decimals?: number) => string;
export declare const convertBytes: (bytes: number, from?: Sizes, to?: Sizes, decimals?: number) => number;
