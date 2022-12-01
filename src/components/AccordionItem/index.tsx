import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import styles from './styles.module.scss';

interface params {
    item: {
        question: string,
        answer: string
    },
    index: number
}

export function AccordionItem({ item, index}: params){
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
                    key={index + 1}
                >
                    {item.answer}
                </p>
            </details>
        </div>
    )
}