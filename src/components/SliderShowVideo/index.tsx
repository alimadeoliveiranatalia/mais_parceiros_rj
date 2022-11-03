import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    },
    {
        src: 'https://youtu.be/mzQZMOPcasQ',
        title: '+Parceiros – Nokia – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'Nokia'
    },
    {
        src: 'https://youtu.be/yy7_1qXX3j8',
        title: '+Parceiros – BMW – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'BMW Automotiva'
    },
    {
        src: 'https://youtu.be/7NlotjXvcIE',
        title: '+Parceiros – Triumph – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'Triumph'
    }
];

const variants = {
    initial: (direction: number) => {
        return { x: direction > 0 ? 1000 : -1000, opacity: 0 }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            x : { type: 'spring', stiffness: 300, damping: 30 }, 
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => {
        return { 
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: {
                x : { type: 'spring', stiffness: 300, damping: 30},
                opacity: { duration: 0.2 }
            } 
        }
    }
}

export function SliderShowVideo(){
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    function nextVideo(){
        setDirection(1);
        if(index === linkVideo.length -1){
            setIndex(0);
            return
        }
        setIndex(index +1);
    }

    function prevVideo(){
        setDirection(-1);
        if(index === 0){
            setIndex(linkVideo.length -1);
            return
        }
        setIndex(index-1);
    }
    return (          
        <div className={styles.slider_video}>           
            <div
                className={styles.slider}
            >
                <AnimatePresence initial={false} custom={direction}>
                    <motion.iframe
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        src={linkVideo[index].src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <span>{linkVideo[index].company}</span> 
                </AnimatePresence>            
            </div>
            <button onClick={prevVideo}><AiOutlineLeft className={styles.icon}/></button>            
            <button onClick={nextVideo}><AiOutlineRight className={styles.icon} /></button>
        </div>
    )
}