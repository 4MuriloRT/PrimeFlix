import { BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/Header/index.js";

import Home from "./pages/Home/index.js";
import Filme from "./pages/Filme/index.js";

import Erro from "./pages/Erro/index.js";
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/>

                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;