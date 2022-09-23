import Image from 'next/image';
import logo from '../../../public/images/assinatura_+parceiros_senaisp_CMYK_CMYK_300DPI_NEGATIVO.png';
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.headerConteiner}>
            <div className={styles.headerContent}>
               <a href="http://www.fiesp.com.br/" >FIESP</a>
               <a href="http://www.ciesp.com.br/" >CIESP</a>
               <a href="http://www.sp.senai.br/" >SENAI</a>
               <a href="http://www.fiesp.com.br/instituto-roberto-simonsen-irs/" >IRS</a>
            </div>
            <Image src={logo} alt='logo Senai'width={235} height={88.23}/>
            <div className={styles.headerContent}>
               <a href="#" ><ImFacebook /></a>
               <a href="#" ><ImTwitter /></a>
               <a href="#" ><ImYoutube /></a>
               <a href="#" ><ImInstagram /></a>
            </div>
        </header>
    )
}