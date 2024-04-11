import React from "react";

const DescriptionLink = (props) => {
    const {link} = props

    return (
        <a className={"link"} href={link} target={"_blank"} rel="noopener noreferrer">{link}</a>
    )
}
export default DescriptionLink;