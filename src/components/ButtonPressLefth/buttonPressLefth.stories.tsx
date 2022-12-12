import { Meta, StoryObj } from "@storybook/react";
import { ButtonPressLefth } from ".";

export default {
    title: "components/ButtonPressLefth",
    component: ButtonPressLefth,
    argTypes: {
        backgroundColor: { control: 'color'}
    }
    
} as Meta<typeof ButtonPressLefth>;

export function Default(args){    
    return (
        <ButtonPressLefth {...args}/>
    )
}

export const Primary = Default.bind({});
Primary.args = { theme: 'primary'}

export const Secondary = Default.bind({});
Secondary.args = { theme: 'secondary'}

