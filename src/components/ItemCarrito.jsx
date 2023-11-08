import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { CarritoContext } from '../contexto/CarritoContexto'

export const ItemCarrito = ({itemProducto}) => {

const {cambiarCantidadCarritoContext,eleminarProductoCarritoContext}=useContext(CarritoContext)

let precioCantidad=itemProducto.precio*itemProducto.cantidad

const [total, setTotal] = useState(precioCantidad)  
  const [cantidadInput,handleChange]=useForm({
    cantidad:itemProducto.cantidad
  })


useEffect(() => {
  let totalReCalculado=Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
  setTotal(totalReCalculado)
  itemProducto.cantidad=cantidadInput.cantidad
  cambiarCantidadCarritoContext(itemProducto)

}, [cantidadInput.cantidad])



  return (
    <div className="row py-3 mb-3">
      <div className="col-4 mb-1">
        
        <div className="bg-image rounded"><img className="w-100 borderImg" src={`/fotos/${itemProducto.foto}`} alt={itemProducto.caracteristicas}/></div>
        </div>
    {
     
    }
        <div className="col-5">
        <div className="container" >
            <p className="CarritoFontP text-body-secondary">{itemProducto.caracteristicas}"
            </p>
    
        </div>
        <ul> 
            <li className="CarritoFont text-body-secondary"><i className="bi bi-book"> Colores:Todos los colores</i></li>
            <li className="CarritoFont text-body-secondary"><i className="bi bi-journal-bookmark">${itemProducto.tipoLibro} </i></li>
            <li className="CarritoFont text-body-secondary"><i className="bi bi-cash-coin">$${itemProducto.precio}</i></li>
            
        </ul>
        <button type="button" className="btn-danger fa-solid fa-trash  me-1 mb-2 mx-3 borrar-producto-compra "  style={{ color: '#931528' }} onClick={()=>eleminarProductoCarritoContext(itemProducto.id)}></button>
        <a type="button" className="btn-secondary  fa-solid fa-credit-card me-1 mb-2 mx-2 " style={{color: "#796B5F"}}></a>
        </div>
        {/*  */}
        <div className="col-3">
        <input
          type="number"
          min="1"
          className="form-control text-center cantidad"
          placeholder="Cantantidad"
          name='cantidad'
          value={cantidadInput.cantidad}
          onChange={handleChange} />
        <p className="text-center  CarritoFont"><strong className="precio text-body-secondary">${total}</strong>
        </p>
        <div className="d-flex justify-content-end LugarDiv ">
        <a type="button" href="https://www.elresumen.com/" target="_blank" className="btn ExeBoton2">Resumen</a>
        </div>
    </div>

    <hr/>
    </div>
  )
}
