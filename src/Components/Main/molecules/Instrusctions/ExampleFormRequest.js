import React from "react";
import ReactJson from 'react-json-view';

import {DESCRIPTION, DESCRIPTION_TITLE, TITLE} from "../../../../constants/text";
import MethodBlock from "../../atoms/MethodBlock";
import DescriptionText from "../../atoms/DescriptionText";
import DescriptionElement from "../../atoms/DescriptionElement";
import DescriptionLink from "../../atoms/DescriptionLink";
import CreateFileText from "../../atoms/CreateFileText";
import JsonBlockComponent from "../JsonBlockComponent";
import TableItem from "../../atoms/TableItem";

const code =
`Content-Type: application/json; charset=utf-8
Accept: application/json
Authorization: Bearer hdlhcdkd0bid6c29fhfu1s7123.202357ec-d5ca-4a0a-846c-2dabe0266ef4
`

const ExampleFormRequest = () => {

    return (
        <MethodBlock id={"example_form"} title={TITLE.EXAMPLE_FORM_REQUEST}>
            <DescriptionElement title={DESCRIPTION_TITLE.REQUEST_URL}>
                <DescriptionText >
                    <p className={"content__element_text"}>
                        <DescriptionLink link={"https://api.sweb.ru/domains/"}/> (обращение к объекту класса Domains)
                    </p>
                </DescriptionText>
            </DescriptionElement>
            <DescriptionElement title={DESCRIPTION_TITLE.TITLES_REQUEST}>
                <CreateFileText file={code}
                                fetchActive={false}
                                id={"instruction_example_form_request"}
                                className={"simple"}
                />
            </DescriptionElement>
            <DescriptionText >
                <p className={"content__element_text"}>
                    Все запросы должны содержать заголовок с токеном авторизации (Autorization: Bearer <span>{"<token>"}</span>), кроме запросов к общедоступным методам <DescriptionLink link={"https://api.sweb.ru/notAuthorized/"}/>
                </p>
            </DescriptionText>
            <DescriptionElement title={DESCRIPTION_TITLE.POST_REQUEST}>
                <JsonBlockComponent object={DESCRIPTION.EXAMPLE_FORM_REQUEST.JSON}
                                    id={"instruction_example_form_response"}
                >
                    <ReactJson src={DESCRIPTION.EXAMPLE_FORM_REQUEST.JSON}
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
                    DESCRIPTION.EXAMPLE_FORM_REQUEST.TABLET.map((item, index) =>
                        <TableItem key={`description_tablet${index}`}>
                            <p className={"content__method_table-text"}><span className={"fw500"}>{item.param}</span> — {item.description}</p>
                        </TableItem>
                    )
                }
            </DescriptionElement>
            <DescriptionText >
                <p className={"content__element_text"}>
                    Параметр <span className={"fw500"}>jsonrpc</span> является обязательным. Если не передан <span className={"fw500"}>id</span>, то он будет сформирован на стороне API. Если не передан <span className={"fw500"}>method</span> будет вызван дефолтный метод для объекта.</p>
            </DescriptionText>
        </MethodBlock>
    )
}

export default ExampleFormRequest