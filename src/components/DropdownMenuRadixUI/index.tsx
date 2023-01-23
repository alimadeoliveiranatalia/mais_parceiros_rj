import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ImFacebook, ImTwitter, ImYoutube, ImInstagram, ImHome } from 'react-icons/im';
import { GiHamburgerMenu} from "react-icons/gi";
import { useState } from 'react';
import styles from "./styles.module.scss";
import { AiOutlineClose } from 'react-icons/ai';

export function DropdownMenuRadixUI(){
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger className={styles.toggle_button} onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.navConteiner} >
        <DropdownMenu.Item>
            <a href="#home"><ImHome className={styles.icon}/></a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="#"><ImFacebook className={styles.icon}/></a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="#"><ImTwitter className={styles.icon}/></a>
          </DropdownMenu.Item>
          <DropdownMenu.Item >
            <a href="#"><ImYoutube className={styles.icon}/></a>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <a href="#"><ImInstagram className={styles.icon}/></a>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => setIsOpen(false)}>
            <AiOutlineClose style={{'color': '#FFFF', 'margin':'8px'}} className={styles.icon}/>
          </DropdownMenu.Item>                 
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
};