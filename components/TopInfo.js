
import React, { useState } from 'react';

// Icons import

// Styles import
import tiStyles from '../styles/TopInfoStyles.module.css'

// Blockchain stuff
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';

const TopInfo = () => {
    const { address, account } = useGetAccountInfo();
    const smallAddress = 
        address.substring(0,12) + 
        "\u2026" + 
        address.substring((address.length-12),address.length);

    return (
        <div>
            <div className={tiStyles.gridTop}>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>
                        <h2 className={tiStyles.wTitle}>
                            Address
                        </h2>
                        <span className={tiStyles.text}> {smallAddress}</span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}>
                            NFTs Available 
                        </h2>
                        <span className={tiStyles.text}> 24/2500 </span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}>
                            NFT Price
                        </h2>
                        <span className={tiStyles.text}> 0.25 EGLD </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo
