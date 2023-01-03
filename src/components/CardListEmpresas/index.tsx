import { CardAtuacao } from "../CardAtuacao";
import { area_atuacao } from "../../../public/area_atuacao";
import styles from "./styles.module.scss";

export function CardListEmpresas(){
    return (
        <div className={styles.card}>
            <div>
                <CardAtuacao title={'Agronegócio'} />
                <CardAtuacao title={'Alimentos e Bebidas'} />
                <CardAtuacao title={'Associações e Entidades'} />
            </div>
            <div>
                <CardAtuacao title={'Automação Industrial'} />
                <CardAtuacao title={'Automotiva'} />
                <CardAtuacao title={'Cerâmica'} />
            </div>
            <div>
                <CardAtuacao title={'Construção Civil'} />
                <CardAtuacao title={'Gráfica e Editorial'} />
                <CardAtuacao title={'Equipamentos Biomédicos'} />
            </div>
        </div>
    )
}