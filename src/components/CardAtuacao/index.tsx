import { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { ContentModal } from "../ContentModal";

import styles from "./styles.module.scss";

export function CardAtuacao({title}){
    const [ dropDown, setDropDown ] = useState(false);
    
    function showDropDown(){
        setDropDown(true);
    }

    function closeModal(){
        setDropDown(false);
    }
    
    return (
        <>
            <button className={styles.card} onClick={showDropDown}>
                <RiPlantFill className={styles.icon}/>
                <p>{title}</p>
            </button>
            <ContentModal props={{'display' : 'none'}} empresa={}/>
        </>
    )
}



