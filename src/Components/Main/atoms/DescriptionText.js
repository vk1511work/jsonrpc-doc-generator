import React from "react";

const DescriptionText = (props) => {
    const {text = "", children} = props

    const content = () => {
        if (text === "") {
            return children
        } else {
            return <p className={"content__element_text"}>{text}</p>
        }
    }


    return (
        content()
    )
}

export default DescriptionText;