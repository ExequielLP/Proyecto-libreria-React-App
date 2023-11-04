import { createContext, useEffect, useState } from "react";
import { delet, get, post, put } from "../../utils/http";

const ProductosContext=createContext();

const url=import.meta.env.VITE_ENDPOINT_PRODUCTOSAPI
const urlID=import.meta.env.VITE_ENDPOINT_PRODUCTOSIDAPI


const ProductoProvider=({children})=>{
const [productos, setproductos] = useState(null)
const [usuarioAedita, setusuarioAedita] = useState(null)

useEffect(() => {
    obtenerProductos()
}, [])


const obtenerProductos= async()=>{
    try {
        const productsBack= await get(url)
        setproductos(productsBack)
        
    } catch (error) {
        console.log(`[obtenerProductos], aca esta el ${error}`)
    }
}

/* POST, CREACOIN DE PRODUCTO */
const crearProducto=async(productoNuevo)=>{
try {
    
productoNuevo.id=Date.now()
const productoCreado=await post(url,productoNuevo)
let nuevaDB=[...productos,productoCreado]

setproductos(nuevaDB)
} catch (error) {
    console.log("error crearProducto linea 32")
}


}
/* PUT-EDICION DE PRODUCTOS */
const actualizarProducto=async(productosEditado)=>{
    const  urlCompleta=urlID+productosEditado.id
    console.log(urlCompleta)
try {
    const ProductoRespuesta=await put(urlCompleta,productosEditado)
} catch (error) {
    
}

 const nuevaDB=productos.map(producto=>(producto.id===productosEditado.id) ? productosEditado:producto )
 setproductos(nuevaDB)
}

/* DELETE */
const eleminarProductoContexto=async(productoEliminar)=>{ 
  const  urlCompleta=urlID+productoEliminar
console.log(productoEliminar)
let isDelet=window.confirm(
    `Desea Eliminar el producto?${productoEliminar}?`)
    if (isDelet) { 
        const ProductosActualizados=await delet(urlCompleta)

        let nuevaDB=productos.filter((el)=>el.id!==productoEliminar)
        setproductos(nuevaDB)
    }else{
        return
    }

}

const data={productos,crearProducto,eleminarProductoContexto,setusuarioAedita,usuarioAedita,actualizarProducto}

return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}
export {ProductoProvider}
export default ProductosContext

 