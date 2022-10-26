"use strict";
const dados = [
    {
        nameProject: 'Sistema PDV',
        descricao: 'Projeto que eu Desenvolvi Usando C# Windows Forms.',
        tech: 'C#',
        gitHubLink: 'https://github.com/Guimacario9/ProjetoPDV',
    },
    {
        nameProject: 'Sistema de Atendimento',
        descricao: 'Projeto que eu Desenvolvi Usando C# para clinicas particulares.',
        tech: 'C#',
        gitHubLink: 'https://github.com/Guimacario9/ProjetoAtendimento',
    },
    {
        nameProject: 'Carrinho de Compras',
        descricao: 'Projeto que eu Desenvolvi para trabalho de faculdade que é um ecommerce.',
        tech: 'PHP,HTML,CSS,Javascript',
        gitHubLink: 'https://github.com/Guimacario9/Carrinho-de-Compras',
    },
];
function renderProjects() {
    const imagemDoProjeto = document.querySelectorAll('.image-project');
    const nomeDoProjeto = document.querySelectorAll('.name-project');
    const description = document.querySelectorAll('.description');
    const technologies = document.querySelectorAll('.technologies');
    const linkDoProjeto = document.querySelectorAll('.gitHub-link');
    return dados.forEach((dado, index) => {
        const { nameProject, descricao, tech, gitHubLink } = dado;
        imagemDoProjeto[index].setAttribute('src', dado.image_url);
        imagemDoProjeto[index].setAttribute('alt', nameProject);
        nomeDoProjeto[index].innerHTML = nameProject;
        description[index].innerHTML = descricao;
        technologies[index].innerHTML = tech;
        linkDoProjeto[index].setAttribute('href', gitHubLink);
    });
}
renderProjects();
