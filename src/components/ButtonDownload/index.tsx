import styles from "./styles.module.scss";
import { AiOutlineDownload } from "react-icons/ai";

export function ButtonDownload(){
    return (
        <a href="#" download={'file.pdf'}><AiOutlineDownload className={styles.icon}/></a>
    )
}