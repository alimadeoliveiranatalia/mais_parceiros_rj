import plant from "../../../public/images/icons_parceiros/icon-park-solid_pure-natural.svg";
import fork from "../../../public/images/icons_parceiros/fluent_food-16-filled.svg";
import association from "../../../public/images/icons_parceiros/icon-park_association.svg";
import auto_industry from "../../../public/images/icons_parceiros/carbon_ibm-cloud-pak-network-automation.svg";
import automotiva from "../../../public/images/icons_parceiros/bxs_car-mechanic.svg";
import ceramica from "../../../public/images/icons_parceiros/game-icons_porcelain-vase.svg";
import ti from "../../../public/images/icons_parceiros/mdi_desktop-classic.svg";
import grafica from "../../../public/images/icons_parceiros/el_file-edit.svg";
import gestor from "../../../public/images/icons_parceiros/fluent-mdl2_workforce-management.svg";

import styles from "./styles.module.css";
import { ModalRadixUI } from "../ModalRadixUI";


export function CardListEmpresas(){

    return (
        <div className={styles.card}>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Agronegócio'}
                    src={plant}
                    area={1}
                />
                <ModalRadixUI
                    title={'Alimentos'}
                    src={fork}
                    area={2}
                />
                <ModalRadixUI
                    title={'Associações'}
                    src={association}
                    area={3}
                />
            </div>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Atomação'}
                    src={auto_industry}
                    area={4}
                />
                <ModalRadixUI
                    title={'Automotiva'}
                    src={automotiva}
                    area={5}
                />
                <ModalRadixUI
                    title={'Cerâmica'}
                    src={ceramica}
                    area={6}
                />
            </div>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Construção'}
                    src={ti}
                    area={7}
                />
                <ModalRadixUI
                    title={'Eletrônica'}
                    src={grafica}
                    area={8}
                />
                <ModalRadixUI
                    title={'Energia'}
                    src={gestor}
                    area={9}
                />
            </div>                    
        </div>
    )
}