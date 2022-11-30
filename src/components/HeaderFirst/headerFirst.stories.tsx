import { Meta, StoryObj } from "@storybook/react";
import logo from '../../../public/images/assinatura_+parceiros_senaisp_CMYK_CMYK_300DPI_NEGATIVO.png';
import { HeaderFirst } from "./";

export default {
    component: HeaderFirst,
    title: "components/HeaderFirst"
} as Meta;

const image = {
    src: logo,
    alt: 'Senai Mais Parceiros'
}

//export const Default = () => <img src={image.src} alt={image.alt} />
export const Default : StoryObj = {}