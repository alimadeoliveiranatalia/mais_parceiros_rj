import {ImLocation2, ImPhone} from 'react-icons/im';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <div>
                    <span> 
                        <ImLocation2 />
                        Rua de Pedestre SE
                    </span>
                    <p>Av. Paulista</p>
                </div>
                <div>
                    <span>
                        <ImPhone />
                        Central de Atendimento
                    </span>
                    <p>(11)088-055-1000</p>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2022 © Todos os direitos reservados.</small>
            </div>
        </footer>
    )
}