import React from "react";

const TableItem = (props) => {
    const {children, className= "", style} = props

    return (
        <div className={`content__method_table ${className}`} style={style}>
            {children}
        </div>
    )
}

export default TableItem;