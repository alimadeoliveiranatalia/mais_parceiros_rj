import { Meta } from "@storybook/react";
import { ButtonFlag } from "./";
import styles from "./styles.module.scss";

export default {
    title: "components/ButtonFlag",
    component: ButtonFlag,
    args:{
        block: false,
        size: 'medium',
        variant: 'primary',
        disabled: false,
        loading: false,
        children: 'ButtonFlag'
    },
    argTypes: {
        block: {
            description: 'Button will grow up to the full width of its container',
            table: { category: 'format'}
        },
        children: {
            description: 'The content of the button',
            control: 'text',
            table: { category: 'content'}
        },
        className: {
            description: 'Specific class name to ppass down to the Button component',
            control: 'null',
            table: { category: 'format'}
        },
        disabled: {
            description: 'Disable mode for the button',
            table: { category: 'format'}
        },
        loading: {
            description: 'Lodding mode for the button',
            table: { category: 'format'}
        },
        onClick: {
            description: 'Handle behaviour when onClick event',
            action: 'clicked',
            table: { category: 'events'}
        },
        size: {
            description: 'Size options for the button',
            control: {
                type: 'inline-radio',
                options: ['medium', 'large']
            },
            table: { category: 'format'}
        }
    }
} as Meta

export function Default(args){
    return (
        
            <ButtonFlag {...args}/>
    )
}