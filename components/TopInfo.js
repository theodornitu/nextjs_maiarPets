// Components

// Reactjs & Nextjs
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Link from 'next/link';

// Config & Helpers

// Styles
import tiStyles from '../styles/TopInfoStyles.module.css'

// Blockchain
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { network } from '../config';

const TopInfo = () => {
    //Account info
    const showChars = 12;
    const { address, account } = useGetAccountInfo();
    const explorerLink = network.explorerAddress + "/accounts/" + address;
    const smallAddress = address.substring(0,showChars) + "\u2026" + address.substring((address.length-showChars),address.length);

    //NFT info
    const total_supply = 3500;
    const mint_price = '0.3 EGLD';
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
                        <h2 className={tiStyles.wTitle}> Wallet Address </h2>
                        <span className={tiStyles.textLink}> 
                            <a target="_blank" href={explorerLink}>{smallAddress}</a>
                        </span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}> NFTs Available </h2>
                        <span className={tiStyles.text}> {leftToMint}/{total_supply} </span>
                    </div>
                </div>
                <div className={tiStyles.dataComponent}>
                    <div className={tiStyles.textField}>    
                        <h2 className={tiStyles.wTitle}> NFT Price </h2>
                        <span className={tiStyles.text}> {mint_price} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopInfo
