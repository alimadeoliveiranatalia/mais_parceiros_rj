import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Modal } from "../Modal";
import { ContentModal } from "../ContentModal";

export function CardAtuacao({title, src}){
    const [isOpen, setIsOpen] = useState(false);
    return (        
        <>
            <div className={styles.container}>
                <button className={styles.card} onClick={() => setIsOpen(true)} >
                    <Image src={src} alt='image' width={40} height={40} onClick={() => setIsOpen(false)}/>
                    <p>{title}</p>
                </button>
            </div>
            { isOpen && 
                <Modal setIsOpen={setIsOpen} >
                    <ContentModal area={'Agronegócio'} empresa={'Samsung'} escola={'Senai - Anchieta'} />
                </Modal>
            }
        </>        
    )
}



