import React from "react";

const HTypeTitle = (props) => {

    const {title, hType, description = ""} = props

    return (
        <div className={`content__title ${hType === "h1" ? "content__title_main" : ""}`}>
            {
                hType === "h1" ? <h1 className={"content__title_h1"}>{title}</h1> :
                    <h2 className={"content__title_h2"}>{title}</h2>
            }
            {
                description !== "" ? <span className={"content__title_description"}>{description}</span> : ""
            }
        </div>
    )
}

export default HTypeTitle;