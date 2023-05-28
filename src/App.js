import React, { useState } from 'react';
import Index from './component/index';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Register from './component/register';
import Login from './component/login';
import { Route, Routes } from 'react-router-dom';
import Incidencia from './component/f-incidencia';
import Fauto from './component/f-auto'

function App() {

  const [ user, setUser ] = useState({
    nombre: '',
    telefono: '',
    email: '',
    licencia: '',
    genero: '',
    edad: '',
 })

 const [ auto, setAuto ] = useState({
  tvehiculo: '',
  marca: '',
  modelo: '',
  placas: '',
  valor: '',
  deducible: '',
  iduser: '',
})



 
  return (
    <div>
      <Navbar/>
        <Routes>
              <Route path='/' element={  <Index />  } />
              <Route path='/sign-in' element={ <Register user={user} setUser={setUser}/> } />
              <Route path='/log-in' element={ <Login user={user} setUser={setUser}/> } />
              <Route path='/f-auto' element={ <Fauto auto={auto} setAuto={setAuto}/>} />
              <Route path='/f-incidente' element={ <Incidencia/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
