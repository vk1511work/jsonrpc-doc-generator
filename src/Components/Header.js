import React from 'react';
import {Link} from 'react-router-dom';
import {SVG_HeaderLinkIcon, SVG_HeaderLogo} from "./SVG";
const Header = () => {

    return (
        <header id={"header"} className={"header"}>
            <div className={"header__container"}>
                <Link to={"/instructions"} className={"header__logo"}>
                    <span className={"header__logo_title"} >OpenRPC Documentation</span>
                </Link>
                <a className={"header__link link"} href={"https://sweb.ru"} target={"_blank"} rel="noopener noreferrer">
                    sweb.ru
                    <SVG_HeaderLinkIcon className={"header__link_icon"}/>
                </a>
            </div>
        </header>
    )
}

export default Header;