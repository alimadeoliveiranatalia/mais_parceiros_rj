import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.headerConteiner}>
            <div className={styles.headerContent}>
               <a href="http://www.fiesp.com.br/" target="_blank">FIESP</a>
               <a href="http://www.ciesp.com.br/" target="_blank">CIESP</a>
               <a href="http://www.sp.senai.br/" target="_blank">SENAI</a>
               <a href="http://www.fiesp.com.br/instituto-roberto-simonsen-irs/" target="_blank">IRS</a>
            </div>
        </header>
    )
}