import '../styles/modalGlobals.css'
import '../styles/globals.css'
import { DappCoreUIWrapper, DappUI } from '@elrondnetwork/dapp-core';
import { DappProvider } from '@elrondnetwork/dapp-core';
import { network, walletConnectBridge, walletConnectDeepLink } from '../config' 

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

function MyApp({ Component, pageProps }) {
  return (
      <DappProvider
      networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}
      >
          <Component {...pageProps} />
        
      </DappProvider>
  )
}

export default MyApp