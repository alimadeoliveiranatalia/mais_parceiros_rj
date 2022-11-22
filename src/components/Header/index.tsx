import Image from 'next/image';
import logo from '../../../public/images/assinatura_+parceiros_senaisp_CMYK_CMYK_300DPI_NEGATIVO.png';
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header role='banner' className={styles.headerConteiner}>
            
            <div id='institutos_parceiros' className={styles.headerContent}>
               <a aria-label='Site FIESP' href="http://www.fiesp.com.br/" >FIESP</a>
               <a aria-label='Site CIESP' href="http://www.ciesp.com.br/" >CIESP</a>
               <a aria-label='Site SENAI' href="http://www.sp.senai.br/" >SENAI</a>
               <a aria-label='Site Instituto Roberto Simonsen' href="http://www.fiesp.com.br/instituto-roberto-simonsen-irs/" >IRS</a>
            </div>
            <Image src={logo} alt='Senai Mais Parceiros' width={235} height={88.23}/>
            <div id='redes_sociais' className={styles.headerContent}>
               <a aria-label='Perfil no Facebook' href="#" ><ImFacebook /></a>
               <a aria-label='Página do Twitter' href="#" ><ImTwitter /></a>
               <a aria-label='Canal no Youtube' href="#" ><ImYoutube /></a>
               <a aria-label='Perfil no Instagram' href="#" ><ImInstagram /></a>
            </div>
        </header>
    )
}