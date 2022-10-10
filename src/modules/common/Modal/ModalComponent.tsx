import React, {ChangeEvent, FC} from 'react';
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalCloseButton,
    Input,
    Text, InputGroup, InputRightElement, Button,
} from "@chakra-ui/react";
import './modal.css'
import {Link} from "react-router-dom";

export type ModalComponentPropsType = {
    onClose: () => void;
    isOpen: boolean;
}
export const ModalComponent: FC<ModalComponentPropsType> = ({onClose, isOpen}) => {
    const [value, setValue] = React.useState('')
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    return (
        <>
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                motionPreset='slideInBottom'
            >
                <ModalOverlay/>
                <ModalContent h={700}>
                    <ModalHeader className='modal__header'>Authentication</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody className='modal__body'>
                        <h2 className='modal__body-title'>Sign In</h2>

                        <div className='modal__body-form'>
                            <div className="modal__body_item-form">
                                <Text mb='8px'>Username</Text>
                                <Input
                                    value={value}
                                    onChange={handleChange}
                                    placeholder='username'
                                    size='sm'
                                />
                            </div>
                            <div className="modal__body_item-form">
                                <Text mb='8px'>Password</Text>
                                <Input
                                    type={'password'}
                                    placeholder='Enter password'
                                    fontSize='var(--romish-fontSizes-sm)'
                                    size='sm'
                                />
                            </div>
                            <h4 className='modal__body-account'>
                                Don't have an account?
                                {" "}
                                 <Link to='/' className='modal__body-account-sign'>
                                    Sign up
                                </Link>
                            </h4>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
