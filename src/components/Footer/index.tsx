import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <span>Institucional</span>
                <a>Conheça o SENAI</a>
                <a>Diretoria</a>
                <a>Autonomia Regional</a>
            </div>
        </footer>
    )
}