import React, { useContext, useEffect } from 'react'
import foto1 from '../assets/tarjetas/visa.svg'
import foto2 from '../assets/tarjetas/paypal.svg'
import foto3 from '../assets/tarjetas//master.svg'
import foto4 from '../assets/tarjetas/amex.svg'
import foto5 from '../assets/criptomonedas/usdtOptimzada.webp'
import foto6 from '../assets/criptomonedas/bitcionOptimazado.webp'
import foto7 from '../assets/criptomonedas/dogeOptimizada.webp'
import foto8 from '../assets/criptomonedas/etherOptimizado.webp'
import foto9 from '../assets/criptomonedas/rippleOptimizada.webp'
import { CarritoContext } from '../contexto/CarritoContexto'
import { ItemCarrito } from '../components/ItemCarrito'


const Carrito = () => {
const {carrito,cantidadArticulosCarritoContext,precioTotalArticulosCarrito, guardarCarritoContext,productoSinIva,precioTotalArticulosCarritoSinIVA}=useContext(CarritoContext)

  useEffect(() => {
    document.title="Libreria Carrito"
  
  }, [])
  
  return (
   <>
   <section  className="container my-5 ">
<div className="row d-flex justify-content-center ">
 
  <div className="col-8 ">
<div className="card mb-4">
  <div className="card-header py-4">
    <h5 className="mb-0">
      Carrito   {cantidadArticulosCarritoContext()}-Articulos
    </h5>
  </div>
 {/*  <!-- Card body 1 --> */}
<div className="card-body " id="lista-compra">
 {/*  <!-- ARRANCA ROW R1 --> */}

 {
  carrito && carrito.map(item=>(
    <ItemCarrito key={item.id} itemProducto={item}/>
  ))
 }

 {/*  <!-- TERMINA ROW R1 --> */}
</div>
<hr/>
    {/* <!-- fin --> */}

</div>
{/* <!-- tarjetas inciio -->  */}

  <div className="card mb-4">
    <div className="row">
    <div className="col-5">
      <div className="card-body tarjetas ">
        <p><strong className="CarritoFont text-body-secondary">Metodos de pago aceptados</strong></p>
        <img src={foto1} alt="" />
        <img src={foto2} alt="" />
        <img src={foto3}alt="" />
        <img src={foto4} alt="" />
      </div>
    </div>
    <div className="col-7">
      <div className=" card-body Crytomonedas">
        <p><strong className="CarritoFont text-body-secondary">Metodas de pago aceptados en Cryptomoneda</strong></p>
        <img src={foto5} alt=""/> 
        <img src={foto6} alt="" />
        <img src={foto7} alt="" />
        <img src={foto8} alt="" />
        <img src={foto9} alt="" />
      </div>
    </div>
  </div>
</div>
{/* <!-- tarjetas fin --> */}
  </div>
{/*   <!-- termina aca --> */}
  <div className="col-4 ">
    <div className="row">
     
     <div className="card mb-4">
       <div className="card-header py-3">
         <h5 className="mb-0">Resumen carrito</h5>
       </div>


       <div className="card-body">
         <ul className="list-group list-group-flush">
           <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 ">
             Productos (sin iva)
             <span id="totalDeCompra" className="CarritoFont text-body-secondary">$ {precioTotalArticulosCarritoSinIVA()} </span>{/* /* productoSinIva() */ }
           </li>
           <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
             Envio
             <span>Gratis</span>
           </li>
           <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 CarritoFont">
           <a href="https://www.bbva.com/es/salud-financiera/que-es-el-iva/#:~:text=El%20IVA%20o%20Impuesto%20sobre,nacional%20como%20en%20el%20exterior.">Iva de la compra</a>
              <strong  className="CarritoFont text-body-secondary">$ {productoSinIva()}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              
            </li>
             
               <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                 <p  className="CarritoFont text-body-secondary">Total de la compra</p>
                 <p id="totalPagar" className="CarritoFont text-body-secondary ">$ARS {precioTotalArticulosCarrito()}</p>
               </li>
                 </ul>
        

         <button type="button" className="btn btn-secondary btn-lg mt-4" onClick={guardarCarritoContext}>Procesar Compra</button>
       </div>
     </div>

{/*      <!-- mas libros para vender --> */}
     <div className="container ">
      
      <div className="row justify-content-center ">
        <div className="card" style={{width: '150px'}}>
          <img src='\fotos\libro3.webp' className="card-img-top  " alt="..."/>
        
            <ul className="list-group list-group-flush ajusteListGroup">
              <li className="list-group-item text-bg-secondary p-3" >Año:2020</li>
              <li className="list-group-item text-bg-secondary p-3">Lazamietno 29/8</li>
              <li className="list-group-item text-bg-secondary p-3 d-flex justify-content-center"><button className="btn btn-light btn-sm">Ver detalle</button></li>
            </ul>
            
        </div>

      {/*   <!--  otra carta --> */}
        <div className="card" style={{width: '150px'}}>
          <img src='\fotos\libro4.webp' className="card-img-top" alt="..."/>
          
            <ul className="list-group list-group-flush ajusteListGroup">
              <li className="list-group-item text-bg-secondary p-3" >Año:2023</li>
              <li className="list-group-item text-bg-secondary p-3">Lanzamiento 01/2</li>
              <li className="list-group-item text-bg-secondary p-3 d-flex justify-content-center"><button className="btn btn-light btn-sm">Ver detalle</button></li>
            </ul>         
        </div>
      </div>
      
    </div>

  </div>
  </div>
</div>



</section>
   </>
  )
}

export default Carrito