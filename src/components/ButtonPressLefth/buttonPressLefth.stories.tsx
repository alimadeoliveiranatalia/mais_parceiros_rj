import { Meta } from "@storybook/react";
import {useArgs} from "@storybook/client-api";
import { ButtonPressLefth, ButtonLefthProps } from ".";

export default {
    title: "components/ButtonPressLefth",
    component: ButtonPressLefth,
    args: {
        primary: true,
        color: 'color',
        size: 'medium',
        index: 1,
        onClick: () => {}

    }
} as Meta<ButtonLefthProps>;

export function Default(args){
    const [index, setIndex] = useArgs();
    
    return (
        <ButtonPressLefth {...args} />
    )
}

