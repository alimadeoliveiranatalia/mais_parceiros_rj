import { CardAtuacao } from "../CardAtuacao";
import { area_atuacao } from "../../../public/area_atuacao";
import styles from "./styles.module.scss";

export function CardListEmpresas(){
    return (
        <div className={styles.card}>
            {area_atuacao.map((item) => {
                return (
                    <CardAtuacao title={item.area} />
                )
            })}
        </div>
    )
}