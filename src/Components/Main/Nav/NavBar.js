import React, {useState, useEffect} from 'react';

import NavBurgerBar from "./molecules/NavBurgerBar";
import NavContainerBar from "./molecules/NavContainerBar";

import {checkTopScroll} from "../../../utils/processing_index";

const NavBar = () => {

    const [openContainer, setOpenContainer] = useState(false)
    const [fixed, setFixed] = useState(false)
    const [positionScroll, setPositionScroll] = useState(60)
    const [activeSecondLevel, setActiveSecondLevel] = useState(null)
    const handlerClickButton = () => {
        if (window.innerWidth <= 800) {
            setOpenContainer(!openContainer)
        }
    }

    const changeVisibility = (position) => {
        if (position >= 60) {
            setFixed(true)
            setPositionScroll(0)
        } else {
            setFixed(false)
            setPositionScroll(60 - position)
        }
    }

    useEffect(() => {
        checkTopScroll(changeVisibility)
    }, []);

    return (
       <React.Fragment>
           <div style={{top: positionScroll}} className={`nav ${fixed ? "fixed" : ""} ${ openContainer ? "open" : ""}`}>
               <NavBurgerBar handlerClickButton={handlerClickButton}
                             fixed={fixed}
                             activeSecondLevel={activeSecondLevel}
               />
               <NavContainerBar handlerClickButton={handlerClickButton}
                                openContainer={openContainer}
                                fixed={fixed}
                                setActiveSecondLevel={setActiveSecondLevel}
               />
           </div>
        </React.Fragment>
    )
}

export default NavBar;