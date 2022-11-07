import styles from './styles.module.scss';

export function Navigation(){
    return (
        <div className={styles.navigation}>
            <a href="">Seja Uma Empresa Parceira</a>
            <a href="">Depoimento de quem já fez parte</a>
            <a href="">Acesse o Edital para Parcerias</a>
            <a href="">Saiba como fazer parte</a>
        </div>
    )
}