import { useEffect, useState } from 'react';
import { ImHome } from 'react-icons/im';
import styles from "./styles.module.css";

export function ButtonForHome(){
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll(){
      if(window.scrollY > 300){
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    function handleTouchMove(event){
      if(window.scrollY > 50){
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    }
  }, []);
  
  return (
    <>
      { showButton && (
        <div className={styles.toggle_button}>
          <a href="#home" aria-label="Ir para o início" className={styles.link}>
            <ImHome className={styles.icon}/>
          </a>
        </div>
        )
      }
    </>
  )
};