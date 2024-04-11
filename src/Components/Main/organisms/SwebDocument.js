import React, {useEffect} from 'react';

import HTypeTitle from "../atoms/HTypeTitle";
import MethodComponent from "../molecules/MethodComponent";
import DescriptionServers from "../molecules/DescriptionServers";
import {TITLE} from "../../../constants/text";

const SwebDocument = (props) => {
    const {schema, applicability, setLoader} = props

    document.title = TITLE.BROWSER_TITLE + " - " + schema?.servers[0]?.name

    const servers = schema?.servers[0]
    const methods = schema?.methods

    useEffect(() => {
        setLoader(false)
    }, []);

    return (
        <React.Fragment>
            <HTypeTitle title={servers.name} hType={"h1"} description={"объект"}/>
            <DescriptionServers servers={servers} applicability={applicability} methods={methods}/>
            {methods.map((method, index) =>
                <MethodComponent key={`methods_${method.name}${index}`}
                                 method={method}
                />
            )}
        </React.Fragment>
    )
}

export default SwebDocument;