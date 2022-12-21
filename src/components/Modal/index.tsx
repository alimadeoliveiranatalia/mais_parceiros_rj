import { ContentModal } from "../ContentModal";
import { HeaderModal } from "../HeaderModal";

import styles from "./styles.module.scss";

export function Modal(){
    return (
        <div className={styles.modalStyle}>
            <HeaderModal />
            <ContentModal empresa={'name_empresa'} escola={'000 - school_senai'} icon={'icon'}/>
        </div>
    )
}