﻿import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const slideVideos = [
    'https://www.youtube.com/embed/wDflrSMTf_Q',
    'https://youtu.be/mzQZMOPcasQ',
    'https://youtu.be/3DbnSUSTYXw'
];

export function LinkYoutube() {
    const [ video, setVideo ] = useState([]);

    useEffect(() => {
        fetch('./parceiros.json', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json())
        .then(res => console.log(res.parceiros.area_atuacao))
        //.then(res => setVideo(res.parceiros.area_atuacao))
        
    }, []);
    return (
        <>  <p>{video}</p>
            <div>
                
                <iframe 
                    className={styles.video}
                    src="https://www.youtube.com/embed/wDflrSMTf_Q"
                    title="+Parceiros – Cisco – Depoimento de quem já faz parte da nossa rede | Senai São Paulo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
                <br /> 
                <iframe 
                    className={styles.video}
                    src="https://www.youtube.com/embed/3DbnSUSTYXw"
                    title="+Parceiros – Cisco – Depoimento de quem já faz parte da nossa rede | Senai São Paulo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>                
            </div>
        </>
    )
}