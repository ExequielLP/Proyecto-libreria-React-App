import React from 'react'

export const Carrousel = () => {
  return (
    <section className="container   contenedorCarusel  mt-3 carousel-fade   ">
    {/* <!-- aca va corousel --> */}
  <div className="row justify-content-center">
    {/* <!-- CARRUSEL 1 --> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide col-4" data-bs-ride="carousel"  data-bs-interval="2300" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='src/public/imagenesCarusel/Foto1_optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen y le agregue una trnassicion copada --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU HOGAR</h5>
              <p>El confortante placer de leer en tu hogar</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/Foto2Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen  y le agregue transiscion--> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU HOGAR</h5>
              <p>El confortanto placer de leer en tu hogar</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/foto3Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen, tambien transcicion --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU HOGAR</h5>
              <p>El confortanto placer de leer en tu hogar</p>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- CARRUSEL 2 --> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide col-4" data-bs-ride="carousel"  data-bs-interval="2300" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='src/public/imagenesCarusel/CARUSEL2-1Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen y le agregue una trnassicion copada --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LIBRO FAVORITO</h5>
              <p>Disfruta de la lectura de tu ejemplar favorito</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/CARUSEL2-3Optimizadaa.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen  y le agregue transiscion--> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LIBRO FAVORITO</h5>
              <p>Disfruta de la lectura de tu ejemplar favorito</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/CARUSEL2-2Optimizadaa.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen, tambien transcicion --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LIBRO FAVORITO</h5>
              <p>Disfruta de la lectura de tu ejemplar favorito</p>
            </div>
          </div>
        </div>
      </div>
    
      <div id="carouselExampleSlidesOnly" className="carousel slide col-4" data-bs-ride="carousel"  data-bs-interval="2300" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='src/public/imagenesCarusel/carrusel3-1Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen y le agregue una trnassicion copada --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LUGAR IDEAL</h5>
              <p>Donde vos quieras
                donde vos prefieras
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/carrusel-3-2Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen  y le agregue transiscion--> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LUGAR IDEAL</h5>
              <p>Donde vos quieras
                donde vos prefieras
              </p>
            </div>
          </div>  
          <div className="carousel-item">
            <img src='src/public/imagenesCarusel/carrusel-3-3Optimizada.webp' className="d-block w-100" alt="..."/>
            {/* <!-- aca combine el carrusel automatico con el carrusel que  tiene info en la imagen, tambien transcicion --> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>TU LUGAR IDEAL</h5>
              <p>Donde vos quieras
                donde vos prefieras
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
  {/*   <!-- el otro carusel -->
    
    <!-- fin corusel --> */}
  </section>
  )
}
