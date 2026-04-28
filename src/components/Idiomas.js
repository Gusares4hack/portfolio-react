import React from 'react'

function Idiomas() {
    return (
        <div className="todo_idiomas">
            <div id="idiomas">
                <div className="titulo_idiomas">
                    <h3>SPRACHEN</h3>
                </div>
                <div className="mis_idiomas">
                    <div className="idioma idioma_aleman">
                        <div className="nombre_idioma aleman">
                            Deutsch
                        </div>
                        <div className="nivel_idioma">
                            <div className="circulos_idiomas">
                                <div className="circulo"></div><div className="circulo"></div><div className="circulo"></div><div className="circulo circulo_medio"><div className="medio_izq"></div><div className="medio_der"></div></div><div className="circulo circulo_vacio"></div><div className="circulo circulo_vacio"></div>
                            </div>
                            <div className="nivel">
                                B1/B2
                            </div>
                        </div>
                    </div>
                    <div className="idioma idioma_frances">
                        <div className="nombre_idioma frances">
                            English
                        </div>
                        <div className="nivel_idioma">
                            <div className="circulos_idiomas">
                                <div className="circulo"></div><div className="circulo"></div><div className="circulo"></div><div className="circulo circulo_medio"><div className="medio_izq"></div><div className="medio_der"></div></div><div className="circulo circulo_vacio"></div><div className="circulo circulo_vacio"></div>
                            </div>
                            <div className="nivel">
                                B1/B2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idiomas
