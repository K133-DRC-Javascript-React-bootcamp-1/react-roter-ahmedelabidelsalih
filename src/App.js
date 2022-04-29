import React from 'react'
import { BrowserRouter  , Route , Routes } from 'react-router-dom';

import './App.css';
import About from './Component/About';
import Bootcamp from './Component/Bootcamp';
import Bootcampb from './Component/Bootcampb';
import Bootcampf from './Component/Bootcampf';
import Error from './Component/Error';
import Home from './Component/Home';
import Nav from './Component/Nav';

const  App=()=> {
  return (
    <BrowserRouter>
    <div className='App'>
    <Nav />
    <Routes>
     <Route  path="/Home" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Bootcamp" element={<Bootcamp />}>
     <Route path="Bootcampb" element={<Bootcampb />} />
     <Route path="Bootcampf" element={<Bootcampf />} />
     </Route>
     <Route path="*" element={<Error />} />
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
