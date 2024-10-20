import './App.css';

function App() {
  return (
    <div className="App">
      <header className='banner-container'>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#teachers">Professores</a></li>
            <li><a href="#contact">Contatos</a></li>
            <li><a href="#forum">Fórum</a></li>
          </ul>        
        </nav>

        <section id="home" className="hero-section">
          <div className="hero-content">            
            <h1>English <span style={{ color: '#f44336' }}>Exchange</span></h1>
            <p> Fale com a teacher Myllena e aumente suas oportunidades de carreira.</p>
            <button className="enrol-btn">Enrol Now</button>
            <div className="admission-open">
              <span>Faça sua aula experimental!</span>
            </div>
          </div>
        </section>
      </header>

      {/* Seção Sobre */}
      <section id="about" className="about-section">
        <h2>Sobre o Curso</h2>
        <p>Na English Exchange, fundada pela experiente teacher Myllena, as aulas particulares são desenhadas para atender às necessidades únicas de cada aluno.
                Aplicamos o Método Mabi, uma abordagem pedagógica avançada que enriquece o processo de aprendizado, promovendo resultados efetivos e um domínio aprimorado do inglês.
                Nossa missão é oferecer um ensino personalizado e de alta qualidade, com foco na fluência e confiança no inglês. Utilizamos recursos didáticos modernos e técnicas inovadoras para criar um ambiente de aprendizado estimulante e eficaz.
                Escolher as aulas particulares da English Exchange é optar por um caminho para o sucesso no inglês, com um atendimento dedicado e uma experiência educacional sob medida.</p>
      </section>

      {/* Seção Serviços */}
      <section id="services" className="services-section">
        <h2>Nossos Serviços</h2>
        <ul className="services-list">
           <p>           
            No nosso curso de inglês, acreditamos que aprender deve ser uma experiência enriquecedora e acessível a todos. Por isso, oferecemos uma ampla gama de serviços para atender às suas necessidades.
            <br /><br />
            <strong>Suporte Escolar:</strong> Entendemos que o aprendizado do inglês pode ser desafiador, especialmente no ambiente escolar. Por isso, disponibilizamos suporte personalizado para estudantes, com aulas de reforço, tutoriais e materiais didáticos que ajudam a solidificar o conhecimento e a aumentar a confiança. Nossa equipe de professores qualificados está sempre pronta para oferecer a orientação necessária para que cada aluno alcance seu potencial.
            <br /><br />
            <strong>Aulas Individuais e em Grupo:</strong> Oferecemos flexibilidade nas modalidades de ensino. Você pode optar por aulas individuais, que garantem atenção personalizada, ou participar de aulas em grupo, onde a interação com outros alunos enriquece o aprendizado e torna a experiência mais divertida.
            <br /><br />            
            <strong>Aulas de Conversação:</strong> A fluência em inglês vai além da gramática; é preciso praticar a conversação. Nossas aulas de conversação são dinâmicas e voltadas para desenvolver a habilidade de se comunicar com confiança em diversas situações do dia a dia.
            <br /><br />
            <strong>Atividades Interativas e Dinâmicas:</strong> Aprender deve ser divertido! Por isso, incorporamos atividades interativas e dinâmicas em nosso currículo, tornando o aprendizado mais envolvente e eficaz. Com jogos, debates e exercícios práticos, garantimos que você aprenda de maneira leve e prazerosa.
            <br /><br />
            <strong>Promoções para Familiares:</strong> Aprender em família é uma experiência única e motivadora! Pensando nisso, oferecemos promoções especiais para familiares que desejam se inscrever juntos em nosso curso. Com condições exclusivas e descontos atraentes, você e seus entes queridos poderão embarcar nessa jornada de aprendizado juntos, tornando o processo mais divertido e interativo.
            <br /><br />
            Junte-se a nós e descubra como nossos serviços podem transformar sua experiência de aprendizado de inglês. Estamos aqui para apoiar você e sua família a alcançarem seus objetivos!
        </p>
        </ul>
      </section>

     
    </div>
  );
}

export default App;
