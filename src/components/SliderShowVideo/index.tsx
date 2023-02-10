import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from './styles.module.css';

const linkVideo = [
    {
        src : 'https://www.youtube.com/embed/hgjfQJroR8k',
        title : '+Parceiros – Firjan – Depoimento de quem já faz parte da nossa rede | FIRJAN',
        company: 'Firjan'
    },
    {
        src : 'https://www.youtube.com/embed/Fu7FQCcXNpY',
        title: '+Parceiros – Casa Firjan – Depoimento de quem já faz parte da nossa rede | FIRJAN',
        company: 'Casa Firjan' 
    },
    {
        src: 'https://www.youtube.com/embed/Xxkk6tyHhxE',
        title: '+Parceiros – Construção – Depoimento de quem já faz parte da nossa rede | FIRJAN',
        company: 'Campanha'
    },
    {
        src: 'https://www.youtube.com/embed/MO00N2FE2LM',
        title: '+Parceiros – eSocial – Depoimento de quem já faz parte da nossa rede | FIRJAN',
        company: 'eSocial'
    },
    {
        src: 'https://www.youtube.com/embed/2w1ZvAsZpOo',
        title: '+Parceiros – Rede Oléo e Gás – Depoimento de quem já faz parte da nossa rede | FIRJAN',
        company: 'Rede De Oléo e gás'
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
        <>           
            <div className={styles.slider}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.iframe
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        aria-label='Depoimento da empresa `${linkVideo[index].company}`'
                        src={linkVideo[index].src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />                     
                </AnimatePresence>            
            </div>
            <div className={styles.contentButton}>
                <button aria-label='click para o vídeo anterior' className={styles.iconPrevButton} onClick={prevVideo}><AiOutlineLeft /></button>
                <div>
                    <span>{linkVideo[index].company}</span>
                </div>            
                <button aria-label='click para o vídeo posterior' className={styles.iconNextButton} onClick={nextVideo}><AiOutlineRight  /></button>
            </div>
        </>
    )
}