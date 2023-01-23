import {ImLocation2, ImPhone} from 'react-icons/im';
import { MenuSocialMedia } from '../MenuSocialMedia';
import { MenuSocialMediaFooter } from '../MenuSocialMediaFooter';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer role='contentinfo' className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <div>
                    <ImLocation2 className={styles.icon}/>
                    <span>                        
                        Rua de Pedestre SE
                    </span>
                    <p>Av. Paulista</p>
                </div>
                <div>
                    <ImPhone className={styles.icon}/>
                    <span>
                        Central de Atendimento
                    </span>
                    <p>(11)088-055-1000</p>
                </div>
                <div>
                    <span>Siga-nos</span>
                    <MenuSocialMediaFooter />
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2022 © Todos os direitos reservados.</small>
            </div>
        </footer>
    )
}