import styles from './styles.module.css';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            aria-label='Formulário para fazer parte do programa'
            src="https://forms.office.com/r/d7BWRx4vRZ?embed=true"
            frameBorder="0"
            allowFullScreen
        > </iframe>
    )
}