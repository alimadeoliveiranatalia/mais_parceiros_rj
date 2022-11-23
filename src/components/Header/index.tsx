import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import styles from './styles.module.scss';

export function Header(){
    return (
        <header role='banner' className={styles.headerContent}>
            <div>
                <AiFillHome/>
                <AiOutlineRight  />
                <span>Mais Parceiros</span>
            </div>
        </header>
    )
}