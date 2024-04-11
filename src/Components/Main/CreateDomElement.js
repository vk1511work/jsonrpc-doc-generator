import React, {useEffect, useState} from 'react';
import {newParse} from "../../utils/newParse";
import Loader from "./Loader";
const CreateDomElement = ({schema, id, applicability}) => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (schema !== null) {
            newParse(schema, id, applicability, setLoader)
        }
    }, []);

    return (
        <React.Fragment>
            <section className={`content content_block`}>
                {loader && <Loader /> }
                <div className={`content__container ${id}`} id={id}></div>
            </section>
        </React.Fragment>
    )
}

export default CreateDomElement;