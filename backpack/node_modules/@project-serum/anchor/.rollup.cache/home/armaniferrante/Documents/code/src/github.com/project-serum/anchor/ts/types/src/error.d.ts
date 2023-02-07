import { PublicKey } from "@solana/web3.js";
export declare class IdlError extends Error {
    constructor(message: string);
}
interface ErrorCode {
    code: string;
    number: number;
}
interface FileLine {
    file: string;
    line: number;
}
declare type Origin = string | FileLine;
declare type ComparedAccountNames = [string, string];
declare type ComparedPublicKeys = [PublicKey, PublicKey];
declare type ComparedValues = ComparedAccountNames | ComparedPublicKeys;
export declare class ProgramErrorStack {
    readonly stack: PublicKey[];
    constructor(stack: PublicKey[]);
    static parse(logs: string[]): ProgramErrorStack;
}
export declare class AnchorError extends Error {
    readonly errorLogs: string[];
    readonly logs: string[];
    readonly error: {
        errorCode: ErrorCode;
        errorMessage: string;
        comparedValues?: ComparedValues;
        origin?: Origin;
    };
    private readonly _programErrorStack;
    constructor(errorCode: ErrorCode, errorMessage: string, errorLogs: string[], logs: string[], origin?: Origin, comparedValues?: ComparedValues);
    static parse(logs: string[]): AnchorError | null;
    get program(): PublicKey;
    get programErrorStack(): PublicKey[];
    toString(): string;
}
export declare class ProgramError extends Error {
    readonly code: number;
    readonly msg: string;
    readonly logs?: string[] | undefined;
    private readonly _programErrorStack?;
    constructor(code: number, msg: string, logs?: string[] | undefined);
    static parse(err: any, idlErrors: Map<number, string>): ProgramError | null;
    get program(): PublicKey | undefined;
    get programErrorStack(): PublicKey[] | undefined;
    toString(): string;
}
export declare function translateError(err: any, idlErrors: Map<number, string>): any;
export {};
//# sourceMappingURL=error.d.ts.map