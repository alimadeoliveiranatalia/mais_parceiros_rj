import { Meta } from "@storybook/react";
import { ButtonPressLefth, ButtonLefthProps } from ".";

export default {
    title: "components/ButtonPressLefth",
    component: ButtonPressLefth,
    args: {
        primary: true,
        color: 'color',
        size: 'medium',
        onClick: () => {}

    },
    argTypes: {
        color: { control: 'color'},
        size: { control: 'radio'}
    }
} as Meta<ButtonLefthProps>;

export function Default(args){
    
    return (
        <ButtonPressLefth {...args} />
    )
}

