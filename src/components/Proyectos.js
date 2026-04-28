import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import safechat from '../resources/safechat.png';
import ACTIVE from '../resources/ACTIVE.png';
import SCRIPTING from '../resources/SCRIPTING.png';
library.add(faGithub);

function Proyectos() {
    return (
        <div className='todo_proyectos'>
            <div id='proyectos'>
                <div className="titulo_proyectos">
                    <h3>MEINE PROJEKTE</h3>
                </div>
                <div className='proyectos'>
                    
                    {/* PROYECTO 1: SAFECHAT */}
                    <div className='proyecto'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>SafeChat</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                Wir haben eine Webseite gegen Schulmobbing entwickelt, um Schüler zu informieren, zu unterstützen und ein sichereres Umfeld zu schaffen.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                Ein integrierter Chatbot erkennt potenzielle Mobbingfälle und bietet schnelle Antworten, um Betroffenen sofortige Hilfe zu leisten.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://tfg-chatbot-cp68.onrender.com/" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 28 28" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                        <path d="M11 13l9 -9" />
                                        <path d="M15 4h5v5" />
                                    </svg>
                                    Besuchen
                                </a>
                                <a href="https://tfg-chatbot-cp68.onrender.com/" target="blank" className='boton_margen'>
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </div>
                                    Code
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>HTML</p><p>CSS</p><p>JavaScript</p><p>Python</p><p>Dialogflow</p><p>MongoDB</p>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://tfg-chatbot-cp68.onrender.com/" target="blank">
                                    <img src={safechat} alt="safechat"></img>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='separador_proyectos'></div>

                    {/* PROYECTO 2: ACTIVE DIRECTORY */}
                    <div className='proyecto proyecto_reves'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>Active Directory</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                Active Directory ermöglicht die zentrale Verwaltung von Benutzern, Gruppen, Computern und Richtlinien innerhalb eines Netzwerks.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                In Windows Server habe ich die Domäne implementiert sowie Benutzer, Gruppen, Organisationseinheiten (OUs) und Gruppenrichtlinien (GPOs) konfiguriert.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://github.com/Gusares4hack/Active-Directory" target="blank">
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </div>
                                    Code
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>Active Directory</p><p>OUs</p><p>GPOs</p><p>Office</p>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://github.com/Gusares4hack/Active-Directory" target="blank">
                                    <img src={ACTIVE} alt="ACTIVE"></img>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='separador_proyectos'></div>

                    {/* PROYECTO 3: SCRIPTING */}
                    <div className='proyecto'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>Scripting</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
Automatisierungsskripte optimieren Prozesse und minimieren Fehler bei Routineaufgaben.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
Ich entwickle Bash- und Python-Skripte für Backups, System-Monitoring und die Benutzerverwaltung.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://github.com/Gusares4hack/Scripting-Bash" target="blank">
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </div>
                                    Code
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>Bash</p><p>Python</p><p>Linux</p><p>Automation</p>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://github.com/Gusares4hack/Scripting-Bash" target="blank">
                                    <img src={SCRIPTING} alt="SCRIPTING"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* CIERRE DE DIV PROYECTOS */}
                </div>
            </div>
        </div>
    );
}

export default Proyectos;