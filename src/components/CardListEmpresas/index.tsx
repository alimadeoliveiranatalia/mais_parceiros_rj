import { CardAtuacao } from "../CardAtuacao";
import plant from "../../../public/images/icons_parceiros/icon-park-solid_pure-natural.svg";
import fork from "../../../public/images/icons_parceiros/fluent_food-16-filled.svg";
import association from "../../../public/images/icons_parceiros/icon-park_association.svg";
import auto_industry from "../../../public/images/icons_parceiros/carbon_ibm-cloud-pak-network-automation.svg";
import automotiva from "../../../public/images/icons_parceiros/bxs_car-mechanic.svg";
import ceramica from "../../../public/images/icons_parceiros/game-icons_porcelain-vase.svg";
import ti from "../../../public/images/icons_parceiros/mdi_desktop-classic.svg";
import grafica from "../../../public/images/icons_parceiros/el_file-edit.svg";
import gestor from "../../../public/images/icons_parceiros/fluent-mdl2_workforce-management.svg";

import styles from "./styles.module.scss";
import { ModalRadixUI } from "../ModalRadixUI";
import { parceiros } from "../../../public/parceiros";
import { ContentModal } from "../ContentModal";

/*const list_parceiros = parceiros.map((item) => {
    return (
        <div className={styles.subModalRadix}>
            <ModalRadixUI
                title={item.area}
                src={plant}
                empresa={item.empresa}
                escola={item.escola_responsavel}
            />
        </div>    
    )
});*/

export function CardListEmpresas(){

    return (
        <div className={styles.card}>
            <div className={styles.subCard}>
                <ModalRadixUI
                    title={'Agronegócio'}
                    src={plant}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Alimentos'}
                    src={fork}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Associações'}
                    src={association}
                    empresa={'nokia'}
                    escola={'senai'}
                />
            </div>
            <div className={styles.subCard}>
                <ModalRadixUI
                    title={'Atomação'}
                    src={auto_industry}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Automotiva'}
                    src={automotiva}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Cerâmica'}
                    src={ceramica}
                    empresa={'nokia'}
                    escola={'senai'}
                />
            </div>
            <div className={styles.subCard}>
                <ModalRadixUI
                    title={'Sofware'}
                    src={ti}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Papelaria'}
                    src={grafica}
                    empresa={'nokia'}
                    escola={'senai'}
                />
                <ModalRadixUI
                    title={'Gestão'}
                    src={gestor}
                    empresa={'nokia'}
                    escola={'senai'}
                />
            </div>            
        </div>
    )
}