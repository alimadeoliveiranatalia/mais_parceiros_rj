import { MenuToggle } from '../MenuToggle';
import Image from 'next/image';
import logo from '../../../public/images/assinatura_+parceiros_senaisp_CMYK_CMYK_300DPI_NEGATIVO.png';
import styles from './styles.module.scss';

export function MobileHeader(){
    return(
        <div className={styles.header}>
            <Image src={logo} alt='Senai Mais Parceiros' width={235} height={88.23}/>
            <MenuToggle />
        </div>
    )
}