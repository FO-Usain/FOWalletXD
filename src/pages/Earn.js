import AppPreview from "../reusables/AppPreview";
import CoinsList from "../reusables/CoinsList";
import StakingCalc from "../reusables/StakingCalculator";
import Steps from "../reusables/Steps";

const Earn = () => {

    let appPreview = {
        className: "blackBackPreview",
        title: "Earn crypto while you sleep",
        list: null,
        body: "Staking puts your assets to work, with interest rates as high as 11% APR.",
        anchors: [],
        picSrc: null,
        elAttachment: null
    }

    let appPreviews = [
        {
            id: 1,
            className: "whiteBack",
            title: "Earn up to 11% APR",
            list: null,
            body: "We don’t take a cut. You’ll get back all your staked crypto along with your profits.",
            anchors: [],
            picSrc: "/images/pages/earn/stake_coins.png",
        },
        {
            id: 2,
            className: "whiteBack",
            title: "Start earning in seconds",
            list: null,
            body: "Like you, we find the traditional process for earning interest long and frustrating. Staking makes earning easy.",
            anchors: [],
            picSrc: "/images/pages/earn/stake_home.png",
        },
    ];

    let appPreviews2 = [
        {
            id: 1,
            className: "whiteBack",
            title: "Stake with freedom",
            list: null,
            body: "You’re in the driving seat. Pick the project and validator that meets your needs.",
            anchors: [
                {
                    id: 1,
                    name: "Read More",
                    href: "",
                    className: "",
                    className: " btnBlueborder",
                },
            ],
            picSrc: "/images/pages/earn/stake_validators.png",
        },
    ];

    return ( 
        <div className="earn">
            <div className="appPreviewBackground">
                <div className="earnHead">
                    <div className="left">
                        <h1>Earn crypto while you sleep</h1>
                        <p>Staking puts your assets to work, with interest rates as high as 11% APR.</p>
                    </div>
                    <StakingCalc /> 
                </div>
            </div>
            <div className="previewDisplay">
                {
                    appPreviews.map(preview => {
                        return (
                            <AppPreview appPreview={preview} picLeft={(preview.id % 2 != 0) ? true : false  } />
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
            <div className="earnables">
                <h2 className="earnablesTitle">Trust Wallet lets you earn with the following coins</h2>
                <CoinsList serverURL="http://localhost:4000/stakeables" />
            </div>
            <div className="previewDisplay">
                {
                    appPreviews2.map(preview => {
                        return (
                            <AppPreview appPreview={preview} picLeft={(preview.id % 2 != 0) ? true : false  } />
                        );
                    })
                }
            </div>
            <Steps />
        </div>
     );
}
 
export default Earn;