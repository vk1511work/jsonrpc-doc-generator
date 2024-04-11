import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

import {SVG_BurgerButton} from "../../../SVG";
import {constantRoute} from "../../../../schema/constantRoute";

const NavBurgerBar = (props) => {
    const {handlerClickButton, activeSecondLevel} = props
    const location = useLocation()

    const [title, setTitle] = useState("")

    useEffect(() => {
        constantRoute.map(item => {
            if (item.array.length > 0 && item.array.some(url => url.url === location.pathname)) {
                setTitle(item.name + " / ")
            } else if (item.url === location.pathname) {
                setTitle(item.name)
            }
        })
    }, [activeSecondLevel, location.pathname]);


    return (
        <div id={"nav_burger"} className={`nav__tablet`} onClick={handlerClickButton}>
            <SVG_BurgerButton className={"nav__tablet_burger"}/>
            <div className={"nav__tablet_container"}>
                <span className={`nav__tablet_title`}>{title}</span>
                <span className={`nav__tablet_subtitle`}>{activeSecondLevel}</span>
            </div>
        </div>
    )
}

export default NavBurgerBar;