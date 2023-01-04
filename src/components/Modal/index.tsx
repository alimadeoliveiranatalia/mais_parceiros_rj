import { ContentModal } from "../ContentModal";
import { HeaderModal } from "../HeaderModal";
import { parceiros } from "../../../public/parceiros";

import styles from "./styles.module.scss";

const list_parceiros = parceiros.map((item) => {
    return (
        <>
            <HeaderModal area={item.area}/>
            <ContentModal key={item.id} empresa={item.empresa} escola={item.escola_responsavel} />
        </>
    )
});

export function Modal(){
    return (
        <div className={styles.modalStyle}>
            {list_parceiros}
        </div>
    )
}