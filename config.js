import { NetworkType } from '@elrondnetwork/dapp-core';

export const decimals = 4;
export const denomination = 18;
export const gasPerDataByte = 1500;
export const timeout = 10000; // 10 sec

export const walletConnectBridgeAddresses = [
  'https://bridge.walletconnect.org'
];
export const walletConnectBridge =
  walletConnectBridgeAddresses[
    Math.floor(Math.random() * walletConnectBridgeAddresses.length)
  ];

export const walletConnectDeepLink =
  'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgq88hw467yyzcmcep29t6uxaj7twtse7vtd8ssn5tgr0';

export const dAppName = 'MaiarPets NFT';

export const network = {
  id: 'devnet',
  name: 'Devnet',
  egldLabel: 'xEGLD',
  walletAddress: 'https://devnet-wallet.elrond.com',
  apiAddress: 'https://devnet-api.elrond.com',
  gatewayAddress: 'https://devnet-gateway.elrond.com',
  explorerAddress: 'http://devnet-explorer.elrond.com',
  graphQlAddress: 'https://devnet-exchange-graph.elrond.com/graphql'
};