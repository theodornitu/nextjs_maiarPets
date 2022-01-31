// Components import
import Meta    from '../components/Meta';
import Nav     from '../components/Nav';
import Link    from 'next/link';
import React from 'react';

// Styles import
import dashStyles from '../styles/dash.module.css';

// Blockchain stuff
import { logout, useGetAccountInfo, DappProvider, useGetLoginInfo, AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import routes, { routeNames } from '../routes';

const dashboard = () => {

  const handleLogout = () => {
    logout(`${window.location.origin}/dapp`);
  };

  return (
    <div>
    <Meta />
    <Nav />
    <AuthenticatedRoutesWrapper
      routes={routes}
      unlockRoute={`${window.location.origin}/dapp`}
    >
      <div className={dashStyles.textBox}>
          <div className={dashStyles.logOut}>
              <button onClick={handleLogout}>Logout</button>
          </div>
      </div>
    </AuthenticatedRoutesWrapper>
    </div>
  )
}

export default dashboard
