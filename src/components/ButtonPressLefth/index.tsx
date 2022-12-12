import { AiOutlineLeft } from "react-icons/ai";
import "./styles.module.scss";

interface ButtonLefthProps {
    theme?:'primary' | 'secondary';

    backgroundColor: string;

    prevSlide?: () => void;
}

export function ButtonPressLefth({ 
    prevSlide,
    theme,
    backgroundColor
   }: ButtonLefthProps){
    return (
        <button
            type='button'
            aria-label='click para o anterior'
            onClick={prevSlide}
            className={`iconButton storybook-iconButton--${theme}`}
            style={{ backgroundColor}}
        >
            <AiOutlineLeft />
        </button>
    )
}