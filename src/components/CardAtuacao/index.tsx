import { RiPlantFill } from "react-icons/ri"
import { getParceirosProps } from "../../utils/getParceirosProps";

import styles from "./styles.module.scss";

export function CardAtuacao({ list_parceiros }){
    //const list = list_parceiros.agronegocio.map((item) => (<p>{item.empresa}</p>))
    return (
        <div className={styles.card}>
            <RiPlantFill className={styles.icon}/>
            <p>Agronegocio</p>
        </div>
    )
}

export async function getStaticProps(){
    const list_parceiros = await getParceirosProps();

    return {
        props: { list_parceiros }
    }
}


