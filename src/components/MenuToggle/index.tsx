import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import style from './styles.module.scss';
import { VerifyDimensions } from '../../utils/verifyDimensions';

const navigation_variants = {
    open: {
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    },
    close: {
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }
}
const container_variants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerDirection: -1
        }
    }
}

const item_variants = {
    hidden: {
        opacity: 0
    },
      
    show: {
        opacity: 1,
        x: 10,
        transition: { duration: 0.5 }
    }
} 


const links = [
    {
        'aria_label':'Site FIESP',
        'href': 'http://www.fiesp.com.br/',
        'name': 'FIESP'
    },
    {
        'aria_label':'Site CIESP',
        'href': 'http://www.ciesp.com.br/',
        'name': 'CIESP'
    },
    {
        'aria_label':'Site SENAI',
        'href':'http://www.sp.senai.br/',
        'name':'SENAI'
    },
    {
        'aria_label':'Site Instituto Roberto Simonsen',
        'href':'http://www.fiesp.com.br/instituto-roberto-simonsen-irs/',
        'name':'IRS'
    },
    {
        'aria_label':'Perfil no Facebook',
        'href':'#',
        'name':'FACEBOOK'
    },
    {
        'aria_label':'Perfil na Twitter',
        'href':'#',
        'name':'TWITTER',
    },
    {
        'aria_label':'Perfil no Instagram',
        'href':'#',
        'name':'INSTAGRAM',
    },
    {
        'aria_label':'Canal no YouTube',
        'href':'#',
        'name':'YOUTUBE',
    }
]


export function MenuToggle(){
    const [openMenu, setOpenMenu] = useState(false);
    const containerRef = useRef(null);
    const { height } = VerifyDimensions(containerRef);
    
    function handleOpenMenu(){
        setOpenMenu(!openMenu);
    }

    return (
        <motion.nav
            ref={containerRef}
            className={style.menu}
            custom={height}
            variants={navigation_variants}
        >
            <button className={style.toggle_button} onClick={ handleOpenMenu }>{ openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
            { openMenu ? (
                <motion.ul
                    key='item'
                    className={style.content}
                    variants={container_variants}
                    initial='hidden'
                    animate='show'
                >
                    { links.map(item => (
                        <motion.li
                           variants={item_variants}
                        >
                            <a aria-label={item.aria_label} href={item.href} >{item.name}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            ) : null }
        </motion.nav>
    )
}