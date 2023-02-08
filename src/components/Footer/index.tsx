import { MenuSocialMediaFooter } from '../MenuSocialMediaFooter';
import styles from './styles.module.css';

export function Footer(){
    return(
        <footer role='contentinfo' className={styles.footerConteiner}>
            <MenuSocialMediaFooter />
            <div className={styles.footerContent}>
                <div className={styles.item}>
                    <div>
                        <span>
                            <a
                                href='https://www.firjan.com.br/termo-de-privacidade.htm'
                                aria-label='acesse nossos termos'
                            >
                                Termos de Privacidade
                            </a>
                        </span>
                        <p>Atendimento para empresas</p>
                        <p>Atendimento à comunidade</p>                        
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <span>(21) 4042-6565</span>
                        <p>Horário de Atendimento:</p>
                        <p>Seg à Sex/ das 9hrs às 18hrs</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <small>Copyright 2023 © Todos os direitos reservados à FIRJAN.</small>
            </div>
        </footer>
    )
}