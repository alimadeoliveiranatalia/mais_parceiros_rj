import { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { ContentModal } from "../ContentModal";
import { HeaderModal } from "../HeaderModal";

export default {
    component: Modal,
    subcomponents: { HeaderModal, ContentModal },
    title: 'components/Modal'
} as Meta;

export const Default: StoryObj = {}