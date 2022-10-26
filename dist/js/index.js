"use strict";
const sr = ScrollReveal({ reset: true });
sr.reveal('.section-container', { duration: 2500 });
sr.reveal('.divisao', { duration: 2500 });
ScrollReveal().reveal('.projetos-container', { duration: 2500 });
const xpUser = [
    {
        name: 'Curso Tecnico',
        titulo: 'Técnico em Informática',
        data: 'Fev 2010 - Julho 2012',
        local: 'HELCY MOREIRA MARTINS AGUIAR PROFº ETEC',
        descricao: 'No curso técnico em informática aprendi várias linguagens de programação (PHP,Java), linguagem de marcação (HTML5) e linguagem  de estilização (CSS3), tive também aprendizados com banco de dados com SQL por meio do MySQL. E como um bom curso de informática,aprendi a fazer manutenção e formatação desktops',
    },
    {
        name: 'Faculdade',
        titulo: 'Tecnologo em Analise e Desenvolvimento de Sistemas',
        data: 'Fev 2014 - Julho 2019',
        local: 'Unilins - Lins',
        descricao: 'O curso de Análise e Desenvolvimento de Sistemas aprendi várias linguagens de programação   PHP,Java,C,C#,Adminstração e também aprendizados com banco de dados com SQL por meio do MYSQL,ORACLE e SQLSERVER.',
    },
    {
        name: 'Desenvolvedor Web',
        titulo: 'Desenvolvedor Web -CETEC Lins',
        data: '2021-2021 [Maio – Novembro]',
        local: 'Lins',
        descricao: '- Manutenção e desenvolvimento de Web utilizando a linguagem C# com Asp.Net webForms e .Net Core 3.1.'+
                   '- Utilização de mapas GeoServer para a Apresentação de dados Geográficos no sistema web.'+
                   '- Elaboração de consultas e manipulação de dados utilizando SQL Server e PostgreSQL.'+
                   '- manutenção e atualizações em aplicativos android, utilizando como linguagem principal o java.',
    },    
];
const clicadoLi = document.querySelectorAll('.xp .li');
function experiencia(e) {
    const ativo = document.querySelector('.xp .ativo');
    const i = document.querySelector('.titulo');
    const o = document.querySelector('.data');
    const r = document.querySelector('.local');
    const a = document.querySelector('.desc2');
    const xpLoop = xpUser.forEach((xp, index) => {
        const { name, titulo, data, local, descricao } = xp;
        if (index === e) {
            ativo.innerHTML = name;
            i.innerHTML = titulo;
            o.innerHTML = data;
            r.innerHTML = local;
            a.innerHTML = descricao;
            return;
        }
    });
}
clicadoLi.forEach((e, i) => {
    e.addEventListener('click', () => {
        clicadoLi.forEach((e) => {
            e.classList.remove('ativo');
        }),
            e.classList.add('ativo'),
            experiencia(i);
    });
});
const subirTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
function btnMostraOculta() {
    if (0 === window.scrollY) {
        const scroll = document.querySelector('.scroll');
        scroll.style.display = 'none';
    }
    else {
        const scrollBlock = document.querySelector('.scroll');
        scrollBlock.style.display = 'block';
    }
}
window.addEventListener('scroll', btnMostraOculta);
