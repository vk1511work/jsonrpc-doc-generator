import React from "react";

const Loader = (props) => {
    const {size, position, width} = props || false
    const classes = size ? (size === "m" || size === "medium") ? "loader-medium" : (size === "s" || size === "small") ? "loader-small" : "" : ""
    return (<div style={{justifyContent: position ? position : "center", width: width ? width : "100%"}}
                 className={`loader--wrapper ${classes}`}>
        <div className={`${classes}`} id="loader"/>
    </div>)
}

export default Loader;