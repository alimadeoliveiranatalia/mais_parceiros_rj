import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header role='banner' className={styles.headerContent}>
            <div className={styles.header_itens}>
                <AiFillHome/>
                <AiOutlineRight  />
                <span>Mais Parceiros</span>
            </div>
        </header>
    )
}