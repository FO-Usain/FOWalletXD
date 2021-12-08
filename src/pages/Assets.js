import { Link } from "react-router-dom";
import AppPreview from "../reusables/AppPreview";
import CoinsList from "../reusables/CoinsList";
import FeaturesList from "../reusables/FeaturesList";
import Steps from "../reusables/Steps";


const Assets = () => {
    let appPreview = {
        className: "blackBackPreview",
        title: "More than 1M+ assets supported",
        list: null,
        body: "Store all your coins and tokens in a single, secure mobile wallet. The app supports 53 blockchains and 1M+ assets",
        anchors: [
            {
                id: 1,
                name: "Download Now",
                imgSrc: null,
                href: "/",
                className: "whiteDownloadNow",
            },
        ],
        picSrc: "/images/pages/assets/assets_list.png",
    }


    let listTitle = "Everything you need in one place";
    let introSentence = null;
    let features1 = ["Get, swap & hold many different cryptocurrencies", "Store stablecoins to avoid market volatility.", "Easily earn interest on the crypto in your wallet"];
    let features2 = ["Stay private & secure storing your privacy coins.", "Track charts and prices within the app", "Swap or trade your assets in seconds."];

    let saLinks = [     //Supported Assets
        {
            id: 1,
            name: "Download Now",
            href: "",
        },
        {
            id: 2,
            name: "Developers",
            href: "",
        }
    ];

    let appPreviews = [
        {
            id: 1,
            className: "whiteBack",
            title: "Multi Cryptocurrency Wallet App",
            list: null,
            list: null,
            body: "Securely carry your favorite cryptocurrencies on your Android and Apple devices with Trust Wallet. With an average user review of 4.7 / 5.0, you can feel confident your Digital Assets are private and safe.",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/assets/assets_rating.png",
        },
        {
            id: 2,
            className: "whiteBack",
            title: "Thousands of Supported Coins",
            list: null,
            body: "Our multicoin wallet app supports the main blockchains within the Ethereum ecosystem, and works with any ERC20, BEP2 and ERC721 tokens whilst also providing coverage as a Bitcoin Wallet. We've also recently added support for Binance Smart Chain. The Trust Wallet development team continues to add support for more cryptocurrencies every month, so be sure to check for updates. Or better yet, reach out to our team to share support for your favourite coins and get them added into Trust Wallet!",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/assets/assets_coins.png",
        },
    ];


    return ( 
        <div className="assets">
            <div className="appPreviewBackground">
                <AppPreview appPreview={appPreview} picLeft={false} />
            </div>
            <div className="assetsBody">
                <FeaturesList listTitle={listTitle} introSentence={introSentence} features1={features1} features2={features2} btnOn={false} />
                <div className="supportedAssets">
                    <div className="saIntro">
                        <span>
                            <h2 className="SATitle">{"Supported assets & blockchains"}</h2>
                            <p className="SAIntro">Here's a list of what's currently supported by Trust Wallet</p>
                        </span>
                        <span className="saLinks">
                            {
                                saLinks.map(saLink => {
                                    return (
                                        <Link className="saLink" to={saLink.href} key={saLink.id} id={`saLink${saLink.id}`} >{saLink.name}</Link>
                                    );
                                })
                            }
                        </span>
                    </div>
                    <CoinsList serverURL="http://localhost:4000/cryptos" />

                </div>
                <Steps />
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
            </div>
        </div>
     );
}


export default Assets;