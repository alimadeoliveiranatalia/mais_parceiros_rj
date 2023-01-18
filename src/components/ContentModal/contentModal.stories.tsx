import { Meta, StoryObj } from "@storybook/react";
import { ContentModal} from ".";

export default {
    component: ContentModal,
    title: 'components/ContentModal',
    args: {
        area:'Cerâmica',
        empresa: 'Instituto de Pesquisas',
        escola: 'Senai Vila Mariana - Instituto Anchieta'
    }
}as Meta;

export const Default: StoryObj = {}