import React, { useContext, useEffect } from 'react'
import foto1 from '../public/fotos/willyPhotoshop.webp'
import foto2 from '../public/fotos/jimmy-wales-photoshopI.webp'
import "./QuienesSomos.css"

const QuinesSomos = () => {
  
  useEffect(() => {
    document.title="Libreria Quienes Somos?"
  
      }, [])
  
  return (
<>
<main className="container mt-5 nosotros">
<div className="row">
    <div className="col-7 ">
    <h1 className="biblio text-body-secondary">Datos curisos sobre <em>Nosotros</em></h1>
    <p className="biblio text-body-secondary">¡Bienvenido a la maravillosa historia de la librería online <em>"<em>LibroVerse</em>"</em>! Esta es una plataforma mágica que permite a los amantes de los libros explorar y descubrir una extensa colección de obras literarias de todos los géneros. <br/>

        Hace algunos años, en el año 2010, un joven emprendedor llamado <em>Jimmy Wales</em> se encontraba sumergido en la lectura de su libro favorito en un parque cercano a su casa. A medida que avanzaba en las páginas, se dio cuenta de lo difícil que era conseguir títulos que realmente le interesaran en las librerías locales. <br/>
        
        La idea de crear una solución digital que permitiera a los lectores acceder a un sinfín de libros y autores comenzó a rondar en la mente de Alex. Estaba convencido de que un servicio en línea, en el que las personas pudieran explorar libros de todo el mundo sin restricciones geográficas, sería un sueño hecho realidad para los amantes de la lectura. <br/>
        
        Con su pasión y entusiasmo, Alex se dedicó a dar forma a su visión. Se rodeó de un equipo de desarrolladores y expertos en tecnología para llevar a cabo la creación de esta revolucionaria librería online. Trabajaron incansablemente, superando obstáculos y desafíos, para hacer realidad el proyecto. <br/>
        
        Finalmente, en el año 2012, <em>LibroVerse</em> se lanzó oficialmente al mundo. La plataforma ofrecía una interfaz intuitiva y atractiva que permitía a los usuarios buscar, comprar y leer libros electrónicos de manera sencilla. Además, la librería en línea también ofrecía versiones físicas de los libros, permitiendo a los usuarios recibir sus ejemplares en la comodidad de sus hogares. <br/>
        
        En poco tiempo, <em>LibroVerse</em> se convirtió en un éxito rotundo. Lectores de todas partes del mundo se unieron a la plataforma para descubrir nuevas historias, sumergirse en mundos ficticios y aprender de autores destacados. La librería online se destacó por su amplia selección de títulos, su servicio al cliente excepcional y su dedicación a la promoción de autores independientes. <br/>
        
        Con el tiempo, <em>LibroVerse</em> expandió su alcance al ofrecer servicios de suscripción, recomendaciones personalizadas y una comunidad activa de lectores que podían compartir sus opiniones y reseñas sobre los libros que habían leído. <br/>
        
        El fundador, <em>Jimmy Wales</em>, se convirtió en una inspiración para otros emprendedores y amantes de la lectura. Su visión y pasión por los libros y la tecnología cambiaron la forma en que las personas accedían y disfrutaban de la lectura en todo el mundo. <br/>
        
        Hasta el día de hoy, <em>LibroVerse</em> continúa siendo una de las librerías online más grandes y populares del mundo, y su legado perdura en la forma en que millones de lectores disfrutan de la magia de los libros en la era digital.</p> <br/> 
        <div className="biblio-nosotros ">
          <ul>
              <li ><a href="https://www.facebook.com/jimmywales" target="_blank" className="scaleicon"><i  className="fa-brands fa-facebook-f fa-2x fb" ></i></a></li>
              <li ><a href="https://twitter.com/jimmy_wales" target="_blank" className="scaleicon"><i className="fa-solid fa-hashtag fa-2x tw"  ></i></a></li>
              <li ><a href="https://www.instagram.com/wales9580/" target="_blank" className="scaleicon"><i className="fa-brands fa-instagram fa-2x inst" ></i></a></li>
              <li ><a href="mailto:jimmy@gmail.com" target="_blank" className="scaleicon"><i className="fa-regular fa-envelope fa-2x mail" ></i></a></li>
              <li><a href="https://www.youtube.com/watch?v=ztVWGBWqUh0" target="_blank" className="scaleicon" ><i className="fa-brands fa-youtube fa-2x yt"></i></a></li>
          </ul>
      </div>
    </div>
      {/* <!-- col 5 --> */}
    <div className="col-5 ">
    <img className="img-thumbnail mt-5 " src={foto1} alt=""/>
    <img className="img-thumbnail mt-5 mb-5" src={foto2} alt=""/>
    <h2 className="mt-5  pbiblio text-body-secondary " >Para mas informacion sobre la vida de Jimmy Wales , por favor hacer click aqui  para ir a la bibliografia <a href=""><i className="bi bi-pencil-square"></i></a></h2>

    </div>

    </div>

</main>


</>
  )
}

export default QuinesSomos