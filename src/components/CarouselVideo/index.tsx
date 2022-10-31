import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from './styles.module.scss';

const linkVideo = [
    {
        src : 'https://www.youtube.com/embed/wDflrSMTf_Q',
        title : '+Parceiros – Cisco – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'Cisco'
    },
    {
        src : 'https://www.youtube.com/embed/3DbnSUSTYXw',
        title: '+Parceiros – Cisco – Depoimento de quem já faz parte da nossa rede | Senai São Paulo',
        company: 'BMW-Automotiva' 
    }
];


export function CarouselVideo(){
    
    return (          
        <div className={styles.carrosel_video}>
            <div className={styles.slider}>  
            { linkVideo.map(item => (
                <>
                    <iframe
                        
                        key={item.src}
                        src={item.src}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                    <br />
                    <span>{item.company}</span>
                </>
            ))}                
        </div>
            <AiOutlineLeft className={styles.icon}/>
            <AiOutlineRight className={styles.icon}/>
        </div>
    )
}