import React from 'react'

function Skills() {
    return (
        <div className="todo_skills">
            <div id="skills">
                <div className="titulo_skills">
                    <h3>SOFT SKILLS</h3>
                </div>
                <div className="skills">
                    <div className='primera_fila_skills'>
                        <div className="skill">
                            <div className="titulo_skill">
                                Lösungsorientiert 
                            </div>
                        </div>
                        <div className="skill">
                            <div className="titulo_skill">
                                Zuverlässig 
                            </div>
                        </div>
                    </div>
                    <div className='segunda_fila_skills'>
                        <div className="skill">
                            <div className="titulo_skill"> 
                            Teamfähig 
                            </div>
                        </div>
                        <div className="skill">
                            <div className="titulo_skill">
                            Analytisch 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills
