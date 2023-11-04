import React, { useContext } from 'react'
import "./ItemCarritoInicio.css"
import { CarritoContext } from '../contexto/CarritoContexto'
 const ItemCarritoInicio = ({item}) => {
    const{eleminarProductoCarritoContext}=useContext(CarritoContext)
const handleEliminar=(id)=>{
    eleminarProductoCarritoContext(id)
}

  return (
    <tr>
        <td>
  <img src={`/src/public/fotos/${item.foto}`} alt={item.descripcion} width="100"/>
</td>
<td>Fisico</td>
<td>${item.precio}</td>
<td>
  <button  className=" fas fa-times-circle btb-borrar" data-id="${infoProducto.id}" onClick={()=>handleEliminar(item.id)}></button>
</td>
    </tr>
  )
}
export default ItemCarritoInicio
