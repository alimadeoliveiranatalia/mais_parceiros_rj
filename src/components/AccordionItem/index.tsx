import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import styles from './styles.module.scss';

export function AccordionItem({
    showDescription,
    ariaExpanded,
    fontWeightBold,
    item,
    index,
    onClick
    }){
        function showDescription(){
            const div = document.querySelector('';)
            if(div)
        }
        return (
            <div className={styles.accordionItem} key={item.question}>
                <dt>
                    <button
                        onClick={ onClick }
                    >{item.question}<AiOutlineDown /><AiOutlineUp /></button>
                </dt>
                <details>
                    <p
                        id={index + 1}
                    >{item.answer}</p>
                </details>
            </div>
        )
}