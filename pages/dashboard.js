// Components import
import Meta    from '../components/Meta';
import Nav     from '../components/Nav';
import TopInfo from '../components/TopInfo';
import Link    from 'next/link';
import React from 'react';

// Styles import
import dashStyles from '../styles/dash.module.css';
import s  from '../styles/Home.module.css'

// Blockchain stuff
import { logout, AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import routes, { routeNames } from '../routes';

const dashboard = () => {
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");

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
      <TopInfo />
      <section className={lightSection}>
          <div className={dashStyles.gridContainer}>
              <img 
                src="/MaiarPet3.png" 
                class = {dashStyles.imgStyle} 
                alt="Riki NFT #3" 
                width={350} 
                height={350}  
              />
              <div className={dashStyles.mintContainer}>
                <div className={dashStyles.mintLead}>
                  <p className={dashStyles.mintTitle}>
                    Adopt your own Maiar Pet today!
                  </p>
                  <p className={dashStyles.mintText}>
                    Maiar Pets is a community project that aims to donate monthly to help animals in need and offer real-life benefits and rewards for warm-hearted Maiar Pets NFT owners.
                  </p>
                  <p className={dashStyles.mintText}>
                    The first collection features our first #superstar, Riki. 
                    By adopting a Maiar Pet you get to be part of the coolest animal lovers community and get a cool #profilePic in exchange. 
                  </p> 
                </div>
                <ul className={dashStyles.mintButtons}>
                  <li>
                    <button className={dashStyles.button}>Mint</button>
                    </li>
                  <li>
                    <button className={dashStyles.button} onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          
      </section>
      

    </AuthenticatedRoutesWrapper>
    </div>
  )
}

export default dashboard
