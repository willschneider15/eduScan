import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useMemo } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { LedgerWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import { GumUIProvider } from '@gumhq/ui-components';



require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }: AppProps) {
   // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
   const network = WalletAdapterNetwork.Devnet;

   // You can also provide a custom RPC endpoint
   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

   const wallets = useMemo(
       () => [
           /**
            * Wallets that implement either of these standards will be available automatically.
            *
            *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
            *     (https://github.com/solana-mobile/mobile-wallet-adapter)
            *   - Solana Wallet Standard
            *     (https://github.com/solana-labs/wallet-standard)
            *
            * If you wish to support a wallet that supports neither of those standards,
            * instantiate its legacy wallet adapter here. Common legacy adapters can be found
            * in the npm package `@solana/wallet-adapter-wallets`.
            */
           new PhantomWalletAdapter({ network }),
           new SlopeWalletAdapter(),
           new SolflareWalletAdapter({ network }),
           new TorusWalletAdapter(),
           new LedgerWalletAdapter(),
           new SolletWalletAdapter({ network }),
           new SolletExtensionWalletAdapter({ network }),
       ],
       // eslint-disable-next-line react-hooks/exhaustive-deps
       [network]
   );
  return (
    <>
     <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-NET6M4F6FG`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <GumUIProvider>
                <Component {...pageProps} />
              </GumUIProvider>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default MyApp
