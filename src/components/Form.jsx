import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const formIncial={
    id:null,
    nombre:"",
    caracteristicas:"",
    precio:"",
    foto:""
}
/*  */

export const Form = ({crearProducto,usuarioAedita,actualizarProducto,setusuarioAedita,theme}) => {
const [form, setform] = useState(formIncial)
useEffect(() => {
    usuarioAedita ? setform(usuarioAedita) : setform(formIncial)

}, [usuarioAedita])


   const handleChange=(e)=>{
setform({
    ...form,
    [e.target.name]:e.target.value,
    [e.target.caracteristicas]:e.target.value,
    [e.target.precio]:e.target.value,
    [e.target.foro]:e.target.value

})

   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    if (form.id==null) {
        crearProducto(form)
    }else{
        
        actualizarProducto(form)

    }
  handleReset()

   }
const handleReset=(e)=>{
setform(formIncial)
setusuarioAedita(null)
     
}

  return (
   
   <div className='container d-flex justify-content-center '>
       <div className='text-center'>
           <h1>{form.id ? "Editar" : "Agregar"}</h1>
           <form action="" onSubmit={handleSubmit}>
            <input type="text" name='nombre' placeholder='Nombre del producto' onChange={handleChange} value={form.nombre}/>
            <input type="text" name='caracteristicas' placeholder=' Caracteristicas'onChange={handleChange} value={form.caracteristicas}/>
            <input type="text" name='precio' placeholder='precio'onChange={handleChange} value={form.precio}/>
            <input type="text" name='foto' placeholder='foto'onChange={handleChange} value={form.foto}/>
            <br />
            <button className="btn ExeBoton1 me-1 mt-3" type='submit'>Enviar</button>
            <button  className="btn ExeBoton1 mt-3 " type='reset' onClick={handleReset}>Limpiar</button>
           </form>
       </div>
   </div>
   
  )
}
