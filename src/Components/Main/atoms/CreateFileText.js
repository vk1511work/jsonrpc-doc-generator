import React, {useEffect, useState} from "react";
import Prism from "prismjs";

import {copyObject} from "../../../utils/processing_index";
import {SVG_Copy} from "../../SVG";

const CreateFileText = (props) => {
    const {file, fetchActive = true, id, className=""} = props

    const [fileState, setFileState] = useState("")

    useEffect(()=> {
        if (fetchActive) {
            fetch(file)
                .then((r) => r.text())
                .then(text  => {
                    setFileState(text)
                })
        } else {
            setFileState(file)
        }

        if (fileState !== "") {
            Prism.highlightAll();
        }
    },[fileState])

    return (
        <div className={"content__method_text"}>
            <pre className="content__instruction_code">
                <code id={id} className={`language-javascript ${className}`}>{fileState}</code>
            </pre>
            <button type={"button"} className={"content__method_json-button"} onClick={()=>
                copyObject({
                        object: fileState,
                        type: "text",
                        id: id
                })
            }>
                <SVG_Copy />
            </button>
        </div>
    )
}

export default CreateFileText;