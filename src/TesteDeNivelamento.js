import React, { useState } from 'react';
import './App.css';

function TesteDeNivelamento() {
  const [questions] = useState([
    {
      question: "Qual é o passado de 'go'?",
      options: ["Went", "Gone", "Goes"],
      answer: "Went",
    },
    {
      question: "Como se diz 'Eu tenho 20 anos' em inglês?",
      options: ["I have 20 years", "I am 20 years old", "I be 20 years old"],
      answer: "I am 20 years old",
    },
    {
      question: "Qual é a tradução de 'livro'?",
      options: ["Book", "Libro", "Livre"],
      answer: "Book",
    },
    {
      question: "Qual a forma correta: 'He ___ playing football now'?",
      options: ["is", "are", "am"],
      answer: "is",
    },
    {
      question: "Traduza 'Eu gosto de estudar inglês':",
      options: ["I like study English", "I like studying English", "I like studies English"],
      answer: "I like studying English",
    },
  ]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="test-container">
      <h2>Teste de Nivelamento</h2>
      {isFinished ? (
        <div className="results">
          <h3>Resultado</h3>
          <p>
            Você acertou {score} de {questions.length} questões.
          </p>
          <p>
            Seu nível é:{" "}
            {score <= 2
              ? "Iniciante"
              : score <= 4
              ? "Intermediário"
              : "Avançado"}
          </p>
          <button onClick={resetTest} className="enrol-btn">
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="question-section">
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TesteDeNivelamento;
