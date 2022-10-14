import { motion } from 'framer-motion';
import Image from 'next/image';
import contract from '../../../public/images/contract.jpg';
import parceria from '../../../public/images/parceria.jpg';
import workshop from '../../../public/images/workshop.jpg';
import styles from './styles.module.scss';
import { useEffect, useRef, useState } from "react";

const images = [ contract, parceria, workshop ];



export function SliderShow(){
    const carousel = useRef();
    const [ widthSlider, setWidthSlider ] = useState(0);

    useEffect(() => {
        //console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
        setWidthSlider(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    },[]);

    return(
        <div className={styles.slider}>
            <motion.div
                ref={ carousel }
                className={styles.carousel}
                whileTap={{ cursor: 'grabbing'}}
            >
                <motion.div
                    className={styles.inner}
                    drag='x'
                    dragConstraints={{ right: 0, left: -widthSlider }}
                    initial={{ x:100 }}
                    animate={{ x:0 }}
                    transition={{ duration: 0.18 }}
                >
                    {images.map(image => (
                        <motion.div 
                            className={styles.item}    
                        >
                            <Image src={image} priority/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}