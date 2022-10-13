import Image from 'next/image';
import contract from '../../../public/images/contract.jpg';
import parceria from '../../../public/images/parceria.jpg';
import workshop from '../../../public/images/workshop.jpg';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from "react";

const colors = [ '#0088FE', '00C49F', '#FFBB28' ];
const delay = 2500;

export function SliderShow(){
    const [ index, setIndex ] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout(){
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setIndex((prevIndex) => 
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
            delay
        );
        return resetTimeout();
        
    }, [index]);

    return(
        <div className={styles.slideshow}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index*100}%, 0, 0)`}}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className={styles.slide}
                        key={index}
                        style={{ backgroundColor }}
                    ></div>
                ))}
            </div>
            <div className={styles.slideshowDots}>
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${ index === idx ? 'active': ''}`}
                        onClick={() => { setIndex(idx); }}
                    >
                    </div>
                ))}
            </div>
           
        </div>
    )
}