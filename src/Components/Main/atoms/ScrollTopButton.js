import React, {useState, useEffect} from "react";
import {checkTopScroll, scrollUp} from "../../../utils/processing_index";
import {SVG_ScrollTopButton} from "../../SVG";

const ScrollTopButton = () => {
    const [hide, setHide] = useState(true)

    const changeVisibility = (position) => {
        if (position > 800) {
            setHide(false)
        } else {
            setHide(true)
        }
    }

    useEffect(() => {
        checkTopScroll(changeVisibility)
    }, []);

    const handlerClickButton = () => {
        scrollUp()
    }

    return (
        <button type={"button"} className={`scroll-top-button ${hide ? "hide" : ""}`} onClick={handlerClickButton}>
            <SVG_ScrollTopButton />
        </button>
    )
}

export default ScrollTopButton;