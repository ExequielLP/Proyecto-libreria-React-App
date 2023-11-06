import React, { useContext } from 'react'
import { CarritoContext } from '../contexto/CarritoContexto'



export const Card = ({producto}) => {
  
const{agregarCarritoContext}=useContext(CarritoContext)


    const handleComprar=(producto)=>{
        
console.log(producto)
agregarCarritoContext(producto)
    }
  return (
    <div className="card  col-3  p-1 mb-0 mt-1  BackGrupdCards " >
    <img src={`./src/public/fotos/${producto.foto}`} className="card-img-top" alt="..."/>
    <div className="card-body   CardBodyExe ">
      <h5 className="card-title CardStyle">Titulo: {producto.nombre}</h5>
      {/* <!-- Lista con caracteristicas  de la card --> */}
      <ul className="list-group mb-3">
        <li className="list-group-item list-group-item-primary CardStyle">{producto.caracteristicas}
                  </li>
      </ul>
      <li style={{ listStyleType: 'none' }} className="text-center CarritoFont"><i className="bi bi-cash-coin">{producto.precio}</i></li>
      <button className="btn btn-outline-secondary  ExeBoton  " onClick={()=>handleComprar(producto)} >Comprar</button>
    </div>
  </div>
  )
}
