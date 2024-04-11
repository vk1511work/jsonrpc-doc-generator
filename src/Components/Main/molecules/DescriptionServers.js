import React from "react";
import DescriptionElement from "../atoms/DescriptionElement";
import DescriptionText from "../atoms/DescriptionText";
import {DESCRIPTION_TITLE} from "../../../constants/text";
import ListMethods from "../atoms/ListMethods";


const DescriptionServers = (props) => {
    const {servers, applicability, methods} = props

    return (
        <div className={"content__server"}>
            <DescriptionElement
                title={DESCRIPTION_TITLE.DESCRIPTION}
                type={"server"}
            >
                <DescriptionText text={servers.summary}/>
            </DescriptionElement>
            <DescriptionElement
                title={DESCRIPTION_TITLE.APPLICABILITY}
                type={"server"}
            >
                <DescriptionText text={applicability.name}/>
            </DescriptionElement>
            <DescriptionElement
                title={DESCRIPTION_TITLE.PATH_TO_OBJECT}
                type={"server"}
            >
                <DescriptionText text={`POST ${servers.url}`}/>
            </DescriptionElement>
            <DescriptionElement
                title={DESCRIPTION_TITLE.AUTHORIZATION_REQUIREMENT}
                type={"server"}
            >
                <DescriptionText text={"да"}/>
            </DescriptionElement>
            <DescriptionElement
                title={DESCRIPTION_TITLE.LIST_METHODS}
            >
                <ListMethods methods={methods}/>
            </DescriptionElement>
        </div>
    )
}

export default DescriptionServers;