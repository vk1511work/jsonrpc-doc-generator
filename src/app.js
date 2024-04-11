import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//Компоненты
import Header from "./Components/Header";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;