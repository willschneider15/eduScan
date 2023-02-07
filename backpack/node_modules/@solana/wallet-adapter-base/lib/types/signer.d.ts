import type { Connection, TransactionSignature } from '@solana/web3.js';
import type { SendTransactionOptions, WalletAdapter, WalletAdapterProps } from './adapter.js';
import { BaseWalletAdapter } from './adapter.js';
import type { TransactionOrVersionedTransaction } from './types.js';
export interface SignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    signTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transaction: T): Promise<T>;
    signAllTransactions<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transactions: T[]): Promise<T[]>;
}
export declare type SignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> & SignerWalletAdapterProps<Name>;
export declare abstract class BaseSignerWalletAdapter<Name extends string = string> extends BaseWalletAdapter<Name> implements SignerWalletAdapter<Name> {
    sendTransaction(transaction: TransactionOrVersionedTransaction<this['supportedTransactionVersions']>, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
    abstract signTransaction<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transaction: T): Promise<T>;
    signAllTransactions<T extends TransactionOrVersionedTransaction<this['supportedTransactionVersions']>>(transactions: T[]): Promise<T[]>;
}
export interface MessageSignerWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}
export declare type MessageSignerWalletAdapter<Name extends string = string> = WalletAdapter<Name> & MessageSignerWalletAdapterProps<Name>;
export declare abstract class BaseMessageSignerWalletAdapter<Name extends string = string> extends BaseSignerWalletAdapter<Name> implements MessageSignerWalletAdapter<Name> {
    abstract signMessage(message: Uint8Array): Promise<Uint8Array>;
}
//# sourceMappingURL=signer.d.ts.map