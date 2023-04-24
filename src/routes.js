import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'

import NotFound from './pages/Not-Found'

import Header from './components/header';

function RoutesApp(){
    return(
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={ <Home/> }/>

            <Route path='*' element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>  
    )
}

export default RoutesApp;