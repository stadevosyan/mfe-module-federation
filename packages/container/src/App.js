import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})
export default () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    </StylesProvider>
}