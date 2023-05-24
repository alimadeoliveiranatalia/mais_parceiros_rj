import styles from "./styles.module.css";
import { AiOutlineDownload } from "react-icons/ai";

export function ButtonDownload(endereco_url: string){
    return (
        <a href={endereco_url} download={'file.pdf'} aria-label={'document'}><AiOutlineDownload className={styles.icon}/></a>
    )
}