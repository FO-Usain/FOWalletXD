import { Link } from "react-router-dom";
import SlidingContents from "../reusables/SlidingContents";


const Login = () => {

    const contents = [
        {
            id: 1,
            imgSrc: "/images/pages/login/coins.png",
            title: "All assets in one place",
            msg: "View and store your assets seamlessly.",
        },
        {
            id: 2,
            imgSrc: "/images/pages/login/coinSafe.png",
            title: "Private and secure",
            msg: "Private keys never leave your device.",
        },
        {
            id: 3,
            imgSrc: "/images/pages/login/coinConverter.png",
            title: "Trade assets",
            msg: "Trade your assets anonymously.",
        }
    ];

    const legalURL = "/login/legal";

    return (
        <div className="login">
            <SlidingContents contents={contents} />
            <div className="links">
                <Link className="createWallet" to={""}>Create a new wallet</Link>
                <Link className="haveWallet" to={legalURL}>I already have a wallet</Link>
            </div>
        </div>
    );
}
 
export default Login;