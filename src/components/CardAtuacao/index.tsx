import Image from "next/image";
import { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import parceiros from "../../../public/parceiros.json";
import { ContentModal } from "../ContentModal";

import styles from "./styles.module.scss";

export function CardAtuacao({title}){
    
    return (        
        <button className={styles.card} >
            <p>{title}</p>
        </button>        
    )
}



