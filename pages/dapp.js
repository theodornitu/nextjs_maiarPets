// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import React from 'react';
import { useRouter } from 'next/router'

// Styles import
import dappStyles from '../styles/dapp.module.css'


// Blockchain stuff
import { AuthenticatedRoutesWrapper, DappUI, useGetLoginInfo, logout } from '@elrondnetwork/dapp-core';
import routes, { routeNames } from '../routes';

const dapp = () => {
    const Router = useRouter();
    const { isLoggedIn } = useGetLoginInfo();

    React.useEffect(async () => {
        if (isLoggedIn) {
            Router.replace('/dashboard');
        }
    }, [isLoggedIn]);

    return (
        <div>
        <Meta />
        <Nav />
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={'/dapp'}
        >
            <div className={dappStyles.textBox}>
                <div className={dappStyles.loginTitle}>
                    Select login method
                </div>
            </div>
            <div className={dappStyles.textBox}>
                <ul className={dappStyles.buttonList}>
                    <li>
                        <DappUI.ExtensionLoginButton
                            callbackRoute={routeNames.dashboard}
                            loginButtonText={'Extension'}
                            buttonClassName={dappStyles.button}
                        />
                    </li>
                    <li>
                        <DappUI.WebWalletLoginButton
                            callbackRoute={routeNames.dashboard}
                            loginButtonText={'Web wallet'}
                            buttonClassName={dappStyles.button}
                        />
                    </li>
                    <li>
                        <DappUI.LedgerLoginButton 
                            loginButtonText={'Ledger'}
                            callbackRoute={routeNames.dashboard}
                            buttonClassName={dappStyles.button}
                        />
                    </li>
                    <li>
                        <DappUI.WalletConnectLoginButton
                            callbackRoute={routeNames.dashboard}
                            loginButtonText={'Maiar'}
                            buttonClassName={dappStyles.button}
                            className='login-button'
                            loginButtonText= 'Maiar App'
                        />
                    </li>
                </ul>
            </div>
        </AuthenticatedRoutesWrapper>
        </div>
    )
}

export default dapp