import './App.css';
import foto from './foto-proa.jpg';
import { useState } from 'react';
import curriculo from "./Curriculo_Rubens_Silva.pdf"

function Header() {
  return (
    <header className='header'>
      <img src={foto} alt='Minha foto' className='header-foto' />
      <div className='info'>
        <h1>Rubens Silva</h1>
        <p className='cargo'>UI/UX Designer</p>
        <a href="mailto:rubensfrs_@hotmail.com" className='email'>
          rubensfrs_@hotmail.com
        </a>
      </div>
      <div className='links'>
        <a href='https://www.linkedin.com/in/rubens-frsilva/' target='_blank' rel='noreferrer'>Linkedin</a>
        <a href='https://www.behance.net/rubenssilva30' target='_blank' rel='noreferrer'>Behance</a>
        <a href='https://github.com/rubsfrs' target='_blank' rel='noreferrer'>GitHub</a>
      </div>
    </header>
  )
}

function SobreMim() {
  return (
  <section className='sobre'>
    <h2>Prazer em conhecer</h2>
    <p>
      Designer UI/UX apaixonado por conectar pessoas a soluções digitais por meio de interfaces empáticas e funcionais. Formado pelo Instituto PROA, acredito que um bom produto nasce da intersecção entre a necessidade do usuário e um design inteligente. Utilizo o Figma para traduzir pesquisas em wireframes e layouts refinados, com preferência por estéticas minimalistas e hierarquia tipográfica clara. Minha busca constante é projetar fluxos de navegação sem atritos e experiências visualmente impactantes.
    </p>
    <a href={curriculo}
    download={'Curriculo_Rubens_Silva.pdf'}
    className='btn-cv' target='_blank' rel='noreferrer'>
      Baixar meu CV
    </a>
  </section>
  )
}

function Etapa({ titulo, status, descricao, softSkills, techs }) {
  const [aberta, setAberta] = useState (status === 'atual');
  return (
    <div className='etapa-wrapper'>
      <div className='timeline-dot' />
      <div className={`etapa ${status}`}>
        <div className='etapa-header' onClick={() => setAberta(!aberta)}>
          <h3>{titulo}</h3>
          <div style={{display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span className='indicador'>
            {status === 'atual' ? 'Você está aqui' : status === 'proximo' ? 'Próximo passo' : 'Objetivo'}
          </span>
          <span className="seta">{aberta ? "▲" : "▼"}</span>
        </div>
        </div>
      {aberta && (
        <div className='etapa-corpo'>
          <p className='etapa-desc'>{descricao}</p>
          <p className='etapa-sub'>Soft skills essenciais:</p>
          <ul className='etapa-lista'>
            {softSkills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
          <p className='etapa-sub'>Roadmap de aprendizado</p>
          <div className='etapa-tags'>
            {techs.map((t, i) => <span key={i} className='tech-tag'>{t}</span>)}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

function MapaCarreira() {
  return (
    <section className='mapa'>
      <h2>Mapa de Carreira</h2>
      <div className='timeline'>
        <Etapa
          titulo="Designer UI/UX Júnior"
          status="atual"
          descricao="Consolidar os fundamentos teóricos e práticos, entregando telas e fluxos com ótima usabilidade e refinamento visual."
          softSkills={[
            'Empatia genuína pelo usuário',
            'Comunicação clara com desenvolvedores',
            'Resiliência para receber críticas de design (Design Critiques)',
            'Organização de arquivos, páginas e camadas',
          ]}
          techs={['Figma', 'Fundamentos de UI', 'Tipografia', 'Fundamentos de UX']}
          />
          <Etapa
          titulo="Designer UI/UX Pleno"
          status="proximo"
          descricao="Autonomia para conduzir projetos de ponta a ponta. Tomar decisões de design embasadas em pesquisa e garantir uma passagem de bastão (hand-off) impecável para o time de engenharia."
          softSkills={[
            'Estimar esforço e prazos de entregáveis de design com precisão',
            'Saber argumentar e defender as decisões visuais com base em dados',
            'Colaboração estratégica com PMs (Product Managers)',
            'Identificar falhas na jornada do usuário antes que o produto vá para o ar',
          ]}
          techs={['UX Research', 'Testes de Usabilidade e Prototipagem Avançada', 'Design Systems', 'Acessibilidade em interfaces']}
          />
          <Etapa
          titulo="Designer UI/UX Sênior"
          status="futuro"
          descricao="Referência da área na empresa. Definir o direcionamento visual do produto, alinhar a experiência com as metas de negócio e desenvolver talentos."
          softSkills={[
            'Mentoria e desenvolvimento de designers menos experientes',
            'Visão estratégica de negócio e produto',
            'Comunicação persuasiva com lideranças (C-Level) e não-designers',
            'Influência na criação de uma cultura forte de design na empresa',
          ]}
          techs={['Estratégia de Produto', 'DesignOps', 'Métricas de Negócio', 'Service Design', 'Facilitação de Workshops']}
          />
      </div>
    </section>
  )
}

function SkillBar ({nome, porcentagem}) {
  return (
    <div className='skill'>
      <div className='skill-topo'>
        <span className='skill-nome'>{nome}</span>
        <span className='skill-pct'>{porcentagem}%</span>
      </div>
      <div className='skill-barra-bg'>
        <div className='skill-barra' style={{width:`${porcentagem}%`}}/>
      </div>
    </div>
  )
}

function Skills() {
  const conhecimentos = [
    { nome: 'Figma', porcentagem: 60 },
    { nome: 'Design Systems', porcentagem: 50 },
    { nome: 'Prototipagem Avançada', porcentagem: 50 },
    { nome: 'UX Research', porcentagem: 50 },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <p className="skill-grupo-titulo">Conhecimentos</p>
      {conhecimentos.map((s, i) => (
        <SkillBar key={i} nome={s.nome} porcentagem={s.porcentagem} />
      ))}

      <div className="idiomas">
        <p className="skill-grupo-titulo">Idiomas</p>
        <div className="idioma-item">
          <span className="idioma-nome">Português</span>
        </div>
        <div className="idioma-item">
          <span className="idioma-nome">Inglês - Básico</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className='pagina'>
      <div className='folha'>
        <Header />
        <div className='folha-corpo'>
          <SobreMim />
          <div className='conteudo-principal'>
            <MapaCarreira />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}