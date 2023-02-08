import styles from "./styles.module.css";
import { AiOutlineDownload } from "react-icons/ai";

export function ButtonDownload(){
    return (
        <a href="#" download={'file.pdf'} aria-label={'document'}><AiOutlineDownload className={styles.icon}/></a>
    )
}