import React from 'react'


import foto1 from '../assets/criptomonedas/bitcionOptimazado.webp'
import foto2 from '../assets/criptomonedas/dogeOptimizada.webp'
import foto3 from '../assets/criptomonedas/etherOptimizado.webp'
import foto4 from '../assets/criptomonedas/rippleOptimizada.webp'
import "./Footer.css"
const Footer = () => {
    return (
       <>
       <footer>
       <div className="container-fluid footerContacto pt-5 pb-4">
    
    <div className="row">
      
      <p className="d-flex justify-content-center colorfooter">Si te suscribes a nuestros mails, podras obtener benecificos en tus proximas compras! 20% off</p>
     {/*  <!-- inicio col 1 footer --> */}
      <div className="col-4">
        <h3 className="estilosFoter">Gracias por confian en nosotros</h3>
        <p className="colorfooter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem accusantium id voluptas magnam ipsum nostrum illo aut mollitia doloremque!</p>
        <a href="https://www.chroniclebooks.com/pages/privacy-policy">Politicasa de privacidad</a>/ <a href="https://www.chroniclebooks.com/pages/ccpa-opt-out">No vender informacion personal</a><br/>
        <a href="https://www.wipo.int/portal/es/">Propiedad intelectual</a>
{/*             <!-- fin columna 1 footer de footer -->
        <!-- inicio colmna 2 footer --> */}
      </div>
      <div className="col-4">
      <ul className="list-group-flush ">
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-3">Publicidad y Asesoramiento</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-4">Contratos por medios electronicos</a></li >
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-5">Arrepentimientos y Terminologia</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-6">Clausulas abusivas</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-7">Contrato de adhesion</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#ley">Texto completo de la norma</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-1">Consumidor y consumidoras</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/contratos-de-consumo#titulo-2">Relaciones de consumo</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/asuntos-estrategicos/estrategia-nacional-para-el-desarrollo-de-la-economia-del-hidrogeno/desarrollo">Desarrolo de proveedores</a></li>
        <li className="list-group-item"><a href="https://www.argentina.gob.ar/asuntos-estrategicos/estrategia-nacional-para-el-desarrollo-de-la-economia-del-hidrogeno/integracion">Integracion y fortalecimiento de webs</a></li>
      </ul>
      </div>
  {/*     <!-- fin col2 footer -->
      <!-- inicio columna 3 footer --> */}
      <div className="col-4">
        <h3 className="estilosFoter">Coorporation Asocietive</h3>
        

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque cumque magnam, architecto iusto nobis esse nihil dolores placeat repellendus ducimus velit, porro nisi molestias. Explicabo laborum dolores similique alias!</p>
        <div className="row  ">
          <div className="card-body imgEmpresas ms-4 ">
            
              <img src={foto1} alt=""/>
              <img src={foto2} alt=""/>
              <img src={foto3} alt=""/>
              <img src={foto4} alt=""/>
              <p className="colorfooter">Todos los detechos reservados.</p>
              
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <p>Copyrigh☺2023,Choniclik books</p>
  </div>
       </footer>
       </>
    
    )
}

export default Footer