import { Meta } from "@storybook/react";
import { ButtonPressRight } from ".";

export default {
    title: "components/ButtonPressRight",
    component: ButtonPressRight
} as Meta;

export function Default(args){
    return (
        <ButtonPressRight {...args} />
    )
}