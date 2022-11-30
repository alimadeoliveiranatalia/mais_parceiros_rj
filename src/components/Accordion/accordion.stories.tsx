import { Meta, StoryObj } from "@storybook/react";
import { AccordionItem } from "../AccordionItem";
import { Accordion } from "./";

export default {
    component: Accordion,
    title: "components/Accordion",
    args: {
      questionsAnswers : [
        {
          question: 'Desenvolvimento de Capital Humano',
          answer: 'As parcerias possibilitam a capacitação do capital humano interno e externo, mantendo atualizados os colaboradores e clientes das empresas parceiras envolvidos no programa.'
        }
      ]
    }
} as Meta;

export const Default: StoryObj = {}