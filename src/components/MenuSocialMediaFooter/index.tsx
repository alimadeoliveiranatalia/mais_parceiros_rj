import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';

import styles from '../MenuSocialMedia/styles.module.scss';

export function MenuSocialMediaFooter(){
    return (
        <div className={styles.navConteinerFooter}>
            <a aria-label='Perfil no Facebook' href="#" ><ImFacebook /></a>
            <a aria-label='Página do Twitter' href="#" ><ImTwitter /></a>
            <a aria-label='Canal no Youtube' href="#" ><ImYoutube /></a>
            <a aria-label='Perfil no Instagram' href="#" ><ImInstagram /></a>
        </div>
    )
}