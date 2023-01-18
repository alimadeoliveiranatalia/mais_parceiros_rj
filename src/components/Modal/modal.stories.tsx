﻿import { Meta } from "@storybook/react";
import { Modal } from ".";
import { ContentModal } from "../ContentModal";
import { parceiros } from "../../../public/parceiros";

export default {
    component: Modal,
    subcomponents: { ContentModal },
    title: 'components/Modal',
    args: {
        parceiros: parceiros
    }
} as Meta

export function Default(args){
    return ( 
        <Modal {...args} >
            <ContentModal area="Mecânica e Metalúrgica" empresa="EST | LTDA" escola="Senai Anchieta" key={1}/>
        </Modal>
    )
}