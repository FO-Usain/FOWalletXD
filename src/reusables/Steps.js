//This file contains the representation of part of some of the web-pages that would direct the user on how to start using the mobilde-app
import DownloadBtn from "./DownloadBtn";

const Steps = () => {
    let title = "Get started in 3 simple steps";
    let sentence = "It only takes a few minutes";
    let steps = [
        {
            id: 1,
            text: "Download Trust Wallet",
            picSrc: "/images/pages/home/download.png"
        },
        {
            id: 2,
            text: "Create a new wallet",
            picSrc: "/images/pages/home/mkWallet.png"
        },
        {
            id: 3,
            text: "Create a new wallet",
            picSrc: "/images/pages/home/buy.png"
        },
    ];

    return (
        <div className="steps">
            <h2 className="stepsTitle">{title}</h2>
            <p className="stepsSentence">{sentence}</p>
            <ul className="stepsList">
                {
                    steps.map(step => {
                        return (
                            <li className={`step step${step.id}`} key={step.id}>
                                <span> 
                                    <span className="stepPic"><img src={step.picSrc} /></span>
                                    <p className="stepText">{step.text}</p>
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
            <DownloadBtn />
        </div>
    );
}
 
export default Steps;