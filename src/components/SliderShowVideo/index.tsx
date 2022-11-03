import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from './styles.module.scss';

const linkVideo = [
    {
        src : 'https://www.youtube.com/embed/wDflrSMTf_Q',
        title : '+Parceiros – Top Solid – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'Top Solid'
    },
    {
        src : 'https://www.youtube.com/embed/3DbnSUSTYXw',
        title: '+Parceiros – Cisco – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'Cisco' 
    }
];

export function SliderShowVideo(){
    const slider = useRef(null);
    const [move, setMove] = useState(false);

    let passSlider = slider.current;

    function nextSlide(){
        let width = passSlider.clientWidth;
        passSlider.scrollLeft = passSlider.scrollLeft + width;
        console.log(width);
    }

    function prevSlide(){
        let width = passSlider.clientWidth;
        passSlider.scrollLeft = passSlider.scrollLeft - width;
        console.log(width);
    }

    return (          
        <div className={styles.slider_video}>           
            <motion.div
                ref={ slider }
                className={styles.slider}
                whileTap={{ cursor: 'grabbing' }}
            >  
            { linkVideo.map(item => (
                <motion.div key={item.src}>
                    <motion.iframe                        
                        src={item.src}
                        title={item.title}
                        initial={{x:100}}
                        animate={{x:move ?100:-100, opacity: 3}}
                        transition={{type:'spring', duration:5}}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </motion.iframe>
                    <span>{item.company}</span>
                </motion.div>
            ))}                
            </motion.div>
            <AiOutlineLeft className={styles.icon} onClick={prevSlide}/>            
            <AiOutlineRight className={styles.icon} onClick={() => {console.log(move);setMove(!move)}}/>
        </div>
    )
}