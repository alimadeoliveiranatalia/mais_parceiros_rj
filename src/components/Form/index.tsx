import styles from './styles.module.scss';

export function Form(){
    return (
        <iframe
            className={styles.formIframe}
            src="https://forms.office.com/r/d7BWRx4vRZ?embed=true"
            frameBorder="0"
            allowFullScreen
        > </iframe>
    )
}