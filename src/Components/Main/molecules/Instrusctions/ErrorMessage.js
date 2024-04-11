import React from "react";
import ReactJson from 'react-json-view';

import {DESCRIPTION, DESCRIPTION_TITLE, TITLE} from "../../../../constants/text";
import MethodBlock from "../../atoms/MethodBlock";
import DescriptionElement from "../../atoms/DescriptionElement";
import DescriptionText from "../../atoms/DescriptionText";
import JsonBlockComponent from "../JsonBlockComponent";
import TableItem from "../../atoms/TableItem";
import DescriptionLink from "../../atoms/DescriptionLink";

const ErrorMessage = () => {

    return (
        <MethodBlock id={"error_message"} title={TITLE.ERROR_MESSAGE}>
            <DescriptionText>
                <p className={"content__element_text"}>
                    В случае возникновения ошибок, ответ вместо параметра <span className={"fw500"}>result</span> будет содержать error с двумя значениями <span className={"fw500"}>code</span> и <span className={"fw500"}>message</span>.
                </p>
            </DescriptionText>
            <DescriptionElement title={DESCRIPTION_TITLE.EXAMPLE_RESPONSE}>
                <JsonBlockComponent object={DESCRIPTION.ERROR_MESSAGE.JSON}
                                    id={"instruction_error_message"}
                >
                    <ReactJson src={DESCRIPTION.ERROR_MESSAGE.JSON}
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
                    DESCRIPTION.ERROR_MESSAGE.TABLET.map((item, index) =>
                        <TableItem key={`description_tablet${index}`}>
                            {item.param === "error" ?
                                <p className={"content__method_table-text"}>
                                    <span className={"fw500"}>{item.param}</span> — объект ошибки, который содержит (<span className={"fw500"}>code</span> - код ошибки <DescriptionLink link={"http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php"}/> и <span className={"fw500"}>message</span> - текст ошибки)
                                </p> :
                                <p className={"content__method_table-text"}><span className={"fw500"}>{item.param}</span> — {item.description}</p>
                            }
                        </TableItem>
                    )
                }
            </DescriptionElement>
            <DescriptionText text={"Все параметры в ответе являются обязательными."} />
        </MethodBlock>
    )
}

export default ErrorMessage;