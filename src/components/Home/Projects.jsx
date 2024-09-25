import React from 'react';

const projects = [
    {
        title: "Mochila de viagem",
        image: "/imgs/mochila-de-viajem.jpg",
        description: "Uma demonstração simples do uso de JavaScript.",
        link: "https://mochila-de-viagem-red.vercel.app/",
        progress: { html: 17, css: 51, js: 32 },
    },
    // Adicione os outros projetos da mesma forma...
];

const Projects = () => {
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
