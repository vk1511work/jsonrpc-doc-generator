import React, {useEffect, useState, useRef} from "react";
import ReactJson from 'react-json-view';
import {DESCRIPTION_TITLE} from "../../../constants/text";
import DescriptionText from "../atoms/DescriptionText";
import DescriptionElement from "../atoms/DescriptionElement";
import TableItem from "../atoms/TableItem";
import {randomIdString} from "../../../utils/processing_index";
import JsonBlockComponent from "./JsonBlockComponent";
import MethodBlock from "../atoms/MethodBlock";

const MethodComponent = (props) => {
    const {method} = props

    const letterWidthRef = useRef(null)
    const [letterWidth, setLetterWidth] = useState(0)

    const [maxWidthName, setMaxWidthName] = useState(0);
    const [maxWidthType, setMaxWidthType] = useState(0);

    const returnValueString = method.result.description
    const returnValueObj = { returnValueString };
    const returnValueArray = returnValueObj.returnValueString.split('\n\n');

    const randomId = randomIdString()

    const checkParams = () => {
        let obj = {}
        const examples = method.examples[0]
        if (examples.params.length > 0) {
            examples.params.map(el => {
                return obj[el.name] = el.value
            })
        }
        return obj
    }

    useEffect(() => {
        const itemsName = document.querySelectorAll('.item-name');
        const itemsType = document.querySelectorAll('.item-type');

        let maxWidthName = 0;
        let maxWidthType = 0

        itemsName.forEach(item => {
            const itemWidth = item.scrollWidth;
            if (itemWidth > maxWidthName) {
                maxWidthName = itemWidth;
            }
        });

        itemsType.forEach(item => {
            const itemWidth = item.scrollWidth;
            if (itemWidth > maxWidthType) {
                maxWidthType = itemWidth;
            }
        });

        setMaxWidthName(maxWidthName)
        setMaxWidthType(maxWidthType)

    }, []);

    return (
        <MethodBlock id={method.name} title={method.name} description={"метод"}>
            <DescriptionElement
                title={DESCRIPTION_TITLE.DESCRIPTION}
            >
                <DescriptionText text={method.description}/>
            </DescriptionElement>
            <DescriptionElement
                title={
                method.result.schema.type === "array" ? DESCRIPTION_TITLE.RETURN_VALUES.ARRAY :
                    method.result.schema.type === "object" ? DESCRIPTION_TITLE.RETURN_VALUES.OBJECT :
                        DESCRIPTION_TITLE.RETURN_VALUES.OTHER
                }
            >
                {
                    returnValueArray.map((returnValue, index) =>
                        <TableItem key={`return_value_${method.name}${index}`}>
                            <p className={"content__method_table-text"}>{returnValue}</p>
                        </TableItem>
                    )
                }
            </DescriptionElement>
            {
                method.params.length > 0 ?
                    <DescriptionElement
                        title={DESCRIPTION_TITLE.PARAMS_TO_REQUEST}
                    >
                        <div className={"content__method_table-container"} >
                            {
                                method.params.map((param, index) =>
                                    <TableItem key={`params_request_${method.name}${index}`}
                                               className={"content__method_table-item"}
                                               style={{gridTemplateColumns: `minmax(${maxWidthName}px, 3fr) minmax(${maxWidthType}px, 2fr) minmax(160px, 6fr)`}}
                                    >
                                        <p className={"content__method_table-text item-name"}>{param.name}</p>
                                        <p className={"content__method_table-text item-type"}>{param.schema.type}</p>
                                        <p className={"content__method_table-text"}>{param.description}</p>
                                    </TableItem>

                                )
                            }
                        </div>
                    </DescriptionElement> : ""
            }

            <DescriptionElement
                title={DESCRIPTION_TITLE.TYPE_DATA_RESPONSE}
            >
                <DescriptionText text={method.result.schema.type}/>
            </DescriptionElement>
            <DescriptionElement
                title={DESCRIPTION_TITLE.EXAMPLE_REQUEST}
            >
                <JsonBlockComponent object={{jsonrpc: "2.0", method: method?.name, params: checkParams()}}
                                    id={`json_request_${method?.name}`}
                >
                    <ReactJson src={
                        {
                            jsonrpc: "2.0",
                            method: method?.name,
                            params: checkParams()
                        }}
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
            <DescriptionElement
                title={DESCRIPTION_TITLE.EXAMPLE_RESPONSE}
            >
                <JsonBlockComponent object={{jsonrpc: "2.0", id: randomId, params: method.examples[0].result.value}}
                                    id={`json_answer_${method?.name}`}
                >
                    <ReactJson src={
                        {
                            jsonrpc: "2.0",
                            id: randomId,
                            params: method.examples[0].result.value
                        }}
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
        </MethodBlock>
    )
}

export default MethodComponent;