import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./styles.module.scss";

export function HeaderModal({area}){
    return (
        <div className={styles.headermodal}>
            <p>{area}</p>
            <AiFillCloseCircle className={styles.iconClose}/>
        </div>
    )
}