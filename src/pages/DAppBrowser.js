import AppPreview from "../reusables/AppPreview";
import DownloadBtn from "../reusables/DownloadBtn";
import Steps from "../reusables/Steps";

const DAppBrowser = () => {
    let appPreviews = [
        {
            id: 1,
            className: "whiteBack",
            title: "Trust DApp Browser",
            list: [
                "Fully functioning Web3 browser that can be used to interact with any decentralized application (DApp)",
                "Meticulously crafted tool that provides a seamless, simple and secure connection between you and any decentralized application (DApp) on Binance Smart Chain, or the Ethereum network",
                "Integrated interface that is fully optimized for mobile so you can enjoy the content designed specifically for your device"
            ],
            body: null,
            anchors: [
                {
                    id: 1,
                    name: "Download Now",
                    href: "",
                    className: "",
                    className: "downloadBtn",
                },
            ],
            picSrc: "/images/pages/dAppBrowser/dapp_preview.png",
        },
    ];

    let marketPlace = {
        title: "Trust DApps Marketplace",
        body: "Each DApp is unique so we work with developers to ensure the best possible experience for our users. Decentralized applications (DApps) that have been vetted and optimized for Trust Wallet become a part of the Marketplace. The list is constantly expanding because our goal is to create a community of decentralized applications that can be accessed by anyone with a mobile device",
        imgSrcs: ["/images/pages/dAppBrowser/dapp_preview1.png", "/images/pages/dAppBrowser/dapp_preview2.png", "/images/pages/dAppBrowser/dapp_preview3.png"]
    }

    return (  
        <div className="dAppBrowser">
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
            <div className="marketPlace">
                <h2>{marketPlace.title}</h2>
                <p>{marketPlace.body}</p>
                <div className="marketPlacePics">
                    {
                        marketPlace.imgSrcs.map(imgSrc => {
                            return (
                                <span className="marketPlacePicFrame"><img src={imgSrc} /></span>
                            );
                        })
                    }
                </div>
            </div>
            <Steps />
            <div className="marketPlace">
                <h2>How to integrate your DApp into Trust Wallet</h2>
                <p>Trust Wallet's DApp browser provides a simple API for DApp developers to create multi-chain applications. Currently, our API allows you to get accounts and sign transactions with both iOS and Android.</p>
                <DownloadBtn />
            </div>
        </div>
    );
}
 
export default DAppBrowser;