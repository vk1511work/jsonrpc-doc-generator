import React from 'react';
import ReactDOM from 'react-dom';
import {parseOpenRPCDocument} from "@open-rpc/schema-utils-js/build/src/index-web";
import {OpenrpcDocument as OpenRPC} from "@open-rpc/meta-schema/build/src";
import SwebDocument from "../Components/Main/organisms/SwebDocument";

export function newParse (
    schema: {
        openrpc: string;
        info: { title: string; description: string; version: string; };
        servers: { name: string; summary: string; description: string; url: string; }[];
        methods: ({ name: string; description: string; params: { name: string; description: string; schema: { $ref: string; }; }[]; result: { $ref: string; }; examples: { name: string; params: { $ref: string; }[]; result: { $ref: string; }; }[]; links: { name: string; description: string; method: string; params: { key: string; }; }[]; } | { name: string; description: string; params: { name: string; schema: { $ref: string; }; }[]; result: { $ref: string; }; examples: { name: string; params: { $ref: string; }[]; result: { $ref: string; }; }[]; links: { name: string; description: string; method: string; params: { newEmail: string; password: string; }; }[]; })[];
        components: { contentDescriptors: { result: { name: string; description: string; schema: { type: string; }; }; }; schemas: { Integer: { type: string; }; String: { type: string; }; }; examples: { integerOne: { name: string; summary: string; description: string; value: number; }; stringEmail: { name: string; summary: string; description: string; value: string; }; stringPassword: { name: string; summary: string; description: string; value: string; }; }; }; },
    id: string,
    applicability: any,
    setLoader: any
){

    parseOpenRPCDocument(schema as OpenRPC).then(rpcSchema => {
        ReactDOM.render(
            <SwebDocument schema={rpcSchema} applicability={applicability} setLoader={setLoader}/>
            , document.getElementById(id));
    }).catch(error => {
        console.log(error);
    });
}