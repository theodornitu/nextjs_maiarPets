// Components import
import Meta    from '../components/Meta';
import Nav     from '../components/Nav';
import TopInfo from '../components/TopInfo';

// React stuff
import React, { useState, useEffect } from 'react';
import { FaCheck, FaHourglass, FaTimes, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

// Styles import
import dashStyles from '../styles/dash.module.css';
import s  from '../styles/Home.module.css';
import tstyle from '../styles/txStatus.module.css'

// Blockchain stuff
import { 
  logout, 
  AuthenticatedRoutesWrapper,
  transactionServices,
  refreshAccount,
  useGetSignedTransactions
} from '@elrondnetwork/dapp-core';

// Config
import { contractAddress, network } from '../config';
import routes from '../routes';

const dashboard = () => {
  //Vars to be used
  var txStatus;
  var txHash;
  var smallTxHash;

  //Section styles
  const darkSection = [s.section, s.dark].join(" ");
  const lightSection = [s.section, s.light].join(" ");

  //Tx Sent handling
  const [isTxSent, setClick] = useState(false);
  const handleClick = () => setClick(!isTxSent);

  //SessionID
  const [sessionId, setTransactionSessionId] = useState(null);

  //Img handling
  const [imgSrc, setImgSrc] = useState("/normal1.png");
  const handleAdoptHover = () => setImgSrc("/mint1.png");
  const handleAdoptHoverOut = () => setImgSrc("/normal1.png");
  const handleLogoutHover = () => setImgSrc("/logout1.png");
  const handleLogoutHoverOut = () => setImgSrc("/normal1.png");

  //Tx status, signed, pending, failed, executed
  const signedTransactions = useGetSignedTransactions();
  const currentTx = signedTransactions[sessionId];
  if(currentTx != undefined){
    txStatus = currentTx.transactions[currentTx.transactions.length-1].status;
    txHash = currentTx.transactions[currentTx.transactions.length-1].hash;
    smallTxHash = txHash.substring(0,12) + "\u2026" + txHash.substring((txHash.length-12),txHash.length);
  }
  
  //Logout
  const handleLogout = () => {
    logout(`${window.location.origin}/dapp`);
  };

  //Mint (temporary contract to test minting one NFT. Currently no multiple mints)
  const { sendTransactions } = transactionServices;
  const sendPingTransaction = async () => {
    const pingTransaction = {
      value: '500000000000000000', //1000000000000000000
      data: 'buy@52696b69@01', //ping
      receiver: contractAddress
    };
    await refreshAccount();

    const {sessionId}  = await sendTransactions({
      transactions: pingTransaction,
      transactionsDisplayInfo: {
        processingMessage: 'Processing Mint transaction',
        errorMessage: 'An error has occured during Mint',
        successMessage: 'Mint transaction successful',
        transactionDuration: 1000
      }
    });

    if (sessionId != null) {
      handleClick();
      setTransactionSessionId(sessionId);
    }
  };

  //Tx result types
  const successTx = {
    title: 'Transaction executed! Success!',
    hash: network.explorerAddress + '/transactions/' + txHash,
    iconClassName: tstyle.bgSuccess
  };
  const pendingTx = {
    title: 'Transaction pending! Please wait!',
    hash: network.explorerAddress + '/transactions/' + txHash,
    iconClassName: tstyle.bgPending
  };
  const failedTx = {
    title: 'Transaction failed! Please try again!',
    hash: network.explorerAddress + '/transactions/' + txHash,
    iconClassName: tstyle.bgDanger
  };

  //Tx result pop-up
  function renderSwitch() {
    switch (txStatus) {
      case 'executed':
        {
          return (
            <div className={isTxSent ? tstyle.txSent : tstyle.txClosed}>
              <div className={tstyle.modalContainer}>
                <div className={tstyle.gridContainerRows}>
                  <div className={successTx.iconClassName}>
                    <FaCheck className={tstyle.iconStateSuccess} />
                  </div>
                  <div className={tstyle.textBox}>
                    <p className={tstyle.txText}>
                      {successTx.title}
                    </p>
                    <div className={tstyle.txHash}>
                      Transaction Hash:
                      <a href={successTx.hash}>
                        <p>
                          <FaSearch className={tstyle.faSearch} />
                          {smallTxHash}
                        </p>
                      </a>
                    </div>
                  </div>
                  <button className={tstyle.btnCls} onClick={handleClick}>Close</button>
                </div>
              </div>
            </div>
          )
        }
      case 'pending':
        {
          return (
            <div className={isTxSent ? tstyle.txSent : tstyle.txClosed}>
              <div className={tstyle.modalContainer}>
                <div className={tstyle.gridContainerRows}>
                  <div className={pendingTx.iconClassName}>
                    <FaHourglass className={tstyle.iconStatePending} />
                  </div>
                  <div>
                    <p className={tstyle.txText}>
                      {pendingTx.title}
                    </p>
                    <div className={tstyle.txHash}>
                      Transaction Hash:
                      <a href={pendingTx.hash}>
                        <p>
                          <FaSearch className={tstyle.faSearch} />
                          {smallTxHash}
                        </p>
                      </a>
                    </div>
                  </div>
                  <button className={tstyle.btnCls} onClick={handleClick}>Hide</button>
                </div>
              </div>
            </div>
          )
        }
      case 'failed':
        {
          console.log('log e swFail:');
          return (
            <div className={isTxSent ? tstyle.txSent : tstyle.txClosed}>
              <div className={tstyle.modalContainer}>
                <div className={tstyle.gridContainerRows}>
                  <div className={failedTx.iconClassName}>
                    <FaTimes className={tstyle.iconStateFailed} />  
                  </div>
                  <div>
                    <p className={tstyle.txText}>
                      {failedTx.title}
                    </p>
                    <div className={tstyle.txHash}>
                      Transaction Hash:
                      <a href={failedTx.hash}>
                        <p>
                          <FaSearch className={tstyle.faSearch} />
                          {smallTxHash}
                        </p>
                      </a>
                    </div>
                  </div>
                  <button className={tstyle.btnCls} onClick={handleClick}>Close</button>
                </div>
              </div>
            </div>
          )
        }
    }
    return null;
  }

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
                src={imgSrc}
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
                    <button 
                      className={dashStyles.button} 
                      onClick={sendPingTransaction}
                      onMouseOver={handleAdoptHover}
                      onMouseOut={handleAdoptHoverOut}
                    >
                      Adopt
                    </button>
                    </li>
                  <li>
                    <button 
                      className={dashStyles.button} 
                      onClick={handleLogout}
                      onMouseOver={handleLogoutHover}
                      onMouseOut={handleLogoutHoverOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {renderSwitch()}
    </AuthenticatedRoutesWrapper>
    </div>
  )
}

export default dashboard
