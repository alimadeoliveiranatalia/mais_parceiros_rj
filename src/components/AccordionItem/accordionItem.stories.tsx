import { Meta } from "@storybook/react";
import { AccordionItem } from "./";

export default {
    component: AccordionItem,
    title: "components/AccordionItem",
    args: {
        item: {
            question:"Capilaridade da Rede Senai",
            answer:"Uma parceria consolidada com uma Unidade Operacional do SENAI posibilita sua disseminação pela rede no estado, trazendo mais vantagens para as empresas parceiras."
        },
        index: 1
    }
} as Meta;

export function Default(args){
    return <AccordionItem {...args} />
}