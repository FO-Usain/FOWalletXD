//This file contains the representation of the Navigation component of the web-app
import { useState } from "react";
import {Link} from 'react-router-dom';

const Nav = () => {

    let siteTitle = "FO Wallet";
    let logoSrc = "/images/logo.png";

    const goHome = () => {
        window.location.href = "/";
    }

    const [menus, setMenus] = useState([
        {
            id: 1,
            name: "Assets",
            href: "",
            title: "",
            meta: null,

        },
        {
            id: 2,
            name: "Staking",
            href: "",
            title: "",
            meta: null,

        },
        {
            id: 3,
            name: "Earn",
            href: "",
            title: "",
            meta: {
                percent: 11,
                sign: (+1),     //positive
                dir: "APR"      //appreciate
            },

        },
        {
            id: 4,
            name: "NFTs",
            href: "",
            title: "",
            meta: null,

        },
        {
            id: 5,
            name: "DApp Browser",
            href: "",
            title: "",
            meta: null,
        },
        {
            id: 6,
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
    
    return (
        <div className="navBackground">
            <div className="nav">
                <div className="siteId" onClick={goHome }>
                    <span className="siteLogoFrame"><img src={logoSrc} /></span>
                    <h1 className="siteTitle">{siteTitle}</h1>
                </div>
                <span className="menusSign" onClick={() => changeVisibily("mobileMenus")}>&#9776;</span>
                <div className="menus">
                    {
                        menus.map((menu) => {
                            return (
                                <Link href={menu.href} key={menu.id}>
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
                                <Link href={menu.href} key={menu.id}>
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
    );
}
 
export default Nav;