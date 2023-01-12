import { parceiros } from "../../../public/parceiros";

import styles from "./styles.module.scss";

export function Modal({ setIsOpen, children }){
    return (
        <div className={styles.modalStyle} onClick={() => setIsOpen(false)}>
            <div className={styles.renderContent}>{children}</div>
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