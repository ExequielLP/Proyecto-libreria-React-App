import React, { useContext, useEffect } from 'react'
import foto1 from '../public/contactoIMG/telefonoOptimizada.webp'


const Contacto = () => {

  useEffect(() => {
    document.title=" Libreria Contacto"
  
  
  }, [])
  
  return (
<>
<div className="container justify-content-center align-items-center">
{/*         <!-- no queda en el medio, porque hay 3 x  col-3=9... sobra --> */}
        <div className="row justify-content-center">
        <div className="col-3 m-4">
          <ul className="list-group-flush">
            <li className="list-group-item "><h1 className="EstiloContacto">CONTACTO</h1></li>
            <li className="list-group-item"><i className="bi bi-headset"></i> Contactenos 221-415986</li>
            <li className="list-group-item"><i className="bi bi-envelope-at"></i> info@gmail.com</li>
            <li className="list-group-item"><i className="bi bi-building-check"></i> Avenida 44 N*2031 </li>
            <li className="list-group-item"><i className="bi bi-clock"></i> Open 9am-18pm /lun-dom</li>
          </ul>
        </div>
        <div className="col-3 m-4">
          <ul className="list-group-flush">
            <h1 className="EstiloContacto">TU OPINION</h1>
            <p className="list-group-item" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis illum impedit 
        </p>
          </ul>
        
        </div>
        <div className="col-3 m-4">
          <ul className="list-group-flush ">
            <li className="list-group-item "><h1 className="EstiloContacto">DONACIONES</h1></li>
            <li className="list-group-item"><i className="bi bi-people"></i> Donaciones 011-245566</li>
            <li className="list-group-item"><i className="bi bi-envelope-at"></i> Donaciones@gmail.com</li>
            <li className="list-group-item"><i className="bi bi-building-check"></i> Calle 403 entre 501 y 502</li>
            <li className="list-group-item"><i className="bi bi-clock"></i> Open 9am-16pm lun-dom</li>
          </ul>
        </div>
       {/*  <!--  --> */}
        
          <div className=" container  justify-content-center contenedorForm">
            
              <div className="contenedorIMG">
                <img src={foto1} className="img-fluid" alt=""/>
              </div>
              <form className="row g-3 mt-2">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">Email <i className="bi bi-envelope-open"></i></label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email aqui"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre <i className="bi bi-person-check"></i></label>
                  <input type="text" className="form-control" id="nombre" placeholder="Su nombre Aqui"/>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">Telefono <i className="bi bi-telephone-plus"></i></label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Direccion aqui "/>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">Escriba su consulta <i className="bi bi-house-check"></i></label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Consulta aqui"/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">Pais <i className="bi bi-flag"></i></label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Pais aqui"/>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">Provincia <i className="bi bi-flag-fill"></i></label>
                  <select id="inputState" className="form-select" defaultValue="Choose...">
                    <option>Abrir</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputZip" className="form-label">Postal <i className="bi bi-mailbox"></i></label>
                  <input type="text" className="form-control" id="inputZip" placeholder="Posta aqui"/>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">
                      De acuerdo con enviar mi informacion
                    </label>
                  </div>
                </div>
                <div className="col-12 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-secondary btn-colorr"><i className="bi bi-send-fill"></i>  Enviar</button>
                </div>
              </form>               
          </div>
        
        <div className="container-fluid d-flex justify-content-center mb-5 mt-2 escalableMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13085.990452438255!2d-57.950348502993144!3d-34.9190550809655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e77938900055%3A0x4b05e8120c717752!2sC%C3%BAspide%20Libros!5e0!3m2!1ses-419!2sar!4v1691724820657!5m2!1ses-419!2sar" width="1200" height="400" style={{borderradius:'20px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
      
      
      
    </div>
</>

  )
}

export default Contacto