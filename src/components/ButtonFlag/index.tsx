import { AiOutlineLeft } from 'react-icons/ai';
import styles from './styles.module.scss';

export function ButtonFlag(){
    return (
        <button
            aria-label='click para o anterior'
            className={styles.iconButton}
        >
            <AiOutlineLeft />
        </button>
    )
}