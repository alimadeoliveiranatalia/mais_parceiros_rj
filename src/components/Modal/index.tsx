import { ContentModal } from "../ContentModal";
import { parceiros } from "../../../public/parceiros";

import styles from "./styles.module.scss";

export function Modal(){
    return (
        <div className={styles.modalStyle}>
            <ContentModal area={'Agronegócio'} empresa={'Samsung'} escola={'Senai - Anchieta'} />
            {/*
                parceiros.map(
                    (item) => {
                        return (
                            <div className={styles.modalStyle} key={item.id}>
                                <ContentModal area={item.area} empresa={item.empresa} escola={item.escola_responsavel} />
                            </div>
                        )
                    }
                )
            */}
        </div>
    )
}