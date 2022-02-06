import React from 'react';
import Container from "./components/layouts/Container";
import SideBar from "./components/Navs/SideBar";
import {Provider} from "react-redux";
import {store} from "./redux/config/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import MoviePlayer from "./pages/MoviePlayer";


function App() {
    return (<Provider store={store}>
            <Container className={"container__flex__row"}>
                <SideBar/>

                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/watch/:name'} element={<MoviePlayer/>}/>
                    </Routes>
                </BrowserRouter>


            </Container>
        </Provider>
    );
}

export default App;
