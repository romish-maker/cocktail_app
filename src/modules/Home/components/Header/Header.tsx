import React from 'react';
import {
    Box,
    Button,
    Image,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import Logo from '../../../../images/Logo.svg'
import './header.css'

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef(null)

    // Модалка ChakraUI работает не корректно
    // Попробовать вызывать модалку в отдельной пустой странице
    // Настроить react-router-dom
    return (
        <Box className='header__container'>
            <Image src={Logo} alt='Логотип'/>
            <Button
                colorScheme='colorsAndBorderRadius.green.100'
                className='button'
                onClick={onOpen}
                ref={btnRef}
            >
                Get Started
            </Button>

            <Modal
                onClose={onClose}
                isOpen={isOpen}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                       qweqweqwe
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

