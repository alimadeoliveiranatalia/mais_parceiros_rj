import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import style from './styles.module.scss';


export function MenuToggle(){
    const [openMenu, setOpenMenu] = useState(false);
    
    function handleOpenMenu(){
        setOpenMenu(!openMenu);
    }

    return (
        <div className={style.menu}>
            <button className={style.toggle_button} onClick={ handleOpenMenu }>{ openMenu ? <AiOutlineClose/> : <AiOutlineMenu /> }</button>
            { openMenu ? (
                <div className={style.content}>
                    <a aria-label='Site FIESP' href="http://www.fiesp.com.br/" >FIESP</a>
                    <a aria-label='Site CIESP' href="http://www.ciesp.com.br/" >CIESP</a>
                    <a aria-label='Site SENAI' href="http://www.sp.senai.br/" >SENAI</a>
                    <a aria-label='Site Instituto Roberto Simonsen' href="http://www.fiesp.com.br/instituto-roberto-simonsen-irs/" >IRS</a>
                    <a aria-label='Perfil no Facebook' href="#" >FACEBOOK</a>
                    <a aria-label='Perfil no Twitter' href="#" >TWITTER</a>
                    <a aria-label='Canal no Youtube' href="#" >YOUTUBE</a>
                    <a aria-label='Perfil no Instagram' href="#" >INSTAGRAM</a>
                </div>
            ) : null }
        </div>
    )
}