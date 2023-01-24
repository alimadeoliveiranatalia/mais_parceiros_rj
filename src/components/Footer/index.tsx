import {ImLocation2, ImPhone} from 'react-icons/im';
import { MenuSocialMediaFooter } from '../MenuSocialMediaFooter';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer role='contentinfo' className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <div className={styles.item}>
                    <ImLocation2 className={styles.icon}/>
                    <div>
                        <span>                        
                            Rua de Pedestre SE
                        </span>
                        <p>Av. Paulista</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <ImPhone className={styles.icon}/>
                    <div>
                        <span>
                            Central de Atendimento
                        </span>
                        <p>(00)000-00-0000</p>
                    </div>
                </div>
                <div>                    
                    <span>Siga-nos nas redes</span>
                    <MenuSocialMediaFooter />                    
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2022 © Todos os direitos reservados.</small>
            </div>
        </footer>
    )
}