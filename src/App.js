import './App.css';
import { useEffect, useState } from 'react';
import myllena from './myllena.jpg';
import pedro from './pedro.jpg';
import juliana from './juliana.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (window.scrollY > heroSection.clientHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className='banner-container'>
        <nav className={`navbar ${isScrolled ? 'navbar-fixed' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#teachers">Professores</a></li>
            <li><a href="#forum">Fórum</a></li>
            <li><a href="#contact">Contatos</a></li>            
          </ul>        
        </nav>

        <section id="home" className="hero-section">
          <div className="hero-content">            
            <h1>English <span style={{ color: '#f44336' }}>Exchange</span></h1>
            <p> Fale com a teacher Myllena e aumente suas oportunidades de carreira.</p>            
            <div className="admission-open">
              <span>Teste seu nivelamento!</span>
            </div>
            <button className="enrol-btn">Clique aqui</button>
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

      {/* Seção Professores */}
      <section id="teachers" className="teachers-section">
  <h2>Conheça Nossos Professores Parceiros</h2>
  <div className="teachers-container">
    {/* Card Teacher Myllena */}
    <div className="teacher-card">
      <img src={myllena} alt="Teacher Myllena" className="teacher-photo" />
      <h3>Teacher Myllena</h3>
      <p>Especialista em aulas particulares com foco em conversação e fluência. Mais de 10 anos de experiência no ensino de inglês para todos os níveis.</p>
    </div>

    {/* Card Teacher Pedro */}
    <div className="teacher-card">
      <img src={pedro} alt="Teacher Pedro" className="teacher-photo" />
      <h3>Teacher Pedro</h3>
      <p>Instrutor de inglês especializado em preparatórios para exames internacionais e desenvolvimento de habilidades acadêmicas.</p>
    </div>

    {/* Card Teacher Juliana */}
    <div className="teacher-card">
      <img src={juliana} alt="Teacher Juliana" className="teacher-photo" />
      <h3>Teacher Juliana</h3>
      <p>Professora com foco em ensino de inglês para iniciantes e uso de métodos interativos para aulas dinâmicas e divertidas.</p>
    </div>
  </div>
</section>

      {/* Seção Fórum */}
      <section id="forum" className="forum-section">
        <h2>Fórum</h2>
        <p>Participe da nossa comunidade! Faça perguntas, compartilhe experiências e interaja com outros alunos.</p>
        <button className="enrol-btn">Acesse o Fórum</button>
      </section>

      {/* Seção Contatos */}
      <section id="contact" className="contact-section">
        <h2>Contatos</h2>
        <div className="contact-container">
          <div className="map-container">
            <h3>Localização</h3>
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.808082119985!2d-43.33113992469247!3d-22.80957417932371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b32db526311%3A0x1830eb6aeb660689!2sR.%20Prof.%20Costa%20Ribeiro%2C%20320%20-%20Jardim%20Am%C3%A9rica%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021240-290!5e0!3m2!1spt-BR!2sbr!4v1729210516885!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Formulário de Contato */}
          <div className="contact-form">
            <h3>Entre em Contato</h3>
            <form>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit" className="enrol-btn">Enviar</button>
            </form>            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 English Exchange. Todos os direitos reservados.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/englishexchangebr?igsh=MXRqNmE5eTduM2ZxYw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5521981105778&text=Alfabetizadora+Bil%C3%ADngue+e+Professora+Particular+de+Ingl%C3%AAs%2C+online+e+presencial." target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
