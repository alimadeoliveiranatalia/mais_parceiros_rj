import { ComponentMeta } from "@storybook/react";
import { ButtonPressLefth } from ".";

export default {
    title: "components/ButtonPressLefth",
    component: ButtonPressLefth,
    argTypes: {
        backgroundColor: { control: 'color'},
        prevSlide: { action: 'clicked'}
    }
    
} as ComponentMeta<typeof ButtonPressLefth>;

export function Default(args) { 
    return (
        <ButtonPressLefth {...args}/>
    )
} 

export const Primary = Default.bind({});
Primary.args = { 
    backgroundColor: 'green',
    color: 'yellow',
    width:'2.5rem',
    height:'2.5rem'
}

export const Secondary = Default.bind({});
Secondary.args = {
    backgroundColor: 'gray',
    color: 'purple',
    width:'6rem',
    height:'6rem'
}

