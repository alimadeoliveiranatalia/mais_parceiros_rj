import { useRef, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './styles.module.scss';

const sideBar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    close: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}

export function MenuToggle(){
    const [isOpen, toggleOpen ] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    function useDimensions(ref){
        const dimensions = useRef({with: 0, height: 0});

        useEffect(() => {
            dimensions.current.with = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        },[]);

        return dimensions.current;
    }
    return (
        <motion.div
            ref={containerRef}
            initial={false}
            animate={ isOpen ? 'open' : 'closed' }
            custom={height}
        
        >
            <button
                onClick={() => toggleOpen()}
            ><AiOutlineMenu /><AiOutlineClose/></button>
        </motion.div>
    )
}