import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from 'react-icons/im';

import style from './styles.module.scss';


export function MenuToggle(){
    const [openMenu, setOpenMenu] = useState(false);
    
    function handleOpenMenu(){
        setOpenMenu(!openMenu);
    }

    return (
        <div>
            <button className={style.toggleMenu} onClick={ handleOpenMenu }>{ openMenu ? <AiOutlineClose/> : <AiOutlineMenu /> }</button>
            { openMenu ? (
                <div className={style.content}>
                    <a aria-label='Site FIESP' href="http://www.fiesp.com.br/" >FIESP</a>
                    <a aria-label='Site CIESP' href="http://www.ciesp.com.br/" >CIESP</a>
                    <a aria-label='Site SENAI' href="http://www.sp.senai.br/" >SENAI</a>
                    <a aria-label='Site Instituto Roberto Simonsen' href="http://www.fiesp.com.br/instituto-roberto-simonsen-irs/" >IRS</a>
                    <a aria-label='Perfil no Facebook' href="#" ><ImFacebook />  Facebook</a>
                    <a aria-label='Perfil no Twitter' href="#" ><ImTwitter />  Twitter</a>
                    <a aria-label='Canal no Youtube' href="#" ><ImYoutube />  Youtube</a>
                    <a aria-label='Perfil no Instagram' href="#" ><ImInstagram />  Instagram</a>
                </div>
            ) : null }
        </div>
    )
}