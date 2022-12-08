import { AiOutlineRight } from "react-icons/ai";
import styles from "./styles.module.scss";

export function ButtonPressRight({ nextSlide }){
    return (
        <button
            aria-label='click para o posterior'
            onClick={nextSlide}
            className={styles.iconButton}
        >
            <AiOutlineRight />
        </button>
    )
}