import styles from './styles.module.scss';

export function Navigation(){
    return (
        <nav role='navigation' className={styles.navigation}>
            <a aria-label='Depoimentos' href="#depoimentos">Depoimentos de quem já fez parte</a>
            <a aria-label='Editais' href="#editais">Acesse o Edital para Parcerias</a>
            <a aria-label='Formulário de Participação' href="#seja_parceiro">Saiba como fazer parte</a>
        </nav>
    )
}