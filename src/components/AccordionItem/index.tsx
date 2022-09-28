import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import styles from './styles.module.scss';

export function AccordionItem({ item, index}){
    const [ open, setOpen ] = useState(false);
    const onToggle = () => {
        setOpen(!open);
    }
    return (
        <div className={styles.accordionItem} key={item.question}>
            <details>
                <summary onClick={onToggle}>{item.question}{ open ? <AiOutlineUp /> : <AiOutlineDown />}              
                </summary>
                <p
                    id={index + 1}
                >{item.answer}</p>
            </details>
        </div>
    )
}