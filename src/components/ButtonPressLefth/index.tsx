import { AiOutlineLeft } from "react-icons/ai";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export interface ButtonLefthProps {
    primary?: boolean;

    color?: string;

    size?: 'small' | 'medium' | 'large';

    label: string;

    onClick?: () => void;
}

export function ButtonPressLefth<ButtonLefthProps>({ prevSlide }){
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