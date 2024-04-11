import React from "react";
import {copyObject} from "../../../utils/processing_index";
import {SVG_Copy} from "../../SVG";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const JsonBlockComponent = (props) => {

    const {children, object, id, style = {}} = props

    return (
        <div style={style} className={"content__method_json"}>
            <SimpleBar style={{ maxHeight: 280 }}>
                {children}
            </SimpleBar>
            <button type={"button"} className={"content__method_json-button"} onClick={()=>
                copyObject({
                    object: object,
                    id: id,
                    type: "json"
                })} >
                <SVG_Copy />
            </button>
        </div>
    )
}

export default JsonBlockComponent;