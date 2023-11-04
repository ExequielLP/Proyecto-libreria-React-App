import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import * as bootstrao from 'bootstrap'
import Inicio from './pages/Inicio'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import QuinesSomos from './pages/QuinesSomos'
import Whatsapp from './components/Whatsapp'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import { ProductoProvider } from './contexto/ProductoContext'
import { Alta } from './pages/Alta'
import { CarritoProvider } from './contexto/CarritoContexto'
import { ThemeProvider } from './contexto/ModoOscuroContext'
ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider>
<ProductoProvider>
<CarritoProvider>
<BrowserRouter>
<Navbar/>
<Routes>
  
  <Route path='/' element={<Inicio/>}/>
  <Route path='/Contacto' element={<Contacto/>}/>
  <Route  path='/Carrito' element={<Carrito/>}/>
  <Route path='/QuienesSomos' element={<QuinesSomos/>}/>
  <Route path='/Alta' element={<Alta/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>
<Whatsapp/>
<Footer/>

</BrowserRouter>
</CarritoProvider>
</ProductoProvider>
</ThemeProvider>
)
