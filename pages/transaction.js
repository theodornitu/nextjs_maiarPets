// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import Link from 'next/link'

// Styles import
import Welcome from '../components/Welcome'

// Blockchain stuff
import { DappProvider, DappUI } from '@elrondnetwork/dapp-core';
import { network, walletConnectBridge, walletConnectDeepLink } from '../config' 
import { routeNames } from '../routes';

const transaction = () => {
  return (
    <div>
        <Meta />
        <Nav />
        <DappProvider networkConfig={{ network, walletConnectBridge, walletConnectDeepLink }}> 
            <span>Transaction</span>
        </DappProvider>
    </div>
  )
}

export default transaction
