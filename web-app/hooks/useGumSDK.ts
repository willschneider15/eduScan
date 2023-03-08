import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { Cluster, ConfirmOptions, Connection } from "@solana/web3.js";
import { SDK } from "@gumhq/sdk";
import { GraphQLClient } from "graphql-request";
import { useGum } from "@gumhq/react-sdk";








export const useGumSDK = (connection: Connection, opts: ConfirmOptions, cluster: Cluster) => {

  const DEVNET_GRAPHQL_ENDPOINT = "https://light-pelican-32.hasura.app/v1/graphql"

  const gqlClient = new GraphQLClient(DEVNET_GRAPHQL_ENDPOINT as string);

  const anchorWallet = useAnchorWallet() as AnchorWallet;

  const sdk = new SDK(anchorWallet, connection, opts, cluster, gqlClient);

  return sdk;
};

