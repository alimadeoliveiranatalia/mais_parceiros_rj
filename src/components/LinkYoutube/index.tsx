import styles from './styles.module.scss';

export function LinkYoutube() {
    
    return (
        <>  
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