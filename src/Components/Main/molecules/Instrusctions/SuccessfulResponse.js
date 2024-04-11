import React from "react";
import ReactJson from 'react-json-view';

import {DESCRIPTION, DESCRIPTION_TITLE, TITLE} from "../../../../constants/text";
import MethodBlock from "../../atoms/MethodBlock";
import DescriptionText from "../../atoms/DescriptionText";
import DescriptionElement from "../../atoms/DescriptionElement";
import JsonBlockComponent from "../JsonBlockComponent";
import TableItem from "../../atoms/TableItem";

const SuccessfulResponse = () => {

    return (
        <MethodBlock id={"successful_response"} title={TITLE.SUCCESSFUL_RESPONSE}>
            <DescriptionText text={"В случае, если на стороне API не возникло ошибок возвращается результат работы вызванного метода в виде JSON."} />
            <DescriptionElement title={DESCRIPTION_TITLE.EXAMPLE_RESPONSE}>
                <JsonBlockComponent object={DESCRIPTION.SUCCESSFUL_RESPONSE.JSON}
                                    id={"instruction_successful_response"}
                >
                    <ReactJson src={DESCRIPTION.SUCCESSFUL_RESPONSE.JSON}
                               style={{backgroundColor: "#062436"}}
                               name={false}
                               theme={"chalk"}
                               enableClipboard={false}
                               displayObjectSize={false}
                               displayDataTypes={false}
                               displayArrayKey={false}
                    />
                </JsonBlockComponent>
            </DescriptionElement>
            <DescriptionElement title={DESCRIPTION_TITLE.PARAMS_DESCRIPTION}>
                {
                    DESCRIPTION.SUCCESSFUL_RESPONSE.TABLET.map((item, index) =>
                        <TableItem key={`description_tablet${index}`}>
                            <p className={"content__method_table-text"}><span className={"fw500"}>{item.param}</span> — {item.description}</p>
                        </TableItem>
                    )
                }
            </DescriptionElement>
            <DescriptionText text={"Все параметры в ответе являются обязательными."} />
        </MethodBlock>
    )
}

export default SuccessfulResponse;