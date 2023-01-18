﻿import * as Dialog from "@radix-ui/react-dialog";

export function ModalRadixUI(){
    return (
        <Dialog.Root>
            <Dialog.Trigger/>
            <Dialog.Portal>
                <Dialog.Overlay/>
                <Dialog.Content>
                    <Dialog.Title/>
                    <Dialog.Description />
                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}