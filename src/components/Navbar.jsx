import React, { useContext } from 'react'
import Logo from  '../public/fotos/imagenLogo.webp'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { CarritoContext } from '../contexto/CarritoContexto'
import ItemCarritoInicio from './ItemCarritoInicio'
import ThemeContext from '../contexto/ModoOscuroContext'
const Navbar = () => {
/* ModoDark */
const {handleTheme}=useContext(ThemeContext)



 const {carrito,vaciarCarritoContext}=useContext(CarritoContext)
 const navigate=useNavigate()
const handleComrar=()=>{
if (carrito.length!==0) {
 navigate("/carrito")
}else{
  Swal.fire({
    title: 'Atencion!',
    html: '<strong>Debes agregar un producto</strong> ',
    imageUrl: 'https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png',
    width:300,
    imageWidth:200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    background:'#796B5F',
    confirmButtonText:'Continuar comprando'
  })
  
}

}
const HandlevaciarCarrito=()=>{
  
vaciarCarritoContext()
}

  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary RedondeoNav">
        <div className="container-fluid">
          <div className="contenedorImg">
            <img src={Logo} alt="" className="img-fluid"/></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'/QuienesSomos'}><button className="btn btn-sm btn-outline-secondary" type="button">Quienes somos?</button></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to={'/Contacto'}><button className="btn btn-sm btn-outline-secondary" type="button">Contacto</button></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"to={'/'}><button className="btn btn-sm btn-outline-secondary" type="button">Inicio</button></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"to={'/Alta'}><button className="btn btn-sm btn-outline-secondary" type="button">Alta</button></NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" ><button id="modo" className="btn btn-sm btn-outline-secondary" type="button" onClick={handleTheme}><i  className="fa-regular fa-sun"></i></button></a>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div  className="dropdown">
                    <a className="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-bag"></i>
                    </a>
                    <ul id="carrito" className="dropdown-menu mx-3">
                      <table id="lista-carrito" className="table">
                        <thead>
                          <tr>
                            <th scope="col">imagen</th>
                            <th scope="col">Formato</th>
                            <th scope="col">Precio</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          carrito && carrito.map(item =>(
                            <ItemCarritoInicio key={item.id} item={item}/>
                          ))
                        }
                        </tbody>
                      </table>
                      <div className="d-grid gap-2 d-md-block justify-content-md-center ms-1">
                        <button id="vaciar-carrito" className="btn ExeBoton1" disabled={carrito.length===0} onClick={HandlevaciarCarrito}>Vaciar Carrito</button>
                        <button id="procesar-carrito" className="btn ExeBoton1" onClick={handleComrar}  >Procesar Compra</button>
                      </div>
                    </ul>
                  </div>
                </div>
              </li>


              
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Ingrese Titulo aqui" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container estilos2doNav  ">
        <p className="Pnav">"Un libro es un amigo que nunca falla, un maestro que nunca juzga y un compañero que nunca decepciona." - Carl Sagan</p>
      </div>
    </header >



  )
}

export default Navbar