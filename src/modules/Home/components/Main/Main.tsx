import {Box, Image} from "@chakra-ui/react";
import './main.css';
import image from '../../../../images/coctail1.svg'
import React from "react";

enum title {
    mainTitle = 'Cocktail App',
    text = 'Everybody Should Believe In',
    text2 = 'Something',
    text3 = 'I Believe I’ll Have Another Drink.',
    blurText = 'I’m on a whisky diet. I’ve lost',
    blurText2 = 'three days already.” — Tommy',
    blurText3 = 'Cooper',
}
export const Main = () => {
    return (
        <Box className='main__wrapper'>
            <h1 className='main__title'>{title.mainTitle}</h1>
            <Box className='main__wrapper-container'>
                <Box className='main_wrapper-container_box'>
                    <h2 className='main__text'>
                        <div>{title.text}</div>
                        <div className='main__text-center'>{title.text2}</div>
                        <div>{title.text3}</div>
                    </h2>
                    <h2 className='main__text-blur'>
                        <div>{title.blurText}</div>
                        <div>{title.blurText2}</div>
                        <div className='main__text-center'>{title.blurText3}</div>
                    </h2>
                </Box>
                <Image src={image} alt='Коктейль' />
            </Box>
        </Box>
    )
}