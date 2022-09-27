import { useState } from "react";
import { AccordionItem } from "../AccordionItem";

import styles from "./styles.module.scss";

export function Accordion({ questionsAnswers }){
    const [ activeIndex, setActiveIndex ] = useState(1);

    const renderedQuestionsAnswers = questionsAnswers.map((item: number,  index: number) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
        const ariaExpanded = index === activeIndex ? true : false;
        return(
            <AccordionItem 
                key={index}
                showDescription={showDescription}
                fontWeightBold={fontWeightBold}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={ () => { setActiveIndex(index)}}
            />
        )
    });
    return (
        <div className={styles.accordion}>
            <dl>{renderedQuestionsAnswers}</dl>
        </div>
    )
}