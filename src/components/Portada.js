import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import js from '../resources/js.webp'
import vue from '../resources/vue.svg'
import react from '../resources/react.svg'
import supa from '../resources/supabase.png'
import firebase from '../resources/firebase.svg'
import html from '../resources/html.svg'
import css from '../resources/css.svg'
import ts from '../resources/ts.png'
import github from '../resources/github.png'

import java from '../resources/java.svg'
import node from '../resources/node.png'
import php from '../resources/php.png'
import net from '../resources/net.png'
import vb from '../resources/vb.png'
import cordova from '../resources/cordova.png'
import sql from '../resources/sql.png'
// import mongo from '../resources/mongodb.ico'

library.add(faPhone);

const Portada = () => {
  return (
    <div id="portada">
      <div className="contenedor_portada">
        <div className="titulo_portada">
          <h1>IT Systems Administrator</h1>
        </div>
        <h2>
          <div className="nombre_completo_portada">
            <div className="nombre">
              Miguel Gustavo
            </div>
            <div className="apellidos">
              <div>Ayala</div>
              <div>Herrera</div>
            </div>
          </div>
        </h2>
        {/* <div className="num" onClick={llamar}>
          <div className='tel'><FontAwesomeIcon icon="fa-solid fa-phone" /></div>
          <div className='num_tel'><h3>+34 608 82 50 94</h3></div>
        </div> */}
        <div className='descargar_cv'>
          <a href="/Zeugnisse.pdf" download className="descargar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
            </svg>
            Zeugnisse
          </a>
        </div>
        <div className="mis_enlaces">
          <div className="enlaces">
            <a href='https://github.com/Gusares4hack' target='blank'>
              <div className="enlace_github">
                GitHub
                <svg className="flecha icon icon-tabler icon-tabler-arrow-right" xmlns="http://www.w3.org/2000/svg"
                  width="23" height="20" viewBox="0 0 24 24" strokeWidth="1.7" stroke="white" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <script xmlns="" />
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                  <script xmlns="" />
                </svg>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/gusayaherr' target='blank'>
              <div className="enlace_linkedin">
                LinkedIn
                <svg className="flecha icon icon-tabler icon-tabler-arrow-right" xmlns="http://www.w3.org/2000/svg"
                  width="23" height="20" viewBox="0 0 24 24" strokeWidth="1.7" stroke="white" fill="none"
                  strokeLinecap="round" strokeLinejoin="round">
                  <script xmlns="" />
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                  <script xmlns="" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="logos_portada">
          <div className="fila1">
            <img src={html} alt="html"></img>
            <img src={css} alt="css"></img>
            <img src={js} alt="js"></img>
            <img src={vue} alt="vue"></img>
            <img src={react} alt="react"></img>
            <img src={ts} alt="ts" className='especial'></img>
            <img src={github} alt="github" className='especial'></img>
          </div>
          <div className='entre_filas'></div>
          <div className="fila2">
            <img src={php} alt="php"></img>
            <img src={node} alt="node" className='especial'></img>
            <img src={java} alt="java"></img>
            <img src={firebase} alt="firebase" className='especial'></img>
            <img src={supa} alt="supa"></img>
            {/* <img src={mongo} alt="mongo" className='especial'></img> */}
            <img src={net} alt="net"></img>
            <img src={cordova} alt="js" className='especial'></img>
            <img src={vb} alt="vb" className='especial'></img>
            <img src={sql} alt="sql" className='especial'></img>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Portada
