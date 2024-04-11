import React from "react";

import HTypeTitle from "../atoms/HTypeTitle";
import {TITLE} from "../../../constants/text";
import ListMethods from "../atoms/ListMethods";
import DescriptionText from "../atoms/DescriptionText";

import php from '../../../examples/php.txt'
import python from '../../../examples/python.txt'
import nodejs from '../../../examples/nodejs.txt'
import CreateFileText from "../atoms/CreateFileText";

import DescriptionElement from "../atoms/DescriptionElement";
import MethodBlock from "../atoms/MethodBlock";

const urlArray = [
    {
        id: "php",
        url: "/php",
        name: "PHP",
        descriptionTarget: "cURL",
        file: php
    },
    {
        id: "python",
        url: "/python",
        name: "Python",
        descriptionTarget: "requests",
        file: python
    },
    {
        id: "nodejs",
        url: "/nodejs",
        name: "NodeJS",
        descriptionTarget: "https",
        file: nodejs
    },
]

const Examples = () => {
    document.title = TITLE.BROWSER_TITLE + " - " + TITLE.EXAMPLE_API

    return (
        <section className={`content examples`} id={"examples"}>
            <HTypeTitle title={TITLE.EXAMPLE_API} hType={"h1"} />
            <ListMethods methods={urlArray} className={"content__examples"} type={"link"}/>
            {
                urlArray.map(item =>
                    <MethodBlock key={`exampleApi_${item.name}`} id={item.id} title={item.name}>
                        <DescriptionElement>
                            <DescriptionText text={<span>Для запросов используется библиотека <span className={"fw500"}>{item.descriptionTarget}</span>.</span>} />
                        </DescriptionElement>
                        <DescriptionElement>
                            <CreateFileText file={item.file}
                                            id={`examples-${item.id}`}
                                            languageName={item.id}
                            />
                        </DescriptionElement>
                    </MethodBlock>
                )
            }
        </section>
    )
}

export default Examples