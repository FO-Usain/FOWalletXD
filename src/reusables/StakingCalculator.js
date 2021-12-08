import {  useState} from 'react';

const StakingCalc = () => {
    let coins = [
        {
            id: 1,
            name: "Binance Coin",
            symbol: "BNB",
            percent: "11",
            dEarning: "0.0409",       //daily earnings
            mEarning: "0.9808",       //monthly earnings
            yEarning: "11.77",       //yearly earnings
        },
        {
            id: 2,
            name: "kava",
            symbol: "KAVA",
            percent: "10",
            dEarning: "0.0372",       //daily earnings
            mEarning: "0.8917",       //monthly earnings
            yEarning: "10.70",       //yearly earnings
        },
        {
            id: 3,
            name: "Algorand",
            symbol: "ALGO",
            percent: "6",
            dEarning: "0.0223",       //daily earnings
            mEarning: "0.5350",       //monthly earnings
            yEarning: "6.42",       //yearly earnings
        },
        {
            id: 4,
            name: "Cosmos",
            symbol: "ATOM",
            percent: "7",
            dEarning: "0.0260",       //daily earnings
            mEarning: "0.6242",       //monthly earnings
            yEarning: "7.49",       //yearly earnings
        },
        {
            id: 5,
            name: "Tezos",
            symbol: "XTZ",
            percent: "5",
            dEarning: "0.0186",       //daily earnings
            mEarning: "0.4458",       //monthly earnings
            yEarning: "5.35",       //yearly earnings
        },
        {
            id: 6,
            name: "TRON",
            symbol: "TRX",
            percent: "4.1",
            dEarning: "0.0152",       //daily earnings
            mEarning: "0.3656",       //monthly earnings
            yEarning: "4.39",       //yearly earnings
        },
    ];

    const [selected, setSelected] = useState(coins[0]);
    const [coinCount, setCoinCount] = useState(100);

    const changeVisibility = (elId) => {
        let el = document.querySelector(`#${elId}`);

        if (!el) {
            throw Error(`in changeVisibility: no element with ID ${elId}`);
        }

        let visibility = el.style.visibility;

        el.style.visibility = (visibility == "hidden") ? "visible" : "hidden";
    }

    const chooseCoin = (optionId) => {
        setSelected(coins[optionId - 1]);
    }

    return ( 
        <form method="get" className="stakingCalc">
            <h2 className="calcTitle">Staking calculator</h2>
            <p className="shortNote">Estimated earnings from current APR</p>
            <div className="coinSelection">
                <div className="selected" onClick={() => {changeVisibility("optionsContainer")}}>
                    <span className="logo-name">
                        <span className="logoFrame"><img src={`https://cryptologos.cc/logos/${(new String(selected.name)).replace(/\s+/g, "-").toLowerCase()}-${(new String(selected.symbol)).toLowerCase()}-logo.png`} /></span>
                        <span className="name">{selected.name}</span>
                    </span>
                    <span className="percentChange">{`${selected.percent}%`}</span>
                </div>
                <div id="optionsContainer" className="optionsContainer">
                    <ul className="options">
                        <li className="option meta">
                            <span className="coin">Coin</span>
                            <span className="currAPY">Current APY</span>
                        </li>
                        {
                            coins.map(coin => {
                                return (
                                    <li className="option tappable" key={coin.id} onClick={() => {chooseCoin(coin.id)}}>
                                        <span className="coin logo-name">
                                            <span className="logoFrame"><img src={`https://cryptologos.cc/logos/${(new String(coin.name)).replace(/\s+/g, "-").toLowerCase()}-${(new String(coin.symbol)).toLowerCase()}-logo.png`} /></span>
                                            <span className="name">{coin.name}</span>
                                        </span>
                                        <span className="currAPY percentChange">{`${coin.percent}%`}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="coinCount">
                    <input type="text" value={coinCount} onChange={(e) => {setCoinCount(e.target.value)}} placeholder="Type amount" />
                    <span className="countChanger">
                        <span className="upChangeFrame"><img src={""} /></span>
                        <span className="downChangeFrame"><img src={""} /></span>
                    </span>
                </div>
                <ul className="earnings">
                    <li id="dailyEarnings">
                        <div>
                            <span className="period">Daily Earnings</span>
                            <span className="earningsValue">{`+${selected.dEarning} ${selected.symbol}`}</span>
                        </div>
                    </li>
                    <li id="monthlyEarnings">
                        <div>
                            <span className="period">Monthly Earnings</span>
                            <span className="earningsValue">{`+${selected.mEarning} ${selected.symbol}`}</span>
                        </div>
                    </li>
                    <li id="yearlyEarnings">
                        <div>
                            <span className="period">Yearly Earnings</span>
                            <span className="earningsValue">{`+${selected.yEarning} ${selected.symbol}`}</span>
                        </div>
                    </li>
                </ul>
                <button className="earnNow" type="submit">Earn Now</button>
            </div>
        </form>
     );
}
 
export default StakingCalc;