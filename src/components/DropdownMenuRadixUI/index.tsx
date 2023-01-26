import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram, ImHome } from 'react-icons/im';
import { GiHamburgerMenu} from "react-icons/gi";
import { useState } from 'react';
import styles from "./styles.module.scss";
import { AiOutlineClose } from 'react-icons/ai';

export function DropdownMenuRadixUI(){
  
  return (
    <div className={styles.toggle_button}>
      <a href="#home" className={styles.link}>
        <ImHome className={styles.icon}/>
      </a>
    </div>
  )
};