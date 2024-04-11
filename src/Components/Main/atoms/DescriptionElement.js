import React from "react";

const DescriptionElement = (props) => {
    const {title = "", children} = props

    return (
        <div className={"content__element_container"}>
            {title !== "" ? <span className={"content__element_title"}>{title}</span> : ""}
            {children}
        </div>
    )
}

export default DescriptionElement;