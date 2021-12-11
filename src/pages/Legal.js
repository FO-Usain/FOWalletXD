import { useState } from "react";
import { Link } from "react-router-dom";

const Legal = () => {

    const classes = [
        {
            id: 1,
            name: "Privacy Policy",
            href: "",
        },
        {
            id: 2,
            name: "Terms of Service",
            href: "",
        }
    ];

    const legalArrow = "/images/pages/legal/legalArrow.png";
    const blankSrc = "/images/pages/legal/blank.png";
    const [checkBox, setCheckBox] = useState("/images/pages/legal/checkBox.png");
    const prompt = "I've read and accpet the Terms of Service and Privacy Policy";

    const [checked, setChecked] = useState(false);
    const updateCheck = () => {
        console.log("started");
        if (checked) {
            setCheckBox("/images/pages/legal/checkBox.png");
            document.querySelector("#contLogin").style.backgroundColor = "rgb(170, 170, 170)";
            setChecked(false);
        } else {
            setCheckBox("/images/pages/legal/checkedBox.png");
            document.querySelector("#contLogin").style.backgroundColor = "rgb(54, 117, 188)";
            setChecked(true);
        }
    }
    
    return (
        <div className="legal">
            <h2>Legal</h2>
            <p className="legalMsg">Please review the Trust Wallet Terms of Service and Privacy Policy.</p>
            <div className="legalClasses">
                {
                    classes.map(legal => {
                        return (
                            <a href={legal.href} className="legalClass" key={legal.id}>
                                <span className="className">{legal.name}</span>
                                <span className="rArrowFrame"><img src={legalArrow} /></span>
                            </a>
                        );
                    })
                }
            </div>
            <div className="blankFrame"><img src={blankSrc} /></div>
            <div className="checkPrompt">
                <span className="checkFrame"><img src={checkBox} onClick={() => updateCheck()} /></span>
                <p className="prompt">{prompt}</p>
            </div>
            <Link id="contLogin" className="contLogin" to={""} onClick={(e) => {if (!checked) {e.preventDefault()}}} >Continue</Link>
        </div>
    );
}
 
export default Legal;