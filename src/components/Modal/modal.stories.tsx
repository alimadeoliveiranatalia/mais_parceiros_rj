import { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { ContentModal } from "../ContentModal";
import { HeaderModal } from "../HeaderModal";
import { parceiros } from "../../../public/parceiros";

export default {
    component: Modal,
    subcomponents: { HeaderModal, ContentModal },
    title: 'components/Modal',
    args: {
        parceiros: parceiros
    }
} as Meta;

export function Default(args){
    return ( <Modal {...args} />)
}