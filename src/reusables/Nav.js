//This file contains the representation of the Navigation component of the web-app
import { useState } from "react";
import {Link} from 'react-router-dom';

const Nav = () => {

    let siteTitle = "Trust Wallet";
    let logoSrc = "/images/logo.png";

    const goHome = () => {
        window.location.href = "/";
    }

    const [menus, setMenus] = useState([
        {
            id: 1,
            name: "Login",
            href: "/login",
            title: "",
            meta: null,

        },
        {
            id: 2,
            name: "Assets",
            href: "/assets",
            title: "",
            meta: null,

        },
        {
            id: 3,
            name: "Staking",
            href: "/staking",
            title: "",
            meta: null,

        },
        {
            id: 4,
            name: "Earn",
            href: "/earn",
            title: "",
            meta: {
                percent: 11,
                sign: (+1),     //positive
                dir: "APR"      //appreciate
            },

        },
        {
            id: 5,
            name: "NFTs",
            href: "/ntfs",
            title: "",
            meta: null,

        },
        {
            id: 6,
            name: "DApp Browser",
            href: "/dappbrowser",
            title: "",
            meta: null,
        },
        {
            id: 7,
            name: "Language",
            href: "",
            title: "",
            meta: null,
        },
    ]);
    
    const changeVisibily = (className) => {
        let el = document.querySelector(`.${className}`);
        const visibility = el.style.visibility;

        if (visibility == "visible") {
            el.style.visibility = "hidden";
            el.style.position = "absolute";
        } else {
            el.style.visibility = "visible";
            el.style.position = "relative";
        }
        
    }

    // const chBack = (maxHeight) => {
    //     let back = el.document.querySelector("navBack");
    // }

    /**
     * closes the menus tile
     * @param {*} className 
     */
    const closeMenus = (className) => {
        document.querySelector(`.${className}`).style.visibility = "hidden";
        document.querySelector(`.${className}`).style.position = "absolute";
    }
    
    return (
        <div id="navBack" className="navBackground">
            <div className="nav">
                <div className="siteId" onClick={goHome }>
                    <span className="siteLogoFrame"><img src={logoSrc} /></span>
                    <h1 className="siteTitle">{siteTitle}</h1>
                </div>
                <span className="menusSign" onClick={() => changeVisibily("mobileMenus")}><img src="/images/menuSign.png" /></span>
                <div className="menus">
                    {
                        menus.map((menu) => {
                            return (
                                <Link to={menu.href} key={menu.id}>
                                    {menu.name}
                                    {
                                        menu.meta

                                        &&
                                        
                                        <span className="menuMeta">{`${(menu.meta.sign > 0) ? "+" : "-"}${menu.meta.percent}% ${menu.meta.dir}`}</span>
                                    }
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
            <div className="menus mobileMenus">
                    {
                        menus.map((menu) => {
                            return (
                                <Link to={menu.href} key={menu.id} onClick={() => closeMenus("mobileMenus")}>
                                    {menu.name}
                                    {
                                        menu.meta

                                        &&
                                        
                                        <span className="menuMeta">{`${(menu.meta.sign > 0) ? "+" : "-"}${menu.meta.percent}% ${menu.meta.dir}`}</span>
                                    }
                                </Link>
                            );
                        })
                    }
            </div>
            <div style={{height: ".0025rem"}}></div>
        </div>
    );
}
 
export default Nav;