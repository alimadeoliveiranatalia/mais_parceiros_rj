import { AiOutlineLeft } from "react-icons/ai";
import styles from "./styles.module.scss";

export interface ButtonLefthProps {
    primary?: boolean;

    color?: string;

    size?: 'small' | 'medium' | 'large';

    index: any;

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