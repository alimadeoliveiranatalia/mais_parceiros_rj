import {ImLocation2, ImPhone} from 'react-icons/im';
import { MenuSocialMediaFooter } from '../MenuSocialMediaFooter';
import styles from './styles.module.scss';

export function Footer(){
    return(
        <footer role='contentinfo' className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <div className={styles.item}>
                    <ImPhone className={styles.icon}/>
                    <div>
                        <span>
                            Central de Atendimento
                        </span>
                        <p>4002-0231 (Custo de Ligação Local)</p>
                        <p>0800-0231-231 (Ligações gratuitas de telefones no Estado do Rio)</p>
                        <p>Seg. à Sex. das 9h às 18hrs</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <a aria-label='Acesse os termos de uso e privacidade' href='https://www.firjan.com.br/termo-de-privacidade.htm'>                        
                            Termos de Privacidade
                        </a>
                    </div>
                </div>
                <div>                    
                    <span>Siga-nos nas redes</span>
                    <MenuSocialMediaFooter />                    
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2023 © Todos os direitos reservados à FIRJAN.</small>
            </div>
        </footer>
    )
}