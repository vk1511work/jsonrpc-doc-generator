import React from "react";
import ReactJson from 'react-json-view';

import {DESCRIPTION, DESCRIPTION_TITLE, TITLE} from "../../../../constants/text";
import MethodBlock from "../../atoms/MethodBlock";
import DescriptionText from "../../atoms/DescriptionText";
import JsonBlockComponent from "../JsonBlockComponent";
import DescriptionElement from "../../atoms/DescriptionElement";
import TableItem from "../../atoms/TableItem";

const ExtendedAboutResponse = () => {

    return (
        <MethodBlock id={"extended_message"} title={TITLE.EXTENDED_MESSAGE_ABOUT_RESPONSE}>
            <DescriptionText >
                <p className={"content__element_text"}>
                    Если метод кроме успешного или неуспешного результата должен передать клиенту какое-то кастомизированное сообщение или данные, то применяется общий тип <span className={"fw500"}>ExtendedResult</span> для таких ответов.
                </p>
            </DescriptionText>
            <DescriptionElement >
                <JsonBlockComponent object={DESCRIPTION.EXTENDED_MESSAGE_ABOUT_RESPONSE.JSON.FIRST}
                                    id={"instruction_extended_message_json_first"}
                                    style={{marginBottom: "8px"}}
                >
                    <ReactJson src={DESCRIPTION.EXTENDED_MESSAGE_ABOUT_RESPONSE.JSON.FIRST}
                               style={{backgroundColor: "#062436"}}
                               name={false}
                               theme={"chalk"}
                               enableClipboard={false}
                               displayObjectSize={false}
                               displayDataTypes={false}
                               displayArrayKey={false}
                    />
                </JsonBlockComponent>
                <JsonBlockComponent object={DESCRIPTION.EXTENDED_MESSAGE_ABOUT_RESPONSE.JSON.SECOND}
                                    id={"instruction_extended_message_json_second"}
                >
                    <ReactJson src={DESCRIPTION.EXTENDED_MESSAGE_ABOUT_RESPONSE.JSON.SECOND}
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
            <DescriptionElement title={DESCRIPTION_TITLE.PARAMS_DESCRIPTION + " extendedResult"}>
                {
                    DESCRIPTION.EXTENDED_MESSAGE_ABOUT_RESPONSE.TABLET.map((item, index) =>
                        <TableItem key={`description_tablet${index}`}>
                            <p className={"content__method_table-text"}><span className={"fw500"}>{item.param}</span> — {item.description}</p>
                        </TableItem>
                    )
                }
            </DescriptionElement>
        </MethodBlock>
    )
}

export default ExtendedAboutResponse;