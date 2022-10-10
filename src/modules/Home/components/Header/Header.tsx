import React from 'react';
import {
    Box,
    Button,
    Image,
    useDisclosure
} from "@chakra-ui/react";
import Logo from '../../../../images/Logo.svg'
import './header.css'
import {ModalComponent} from "../../../common/Modal/ModalComponent";

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef(null)
    return (
        <Box className='header__container'>
            <Image src={Logo} alt='Логотип'/>
            <Button
                className='button'
                onClick={onOpen}
                ref={btnRef}
            >
                Get Started
            </Button>
            <ModalComponent onClose={onClose} isOpen={isOpen} />
        </Box>
    );
};

