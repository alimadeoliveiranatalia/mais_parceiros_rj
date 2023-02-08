import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ContentModal } from "../ContentModal";
import style from "./styles.module.css";

type ModalProps = {
    title : string;
    src: string;
    area: number;
}

export function ModalRadixUI({title, src, area }:ModalProps){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog.Root defaultOpen open={isOpen} onOpenChange={setIsOpen} modal>
            <Dialog.Trigger className={style.card} onClick={() => setIsOpen(true)}>
                <Image src={src} alt='image' width={40} height={40}/>
                <p>{title}</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={style.modalStyle}>
                    <Dialog.Content className={style.renderContent}>                    
                        <div className={style.container}>
                            <div className={style.headermodal}>
                                <span>{title}</span>
                                <Dialog.Close onClick={() => setIsOpen(false)}>
                                    <AiFillCloseCircle className={style.iconClose} />
                                </Dialog.Close>
                            </div>
                        </div>                    
                        <ContentModal key={area} area={area}/>                        
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}