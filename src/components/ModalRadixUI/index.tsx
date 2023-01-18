import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { ContentModal } from "../ContentModal";
import style from "./styles.module.scss";


export function ModalRadixUI({title, src}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog.Root defaultOpen open={isOpen} onOpenChange={setIsOpen} modal>
            <Dialog.Trigger>
                <button className={style.card} onClick={() => setIsOpen(true)}>
                    <Image src={src} alt='image' width={40} height={40}/>
                    <p>{title}</p>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={style.modalStyle}>
                    <Dialog.Content className={style.renderContent}>
                        <ContentModal area={title} empresa={'Nokia'} escola={'Senai - Instituto Anchieta'}/>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    )
}