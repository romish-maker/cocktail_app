import React, {FC} from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

export type ModalComponentPropsType = {
    onClose: () => void;
    isOpen: boolean;
}
export const ModalComponent: FC<ModalComponentPropsType> = ({onClose, isOpen}) => {
    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore magni maiores minima non, officia quaerat qui quibusdam repellat tenetur!</div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

