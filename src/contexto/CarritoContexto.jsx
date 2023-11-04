import { createContext, useState } from "react";

import { useLocalStrorage } from "../hooks/useLocalStrorage";
import { useEffect } from "react";
import { post } from "../../utils/http";

  const CarritoContext=createContext();

const url=import.meta.env.VITE_ENDPOINT_CARRITOAPI

 const CarritoProvider=({children})=>{
 const [agregarAlCarrito,eliminarDelCarrito,vaciarCarrito,guardarCarrito, carrito]= useLocalStrorage("carrito",[])


function elProductoEstaEnElCarrito(producto){
    return carrito.filter(prod=>prod.id===producto.id).length
}
function obtenerProductoDeCarrito(producto){

    return carrito.find(prod=>prod.id===producto.id)
}





    /* estado */
    const agregarCarritoContext=(producto)=>{
        if (!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad=1
            agregarAlCarrito(producto)
        }else{
            const productoDeCarrito=obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
            
        }

    }
    const cambiarCantidadCarritoContext=(productoNuevaCantidad)=>{
        try {
           const nuevoCarrito= carrito.map(producto => producto.id===productoNuevaCantidad.id ? productoNuevaCantidad :producto)
           guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.log("CambiarCantidadCarritoContext errorr")
        }
    }
    const eleminarProductoCarritoContext=(id)=>{
eliminarDelCarrito(id)
    }

    const guardarCarritoContext=async ()=>{
        console.log("se esta procesadndo")
        try {
            const carritoGuardado=await post(url,carrito)
            console.log(carritoGuardado)
        } catch (error) {
            console.error("guardarCarritoContext")
        }

    }

    const vaciarCarritoContext=()=>{
        
        vaciarCarrito()
    }


    const cantidadArticulosCarritoContext=()=>{
let sumaTotal=carrito.reduce((total,producto)=>{
    return total+producto.cantidad
},0)
return sumaTotal
    }
    const precioTotalArticulosCarritoSinIVA=()=>{
        let sumaTotal=carrito.reduce((total,producto)=>{
            return total+ (producto.precio*producto.cantidad)
        },0)
        return sumaTotal
    }


const precioTotalArticulosCarrito=()=>{
    let sumaTotal=carrito.reduce((total,producto)=>{
        return total+ (producto.precio*producto.cantidad)+((producto.precio*producto.cantidad)*0.21)
    },0)
    return sumaTotal
}

const productoSinIva=()=>{
    let sumaTotal=carrito.reduce((total,producto)=>{
        return total+ (producto.precio*producto.cantidad)
    },0)
    return sumaTotal*0.21

}




    const data={carrito,agregarCarritoContext,eleminarProductoCarritoContext,guardarCarritoContext,vaciarCarritoContext,cantidadArticulosCarritoContext,cambiarCantidadCarritoContext,precioTotalArticulosCarrito,guardarCarritoContext,productoSinIva,precioTotalArticulosCarritoSinIVA}
    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>

}
export { CarritoProvider, CarritoContext };