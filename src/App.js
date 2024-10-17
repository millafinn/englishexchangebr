// import logo from './fundos.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className='banner-container'>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contatos</a></li>
          <li><a href="#blog">Fórum</a></li>
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
    </div>
  );
}

export default App;
