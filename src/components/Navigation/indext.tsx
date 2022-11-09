import styles from './styles.module.scss';

export function Navigation(){
    return (
        <div className={styles.navigation}>
            <a href="#depoimentos">Depoimentos de quem já fez parte</a>
            <a href="#editais">Acesse o Edital para Parcerias</a>
            <a href="#seja_parceiro">Saiba como fazer parte</a>
        </div>
    )
}