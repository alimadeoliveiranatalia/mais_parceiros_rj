import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import styles from './styles.module.scss';

export function AccordionItem({ item, index}){
    
    return (
        <div className={styles.accordionItem} key={item.question}>
            <details>
                <summary>{item.question}{ true ? <AiOutlineDown /> : <AiOutlineUp />}              
                </summary>
                <p
                    id={index + 1}
                >{item.answer}</p>
            </details>
        </div>
    )
}