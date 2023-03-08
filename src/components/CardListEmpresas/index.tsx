import mechanic from "../../../public/images/icons_parceiros/fluent-emoji-high-contrast_man-mechanic.svg";
import fork from "../../../public/images/icons_parceiros/fluent_food-16-filled.svg";
import plastic from "../../../public/images/icons_parceiros/fluent_drink-bottle-20-filled.svg";
import computer from "../../../public/images/icons_parceiros/mdi_desktop-classic.svg";
import automotiva from "../../../public/images/icons_parceiros/bxs_car-mechanic.svg";
import climatizacao from "../../../public/images/icons_parceiros/icon-park-outline_air-conditioning.svg";
import construction from "../../../public/images/icons_parceiros/construction-svgrepo-com.svg";
import energy from "../../../public/images/icons_parceiros/energy-svgrepo-com.svg";
import gestor from "../../../public/images/icons_parceiros/fluent-mdl2_workforce-management.svg";

import styles from "./styles.module.css";
import { ModalRadixUI } from "../ModalRadixUI";


export function CardListEmpresas(){

    return (
        <div className={styles.card}>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Mecânica e Metalurgica'}
                    src={mechanic}
                    area={1}
                />
                <ModalRadixUI
                    title={'Alimentos'}
                    src={fork}
                    area={2}
                />
                <ModalRadixUI
                    title={'Plásticos'}
                    src={plastic}
                    area={3}
                />
            </div>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Tecnologia da Informação'}
                    src={computer}
                    area={4}
                />
                <ModalRadixUI
                    title={'Automotiva'}
                    src={automotiva}
                    area={5}
                />
                <ModalRadixUI
                    title={'Refrigeração'}
                    src={climatizacao}
                    area={6}
                />
            </div>
            <div className={styles.subModalRadix}>
                <ModalRadixUI
                    title={'Construção Civil'}
                    src={construction}
                    area={7}
                />
                <ModalRadixUI
                    title={'Energia'}
                    src={energy}
                    area={8}
                />
                <ModalRadixUI
                    title={'Gestão'}
                    src={gestor}
                    area={9}
                />
            </div>                    
        </div>
    )
}