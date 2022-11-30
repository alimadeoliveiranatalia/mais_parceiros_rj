import { Meta, StoryObj } from "@storybook/react";
import { AccordionItem } from "./";

export default {
    component: AccordionItem,
    title: "components/AccordionItem",
    args: {
        item: 
            { 
                question: 'Desenvolvimento de Capital Humano',
                answer: 'As parcerias possibilitam a capacitação do capital humano interno e externo, mantendo atualizados os colaboradores e clientes das empresas parceiras envolvidos no programa.'
            },
        index: 1
    }
} as Meta;

export const Default: StoryObj = {}