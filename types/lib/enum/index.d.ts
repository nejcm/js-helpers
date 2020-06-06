export declare type Value = string | number;
export declare type Key = string | number;
export interface EnumObject {
    properties?: {
        [key: string]: unknown;
    };
    [key: string]: unknown;
}
export interface Enum extends EnumObject {
    all: (...exclude: Value[]) => Value[];
    getValue: (keys: string | string[], fallback?: Value) => Value;
    getProperty: (value: Value, propKeys: string | string[], fallback?: Value) => Value;
    getPropertyByKey: (key: Value, propKeys: string | string[], fallback?: Value) => Value;
    [Symbol.iterator](): Pick<Iterator<unknown>, 'next'>;
}
declare const enumerable: (obj: EnumObject) => Enum;
export default enumerable;
