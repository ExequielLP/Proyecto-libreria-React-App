import React from 'react'
import { Carrousel } from '../components/Carrousel'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { useContext } from 'react'
import ProductosContext from '../contexto/ProductoContext'
import "./inicio.css"


const Inicio = () => {
  
  const {productos} = useContext(ProductosContext)
 
useEffect(() => {


  document.title="Libreria Inicio"

}, [])


  return (
   <>
   <main className="container justify-content-center ">
  {/* <!-- carrusel --> */}
<Carrousel/>

{/*<!-- cards -->  */}

<section className="container contenedorCards">

  <div  id="lista-productos" className="row  productosConClassNameclassName">
    <div className=" container d-flex justify-content-center mt-4  ">
      <h2 className="H2oferta">New OFFERT</h2>
    </div>
    
{
  productos && productos.map(producto=>(
    <Card producto={producto} key={producto.id}/>
  ))
}

    
  </div>

</section>

<section >
  <div className="container-fluid cardIndexHo  mb-0 mt-2" style={{maxwidth: '1000px'}}>
    <div className="row g-0">
      <div className="col-md-6">
        <img src='/cardTIPOfila/cardOrinizatalIdnex.webp' className="img-fluid rounded-start h-100" alt="..."/>
      </div>
      <div className="col-md-5 cardHorizonatal">
        <div className="card-body">
          <h5 className="card-title card-text1">"La lectura es para la mente lo que el ejercicio es para el cuerpo." - Joseph Addison
          </h5>
          <p className="card-text1">Únase a nosotros el 20/10/2023 en un apasionante Taller de Lectura. Explore juntos las páginas de la literatura mientras discutimos ideas, compartimos perspectivas y fomentamos el amor por la lectura. Enriquécete intelectualmente y participa en esta experiencia enriquecedora. ¡Los esperamos para explorar el mundo de las palabras!
          </p>
          <p className="card-text1"><small className="text-body-secondary">Los esperamos...</small></p>
        </div>
      </div>
    </div>
  </div>
</section>

</main>
</>
  )
}

export default Inicio