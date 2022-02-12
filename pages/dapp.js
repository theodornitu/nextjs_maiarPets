// Components import
import Meta    from '../components/Meta'
import Nav     from '../components/Nav'
import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

// Styles import
import dappStyles from '../styles/dapp.module.css'

// Blockchain stuff
import { AuthenticatedRoutesWrapper, DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import routes, { routeNames, navPages } from '../routes';

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
          unlockRoute={navPages.home}
        >
            <div className={dappStyles.textBox}>
                <div className={dappStyles.loginTitle}>Select login method</div>
            </div>
            <div className={dappStyles.textBox2}>
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
                            buttonClassName={dappStyles.button}
                            className='login-button'
                        />
                    </li>
                </ul>
            </div>
            <div className={dappStyles.loginHelpContainer}>
                <div className={dappStyles.loginHelpContent}>
                    <div className={dappStyles.loginTitle}>
                        No wallet? No problem, let's get you set up!
                    </div>
                    <div className={dappStyles.loginHelpVideoContainer}>
                        <iframe 
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                              }} 
                            src="https://www.youtube.com/embed/5XPwev9P27M" 
                            title="Maiar App tutorial" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    </div>
                    <div className={dappStyles.loginRef}>
                        You can also use the refferal code:
                        <div className = {dappStyles.linkRef}>
                            <a target="_blank" href='https://get.maiar.com/referral/eayja0xs77'> eayja0xs77 </a>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedRoutesWrapper>
        </div>
    )
}

export default dapp