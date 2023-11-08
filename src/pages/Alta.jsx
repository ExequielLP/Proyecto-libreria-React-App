
import { useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Table } from '../components/Table'
import ProductosContext from '../contexto/ProductoContext'
import ThemeContext from '../contexto/ModoOscuroContext'
import "./Alta.css"


export const Alta = () => {
const{theme}=useContext(ThemeContext)
 const{productos,crearProducto,eleminarProductoContexto,setusuarioAedita,usuarioAedita,actualizarProducto}=useContext(ProductosContext)
console.log(productos)

    useEffect(() => {
    document.title="Biblioteca alta"
    }, [])
    
  return (
    <>
    
     <div className='container justify-content-center'>
       <Form crearProducto={crearProducto} usuarioAedita={usuarioAedita}actualizarProducto={actualizarProducto} setusuarioAedita={setusuarioAedita} /> 
           <hr />
           
           <hr />
          <Table productos={productos}theme={theme} eleminarProductoContexto={eleminarProductoContexto} setusuarioAedita={setusuarioAedita}/>
     </div>
    </>
  )
}
