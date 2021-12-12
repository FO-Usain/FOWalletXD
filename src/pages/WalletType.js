import {useState} from 'react'
import {Link} from 'react-router-dom';
import { useFetchJson } from '../hooks';

const WalletType = () => {

    const legalArrow = "/images/pages/legal/legalArrow.png";
    const {isLoading, error, data: cryptos} = useFetchJson("http://localhost:4000/cryptos");
    const multiCoin = {
        name: "Multi-Coin Wallet",
        imgSrc: "/images/logo.png"
    }

    return ( 
        <div className=" app walletType">
            <h2 className="appHeader">Import</h2>
            <div className="padded">
                <Link className="wallets multiCoinWallet CoinWallet" to="/login/passphrase">
                    <span className="coinLogoFrame"><img src={multiCoin.imgSrc} /></span>
                    <span className="walletName-rArrow">
                        <span className="coinName">{multiCoin.name}</span>
                        <span className="rArrowFrame"><img src={legalArrow} /></span>
                    </span>
                </Link>
                {
                    isLoading

                    &&

                    <div className="loadingWallets">
                        Loading
                    </div>
                }
                {
                    cryptos

                    &&
                
                    <div className="wallets">
                        {
                            Object.values(cryptos[0]).slice(0, 60).map(crypto => {
                                return (
                                    <Link className="CoinWallet">
                                        <span className="coinLogoFrame"><img src={`https://cryptologos.cc/logos/${(new String(crypto.name)).replace(/\s+/g, "-").toLowerCase()}-${(new String(crypto.symbol)).toLowerCase()}-logo.png`} /></span>
                                        <span className="walletName-rArrow">
                                            <span className="coinName">{crypto.name}</span>
                                            <span className="rArrowFrame"><img src={legalArrow} /></span>
                                        </span>
                                    </Link>      
                                )
                            })
                        }
                    </div>
                }
                {
                    error

                    &&

                    <div className="walletsError"></div>
                }
            </div>
        </div>
     );
}
 
export default WalletType;