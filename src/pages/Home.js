import AppPreview from "../reusables/AppPreview";
import DownloadBtn from "../reusables/DownloadBtn";
import Steps from "../reusables/Steps";

const Home = () => {

    let appPreview = {
        className: "blackBackPreview",
        title: "The most trusted & secure crypto wallet",
        body: "Buy, store, collect NFTs, exchange & earn crypto. Join 10 million+ people using Trust Wallet.",
        anchors: [
            {
                id: 1,
                name: null,
                imgSrc: "/images/appStores/appStore.png",
                href: "",
                className: null,
            },
            {
                id: 2,
                name: null,
                imgSrc: "/images/appStores/googlePlay.png",
                href: "",
                className: null,
            },
            {
                id: 3,
                name: null,
                imgSrc: "/images/appStores/android.png",
                href: "",
                className: null,
            },
        ],
        picSrc: "/images/pages/home/home_trustwallet_app.png",
    }

    let activities = [
        {
            id: 1,
            imgSrc: "/images/pages/home/card.png",
            name: "Buy Crypto With a Card",
        },
        {
            id: 2,
            imgSrc: "/images/pages/home/dex.png",
            name: "Exchange Instantly",
        },
        {
            id: 3,
            imgSrc: "/images/pages/home/lock.png",
            name: "Private & Secure",
        },
    ];

    let features1 = ["Buy Bitcoin in under five minutes", "Easily earn interest on the crypto in your wallet", "See your collectibles. Art & NFTs in one place"];
    let features2 = ["Exchange your crypto without leaving the app", "Track charts and prices within the app", "Keep your crypto safe from hackers & scammers"];
    let listTitle = "You Deserve Easy Access to Cryptocurrencies";
    let introSentence = "Trust Wallet is for you if you want to";

    let appPreviews = [
        {
            id: 1,
            className: "whiteBack",
            title: "Buy Crypto With a Card",
            body: "Get your first $50 of Bitcoin, Ethereum, Binance Coin and many other cryptocurrencies.",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/home/home_cards.png",
        },
        {
            id: 2,
            className: "whiteBack",
            title: "Exchange Instantly",
            body: "No forms, no selfies. Trade crypto anytime with ease.",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/home/home_dex.png",
        },
        {
            id: 3,
            className: "whiteBack",
            title: "Private & Secure",
            body: "Only you can access your wallet. We don’t collect any personal data.",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/home/home_security.png",
        },
        {
            id: 4,
            className: "whiteBack",
            title: "Browser for DApps",
            body: "Use your favourite decentralized apps & find new ones, without leaving your wallet.",
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/home/dapp_preview.png",
        }, 
    ];

    return (
        <div className="home">
            <div className="appPreviewBackground">
                <AppPreview appPreview={appPreview} picLeft={false} />
            </div>
            <div className="homeBody">
                <div className="activities">
                    {
                        activities.map((activity, count) => {
                            ++count;
                            return (
                                <span className={`activity activity${activity.id}`} key={activity.id}>
                                    <span className="activityPicFrame"><img src={activity.imgSrc} /></span>
                                    <h3 className="activiyName">{activity.name}</h3>
                                </span>
                            );
                        }, 0)
                    }
                </div>
                <div className="featuresList">
                    <h2 className="listTitle">{listTitle}</h2>
                    <p className="listSentence">
                        <p className="intro">{introSentence}</p>
                        <div className="lists">
                            <ul className="list1">
                                {
                                    features1.map((feature, count) => {
                                        ++count;
                                        return (
                                            <li className="feature">
                                                <span className="tickFeature"><img src="/images/pages/home/check.svg" /></span>
                                                <span className="featureName">{feature}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ul className="list2">
                                {
                                    features2.map((feature, count) => {
                                        ++count;
                                        return (
                                            <li className="feature">
                                                <span className="tickFeature"><img src="/images//pages/home/check.svg" /></span>
                                                <span className="featureName">{feature}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <DownloadBtn />
                    </p>
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
                <Steps />
            </div>    
        </div>
    );
}
 
export default Home;