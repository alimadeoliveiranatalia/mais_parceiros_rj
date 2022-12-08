import { Meta } from "@storybook/react";
import { ButtonFlag } from "./";
import styles from "./styles.module.scss";

export default {
    title: "components/ButtonFlag",
    component: ButtonFlag,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta

export function Default(args){
    return (        
        <ButtonFlag {...args}/>
    )
}
export const Primary = Default.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Default.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Default.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Default.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};