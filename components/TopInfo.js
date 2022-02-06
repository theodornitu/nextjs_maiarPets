
import React, { useState, useEffect } from 'react';
import axios from "axios";

// Icons import

// Styles import
import tiStyles from '../styles/TopInfoStyles.module.css'

// Blockchain stuff
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { network } from '../config';

const TopInfo = () => {
    const { address, account } = useGetAccountInfo();
    const smallAddress = 
        address.substring(0,12) + 
        "\u2026" + 
        address.substring((address.length-12),address.length);

    //NFT info
    const total_supply = 2500;
    const [data, setData] = useState(null);
    const [leftToMint, setLeftToMint] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            network.apiAddress + "/nfts/count?collection=PETS-8cdb62",
        );

        setData(result.data);
        setLeftToMint(total_supply - result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className={tiStyles.gridTop}>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>
                        <h2 className={tiStyles.wTitle}>
                            Wallet Address
                        </h2>
                        <span className={tiStyles.text}> {smallAddress}</span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}>
                            NFTs Available 
                        </h2>
                        <span className={tiStyles.text}> {leftToMint}/2500 </span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}>
                            NFT Price
                        </h2>
                        <span className={tiStyles.text}> 0.5 EGLD </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo
