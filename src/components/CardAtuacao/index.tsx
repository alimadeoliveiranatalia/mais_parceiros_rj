
import styles from "./styles.module.scss";

export function CardAtuacao({title}){
    
    return (        
        <button className={styles.card} >
            <p>{title}</p>
        </button>        
    )
}



