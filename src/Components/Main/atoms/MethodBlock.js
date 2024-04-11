import React from "react";
import HTypeTitle from "../atoms/HTypeTitle";

const MethodBlock = (props) => {
    const {title = "", description , children, id} = props

    return (
        <div id={id} className={"content__method"}>
            <HTypeTitle title={title} hType={"h2"} description={description}/>
            <div className={"content__instruction"}>
                {children}
            </div>
        </div>
    )
}

export default MethodBlock;