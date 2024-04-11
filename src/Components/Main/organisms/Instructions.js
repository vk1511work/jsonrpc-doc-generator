import React from 'react';

import {DESCRIPTION_TITLE, TITLE} from "../../../constants/text";

import HTypeTitle from "../atoms/HTypeTitle";
import DescriptionText from "../atoms/DescriptionText";
import DescriptionElement from "../atoms/DescriptionElement";
import GettingATokenApi from "../molecules/Instrusctions/GettingATokenApi";
import ExampleFormRequest from "../molecules/Instrusctions/ExampleFormRequest";
import DescriptionLink from "../atoms/DescriptionLink";
import SuccessfulResponse from "../molecules/Instrusctions/SuccessfulResponse";
import CallingTheApi from "../molecules/Instrusctions/CallingTheApi";
import ErrorMessage from "../molecules/Instrusctions/ErrorMessage";
import ExtendedAboutResponse from "../molecules/Instrusctions/ExtendedAboutResponse";

const Instructions = () => {
    document.title = TITLE.BROWSER_TITLE + " - " + TITLE.INSTRUCTION

    return (
        <section className={`content instruction`} id={"instruction"}>
            <HTypeTitle title={TITLE.INSTRUCTION} hType={"h1"}/>
            <div className={"content__method content__method_instruction"}>
                <DescriptionElement title={DESCRIPTION_TITLE.ACTUAL_VERSION}>
                    <DescriptionText>
                        <p className={"content__element_text"}>JSON-RPC 2.0 <DescriptionLink link={"http://www.jsonrpc.org/specification"}/></p>
                    </DescriptionText>
                </DescriptionElement>
            </div>

            <CallingTheApi />
            <GettingATokenApi />
            <ExampleFormRequest />
            <SuccessfulResponse />
            <ErrorMessage />
            <ExtendedAboutResponse />

        </section>
    )
}

export default Instructions;