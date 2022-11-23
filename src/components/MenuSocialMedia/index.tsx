import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';

import styles from './styles.module.scss';

export function MenuSocialMedia(){
    return (
        <div className={styles.navConteiner}>
            <a aria-label='Perfil no Facebook' href="#" ><ImFacebook /></a>
            <a aria-label='Página do Twitter' href="#" ><ImTwitter /></a>
            <a aria-label='Canal no Youtube' href="#" ><ImYoutube /></a>
            <a aria-label='Perfil no Instagram' href="#" ><ImInstagram /></a>
        </div>
    )
}