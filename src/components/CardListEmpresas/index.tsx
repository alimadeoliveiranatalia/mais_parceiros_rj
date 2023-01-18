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

export function CardListEmpresas(){

    return (
        <div className={styles.card}>
            <div className={styles.subCard}>
                <ModalRadixUI title={'Agronegócio'} src={plant}/>
                <ModalRadixUI title={'Alimentos e Bebidas'} src={fork}/>
                <ModalRadixUI title={'Associações e Entidades'} src={association}/>
            </div>
            <div className={styles.subCard}>
                <ModalRadixUI title={'Automação Industrial'} src={auto_industry}/>
                <ModalRadixUI title={'Automotiva'} src={automotiva}/>
                <ModalRadixUI title={'Cerâmica'} src={ceramica}/>
            </div>
            <div className={styles.subCard}>
                <ModalRadixUI title={'Tecnologia da Informação'} src={ti}/>
                <ModalRadixUI title={'Gráfica e Editorial'} src={grafica}/>
                <ModalRadixUI title={'Equipamentos Biomédicos'} src={gestor}/>
            </div>
        </div>
    )
}