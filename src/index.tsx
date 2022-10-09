import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./modules/common/theme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </Provider>
);

