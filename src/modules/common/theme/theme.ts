import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    fontSizes: {
        sm: '16px',
        ml: '22px',
        md: '32px',
        xxl: '100px',
    },
    lineHeights: {
        sm: '18px',
        md: '37px',
        xxl: '129px',
    },
    colors: {
        white: {
            100: '#E0E0E0',
            200: '#FFFFFF',
            300: '#CDD6CF'
        },
        black: {
            100: '#000000'
        },
        green: {
            100: '#4CAF50',
            200: '#1B5E20',
        },
        gray: {
            100: '#CDD6CF'
        }
    },
    fonts: {
        body: 'Rochester, cursive',
        heading: 'Asap, sans-serif',
    },
    config: {
        cssVarPrefix: 'romish',
    },
    components: {}
})