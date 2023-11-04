import React from 'react'

export const TableRow = ({productos,eleminarProductoContexto,setusuarioAedita}) => {
  return (
    <tr >
    <td className='align-middle'>{productos.id}</td>
    <td className='align-middle'>{productos.precio}</td>
    <td className='align-middle'>{productos.nombre}</td>
    <td>
    <button className='btn ExeBoton1 m-2' onClick={()=>setusuarioAedita(productos)}>Modificar</button>
    <button className='btn ExeBoton1' onClick={()=>eleminarProductoContexto(productos.id)}>Eliminar</button>
    </td>
   
    
</tr>
  )
}
