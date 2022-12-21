import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./styles.module.scss";

export function HeaderModal(){
    return (
        <div className={styles.headermodal}>
            <p>Agronegocio</p>
            <AiFillCloseCircle className={styles.iconClose}/>
        </div>
    )
}