import { Meta } from "@storybook/react";
import { AiOutlineLeft } from "react-icons/ai";
import styles from "./styles.module.scss";
//import { ButtonPressLefth, ButtonLefthProps } from ".";

export default {
    title: "components/ButtonPressLefth",
    //component: ButtonPressLefth,
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
} as Meta;

export function Default(args){
    function prevSlide(){}
    
    return (
       <button
            aria-label='click para o anterior'
            onClick={prevSlide}
            className={styles.iconButton}
        >
            <AiOutlineLeft />
       </button>
    )
}

