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


      <section id="about" className="about-section">
  <div className="about-content">
    <h2>Sobre o English Exchange</h2>
    <p>
      O English Exchange é um curso focado em proporcionar uma experiência de aprendizado dinâmica e interativa. 
      Com uma metodologia prática, conduzida pela professora Myllena, o curso é ideal para quem deseja expandir suas 
      habilidades no inglês e abrir novas oportunidades de carreira.
    </p>
    <p>
      Myllena é uma professora dedicada, com anos de experiência em ensinar inglês a alunos de diferentes níveis. 
      Sua missão é ajudar você a alcançar fluência e confiança ao se comunicar em inglês. Faça parte do English Exchange 
      e avance no seu aprendizado!
    </p>
  </div>
</section>
      
    </div>
  );
}

export default App;
