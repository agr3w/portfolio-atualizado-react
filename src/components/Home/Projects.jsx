import React, { useEffect, useState } from 'react';
import data from '../../data.json';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projects);
    }, []);

    return (
        <section id="projetos">
            <h1 className="titulo-div-projetos">Projetos</h1>
            <div className="projetos-container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <h2 className="titulo-projetos">{project.title}</h2>
                        <img src={project.image} alt={`Projeto ${index + 1}`} className="card-img" />
                        <p className="card-descricao">{project.description}</p>
                        <div className="barra-progresso">
                            <span className="barra-html" style={{ width: `${project.progress.html}%` }}>HTML {project.progress.html}%</span>
                            <span className="barra-css" style={{ width: `${project.progress.css}%` }}>CSS {project.progress.css}%</span>
                            <span className="barra-js" style={{ width: `${project.progress.js}%` }}>JS {project.progress.js}%</span>
                        </div>
                        <button className="botao-ver"><a href={project.link}>Ver projeto</a></button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
