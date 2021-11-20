//This file contains the representation of the Footer of this web-app
import { Link } from "react-router-dom";
const Footer = () => {

    let advertTopicSent = "Get the Trust Wallet app now!";
    let subOrdinateSent = "The most trusted & secure crypto wallet";

    let anchors = [
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
        }
    ];

    let siteTitle = "Trust Wallet";
    let logoSrc = "/images/pages/home/blueLogo.png";
    const goHome = () => {
        window.location.href = "/";
    };

    let socials = [
        {
            id: 1,
            imgSrc: "/images/socialMedia/fbLogo.png",
            href: "",
        },
        {
            id: 2,
            imgSrc: "/images/socialMedia/gitHubLogo.png",
            href: "",
        },
        {
            id: 3,
            imgSrc: "/images/socialMedia/instagramLogo.png",
            href: "",
        },
        {
            id: 4,
            imgSrc: "/images/socialMedia/redditLogo.png",
            href: "",
        },
        {
            id: 5,
            imgSrc: "/images/socialMedia/tgLogo.png",
            href: "",
        },
        {
            id: 6,
            imgSrc: "/images/socialMedia/twitterLogo.png",
            href: "",
        },
    ];

    let trustWallet = {
        id: 1,
        name:"TRUST WALLET",
        components: [
            {
                id: 1,
                name: "Assets",
                href: "",
            },
            {
                id: 2,
                name: "DApp Browser",
                href: "",
            },
            {
                id: 3,
                name: "Stablecoins",
                href: "",
            },
            {
                id: 4,
                name: "Beta",
                href: "",
            },
            {
                id: 5,
                name: "NTFs",
                href: "",
            },
            {
                id: 6,
                name: "El Slavador",
                href: "",
            },
            {
                id: 7,
                name: "Crypto Wallet for iOS",
                href: "",
            },
            {
                id: 8,
                name: "Crypto Wallet for Android",
                href: "",
            },
        ]
    }

    let information = {
        id: 2,
        name: "INFORMATION",
        components: [
            {
                id: 1,
                name: "Community",
                href: "",
            },
            {
                id: 2,
                name: "Help Center",
                href: "",
            },
            {
                id: 3,
                name: "Support",
                href: "",
            },
            {
                id: 4,
                name: "DApp Journey",
                href: "",
            },
            {
                id: 5,
                name: "Developers",
                href: "",
            },
            {
                id: 6,
                name: "Submit DApp",
                href: "",
            },
            {
                id: 7,
                name: "Press Kit",
                href: "",
            },
            {
                id: 8,
                name: "Terms of Service",
                href: "",
            },

            {
                id: 9,
                name: "Privacy Policy",
                href: "",
            },
        ]

    }

    let useCrypto = {
        id: 3,
        name: "USE CRYPTO",
        components: [
            {
                id: 1,
                name: "Bitcoin with a credit card",
                href: "",
            },
            {
                id: 2,
                name: "Ethereum",
                href: "",
            },
            {
                id: 3,
                name: "BNB",
                href: "",
            },
            {
                id: 4,
                name: "Litecoin",
                href: "",
            },
            {
                id: 5,
                name: "TRON",
                href: "",
            },
            {
                id: 6,
                name: "XRP",
                href: "",
            },
            {
                id: 7,
                name: "Bitcoin Cash",
                href: "",
            },
            {
                id: 8,
                name: "Bitcoin",
                href: "",
            },

            {
                id: 10,
                name: "Ethereum",
                href: "",
            },           
        
            {
                id: 12,
                name: "Binance Coin",
                href: "",
            },
            {
                id: 13,
                name: "Cake",
                href: "",
            },
        ]
    }

    let assets = {
        id: 4,
        name: "ASSETS", 
        components: [
            {
                id: 1,
                name: "Bitcoin (BTC)",
                href: "",
            },
            {
                id: 2,
                name: "Ethereum (ETH)",
                href: "",
            },
            {
                id: 3,
                name: "Binance Coin (BNB)",
                href: "",
            },
            {
                id: 4,
                name: "Litecoin (LTC)",
                href: "",
            },
            {
                id: 5,
                name: "Ripple (XRP)",
                href: "",
            },
            {
                id: 6,
                name: "Dogecoin (DOGE)",
                href: "",
            },
            {
                id: 7,
                name: "Polkadot",
                href: "",
            },
            {
                id: 8,
                name: "Smartchain (BNB)",
                href: "",
            },
            {
                id: 9,
                name: "Dash (DASH)",
                href: "",
            },
            {
                id: 10,
                name: "TRON (TRX)",
                href: "",
            },

            {
                id: 11,
                name: "Tezos (XTZ)",
                href: "",
            },
            {
                id: 12,
                name: "Cosmos (ATOM)",
                href: "",
            },
            {
                id: 13,
                name: "Stellar (XLM)",
                href: "",
            },
            {
                id: 14,
                name: "Kava (KAVA)",
                href: "",
            },
        ],
    };

    let footerLists = [trustWallet, information, useCrypto, assets];

    return (
        <footer className="footer">
            <div className="appAdvertBack">
                <div className="appAdvert">
                    <span className="advertText">
                        <p className="topicSent">{advertTopicSent}</p>
                        <p className="subOrdinateSent">{subOrdinateSent}</p>
                    </span>
                    <span className="appLinks">
                        {
                            anchors.map(appLink => {
                                return (
                                    <Link className={`previewBtn advertImg`} to={appLink.href} key={appLink.id}>
                                        <span className="aImgageFrame"><img src={appLink.imgSrc} /></span>
                                    </Link>
                                );
                            })
                        }
                    </span>
                </div>
            </div>
            <div className="information">
                <div className="siteId-socials">
                    <div className="siteId" onClick={goHome }>
                        <span className="siteLogoFrame"><img src={logoSrc} /></span>
                        <h1 className="siteTitle">{siteTitle}</h1>
                    </div>
                    <div className="socials">
                        {
                            socials.map(social => {
                                return (
                                    <a href={social.href} className="socialLogo"><img src={social.imgSrc} /></a>
                                );
                            })
                        }
                    </div>        
                </div>
                <div className="footerLists">
                    {
                        footerLists.map(list => {
                            return (
                                <div className={`footerList footerList${list.id}`}>
                                    <h4>{list.name}</h4>
                                    {
                                        list.components.map(listComponent => {                                        
                                            return (
                                                <Link id={`${list.name}${listComponent.id}`} to={listComponent.href} key={listComponent.id}>{listComponent.name}</Link>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;