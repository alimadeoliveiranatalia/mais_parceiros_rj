import { ImHome } from 'react-icons/im';
import styles from "./styles.module.scss";

export function ButtonForHome(){
  
  return (
    <div className={styles.toggle_button}>
      <a href="#home" className={styles.link}>
        <ImHome className={styles.icon}/>
      </a>
    </div>
  )
};