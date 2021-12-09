import StakingCalc from "../reusables/StakingCalculator";
import AppPreview from "../reusables/AppPreview";
import CoinsList from "../reusables/CoinsList";

const Staking = () => {

    let stakingQuestion = "What is Staking coins?";
    let stakingDef = "All blockchains have one thing in common: transactions need to get validated. Bitcoin for example does this in a process called mining which is known to use a lot of electricity (Proof-of-Work). There are, though, other consensus mechanisms that are used for validation. Proof-of-Stake (PoS) is one such consensus mechanism that has several variations of its own, as well as some hybrid models. To keep things simple, we will refer to all of these as staking. Coin staking gives currency holders some decision power on the network. By staking coins, you gain the ability to vote and generate an income. It is quite similar to how someone would receive interest for holding money in a bank account or giving it to the bank to invest.";


    let appPreviews = [
        {
            id: 1,
            className: "whiteBack withLine",
            title: "What are some of the benefits?",
            list: [
                "One of the major benefits for staking coins is that it removes the need for continuously purchasing expensive hardware and consuming energy.",
                "The system offers guaranteed returns and a predictable source of income unlike the proof-of-work system where coins are rewarded through a mathmatetical process with a low probability of paying out. Another benefit is that the value of your staked coins doesn't depreciate unlike with ASICs and other mining hardware. Staked coins are only affected by market price fluctuations.",
            ],
            body: null,
            anchors: [],
            picSrc: "/images/pages/staking/staking_coin.png",
        },
        {
            id: 2,
            className: "whiteBack withLine",
            title: "How does it work?",
            list: null,
            body: "The standard methods for staking are usually holding coins in your wallet or locking them in a smart contract (masternodes). Some coins added randomness to the process of staking and voting so that bad players have a hard time manipulating outcomes. The process can be similar to a lottery in which the number of crypto coins you hold is equivalent to holding a given number of lottery tickets. Staking systems can also allow delegation in which each individual delegates their voting rights and earned income to a trusted party. Those delegates then earn all the rewards for block validation and pay their loyal supporters some form of dividends in return for their vote.",
            anchors: [
                
            ],
            picSrc: "/images/pages/staking/staking_list.png",
        },
    ];

    let research = {
        title: "Always do your own research",
        body: "Choosing the right coin to stake, is both a numbers game and a gut feeling. If you choose to begin staking, definitely start by experimenting with minimum amounts with particular staking protocols and staking rewards. Always remember to pick a project that resonates with you and one that you expect will be around far into the future. After all, by staking, you’re helping to make that project become a success.",
    }
    return ( 
        <div className="staking">
            <div className="stakingDefinition">
                <h2 className="definitionTitle">{stakingQuestion}</h2>
                <p className="definitionBdy">{stakingDef}</p>
            </div>
            <StakingCalc />
            <div className="previewDisplay">
                {
                    appPreviews.map(preview => {
                        return (
                            <AppPreview appPreview={preview} picLeft={(preview.id % 2 != 0) ? false : true  } />
                        );
                    })
                }
            </div>
            <div className="previewDisplay mobilePreviewDisplay">
                {
                    appPreviews.map(preview => {
                        return (
                            <AppPreview appPreview={preview} picLeft={false} />
                        );
                    })
                }
            </div>
            <div className="researchPrompt">
                <h2 className="researchPromptTitle">{research.title}</h2>
                <p className="researchPromptBody">{research.body}</p>
            </div>
            <div className="stakeables">
                <h2 className="stakeableTitle">Trust Wallet lets you stake the following coins</h2>
                <CoinsList serverURL="http://localhost:4000/stakeables" lastSentence="More coming soon..." />
            </div>
        </div>
     );
}
 
export default Staking;