import { useFetchJson } from "../hooks";

const CoinsList = ({serverURL = "http://localhost:3000/cryptos", lastSentence = null}) => {


    //get the crypto representations from server
    const {isLoading, error, data: cryptos} = useFetchJson(serverURL);

    let coinId = 0;
    return ( 
        <ul className="coinsList">
            {
                isLoading

                &&

                <div className="isLoading">
                </div>
            }
            {
                cryptos

                &&

                Object.values(cryptos[0]).slice(0, 60).map(coin => {
                    return (
                        <li className="coin" key={coinId++ + 1} id={coin.name}>
                            <a href={""}>
                                <span className="coinPicFrame"><img src={`https://cryptologos.cc/logos/${(new String(coin.name)).replace(/\s+/g, "-").toLowerCase()}-${(new String(coin.symbol)).toLowerCase()}-logo.png`} /></span>
                                <span className="coinName">
                                    {`${coin.name} (${coin.symbol})`}
                                </span>
                            </a>
                        </li>
                    );
                })
            }
            {
                error

                &&

                <div className="error">
                    {error}
                </div>
            }
            {
                lastSentence

                &&

                <li className="coin moreCoins">{lastSentence}</li>
            }
        </ul>
     );
}
 
export default CoinsList;