import { useEffect, useState } from "react";
import styles from './styles.module.scss';

export function SliderShow(){
    const [ parceiros, setParceiros ] = useState([]);

    useEffect(() => {
        fetch('./parceiros.json', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        //.then(res => setParceiros(res.parceiros.area_atuacao))
        
    }, []);

    return(
        <div className={styles.slideshow}>
            
        </div>
    )
}