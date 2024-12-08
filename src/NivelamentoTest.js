import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; 
import "./Nivelamento.css"; 

const questions = [
  // Nível Básico
  {
    question: "I ______ to the park every Sunday.",
    options: ["a) goes", "b) am going", "c) go", "d) going"],
    correctAnswer: "c",
  },
  {
    question: "She ______ already finished her homework.",
    options: ["a) has", "b) have", "c) had", "d) is"],
    correctAnswer: "a",
  },
  {
    question: "They ______ at the restaurant now.",
    options: ["a) is eating", "b) are eating", "c) eats", "d) eat"],
    correctAnswer: "b",
  },
  {
    question: "I ______ my keys in the car.",
    options: ["a) leave", "b) have left", "c) leaving", "d) left"],
    correctAnswer: "b",
  },
  {
    question: "What is the opposite of 'success'?",
    options: ["a) victory", "b) defeat", "c) achievement", "d) progress"],
    correctAnswer: "b",
  },

  // Nível Intermediário
  {
    question: "Qual das frases abaixo está correta?",
    options: [
      "a) If I would have known, I would have told you.",
      "b) If I had known, I would have told you.",
      "c) If I know, I would have told you.",
      "d) If I had known, I would tell you.",
    ],
    correctAnswer: "b",
  },
  {
    question: "What does 'benevolent' mean?",
    options: ["a) cruel", "b) kind", "c) indifferent", "d) hostile"],
    correctAnswer: "b",
  },
  {
    question: "Choose the correct synonym for 'happy'.",
    options: ["a) sad", "b) joyful", "c) angry", "d) bored"],
    correctAnswer: "b",
  },
  {
    question: "Which word means 'to communicate with someone'? ",
    options: ["a) ignore", "b) contact", "c) evade", "d) dismiss"],
    correctAnswer: "b",
  },
  {
    question: "Qual a forma correta da frase?",
    options: [
      "a) He didn't told me anything.",
      "b) He didn't tell me anything.",
      "c) He doesn't told me anything.",
      "d) He don't tell me anything.",
    ],
    correctAnswer: "b",
  },

  // Nível Avançado
  {
    question: "What does 'ubiquitous' mean?",
    options: ["a) rare", "b) everywhere", "c) specific", "d) hidden"],
    correctAnswer: "b",
  },
  {
    question: "What is the meaning of 'arduous'?",
    options: ["a) easy", "b) difficult", "c) fast", "d) enjoyable"],
    correctAnswer: "b",
  },
  {
    question: "Which is the correct form?",
    options: [
      "a) I wish I was taller.",
      "b) I wish I were taller.",
      "c) I wish I be taller.",
      "d) I wish I will taller.",
    ],
    correctAnswer: "b",
  },
  {
    question: "What does 'pensive' mean?",
    options: ["a) cheerful", "b) thoughtful", "c) angry", "d) confused"],
    correctAnswer: "b",
  },
  {
    question: "Which of these sentences is correct?",
    options: [
      "a) He said that he go to the party.",
      "b) He said that he gone to the party.",
      "c) He said that he would go to the party.",
      "d) He said that he going to the party.",
    ],
    correctAnswer: "c",
  },
  {
    question: "What does 'futility' mean?",
    options: ["a) usefulness", "b) pointlessness", "c) success", "d) benefit"],
    correctAnswer: "b",
  },
  {
    question: "What is the antonym of 'generous'?",
    options: ["a) stingy", "b) kind", "c) helpful", "d) supportive"],
    correctAnswer: "a",
  },
  {
    question: "What does 'vivid' mean?",
    options: ["a) dull", "b) bright", "c) dark", "d) faded"],
    correctAnswer: "b",
  },
  {
    question: "Which of these is a correct sentence?",
    options: [
      "a) She can plays the piano.",
      "b) She can play the piano.",
      "c) She can play piano.",
      "d) She can playing the piano.",
    ],
    correctAnswer: "b",
  },
  {
    question: "What is the synonym of 'difficult'?",
    options: ["a) hard", "b) easy", "c) simple", "d) effortless"],
    correctAnswer: "a",
  },
];

function NivelamentoTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(
    Array(questions.length).fill(null)
  );
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const handleBackClick = () => {
    window.location.href = "/"; // Redireciona para a página inicial
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const updatedResponses = [...responses];
    updatedResponses[currentQuestion] = value;
    setResponses(updatedResponses);
    setError(false); // Limpa o erro ao selecionar uma resposta
  };

  const handleNext = () => {
    if (responses[currentQuestion] === null) {
      setError(true);
      return;
    }
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    const score = responses.reduce((total, response, index) => {
      return response === questions[index].correctAnswer ? total + 1 : total;
    }, 0);
    setResult(score);
  };

  const handleRestart = () => {
    setResponses(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setResult(null);
    setError(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={handleBackClick}
        style={{
          marginBottom: "20px",
          background: "transparent",
          border: "none",
          color: "#f44336",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="1x" /> Voltar para a Home
      </button>

      <h1 style={{ color: "blue" }}>Teste de Nivelamento de Inglês</h1>

      {result === null ? (
        <>
          <h2>
            Pergunta {currentQuestion + 1} de {questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name={`question${currentQuestion}`}
                  value={option.charAt(0)} // Aqui usamos o índice da opção como valor
                  onChange={handleChange}
                  checked={responses[currentQuestion] === option.charAt(0)}
                  style={{
                    marginRight: "10px",
                    accentColor:
                      error && responses[currentQuestion] === null
                        ? "red"
                        : undefined,
                  }}
                />
                {option}
              </label>
            </div>
          ))}

          {error && (
            <div style={{ marginTop: "10px", color: "red" }}>
              <span>Selecione uma resposta antes de avançar.</span>
            </div>
          )}

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handlePrevious}
              style={{
                marginRight: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "10px 20px",
              }}
            >
              Voltar
            </button>
            <button
              onClick={
                currentQuestion === questions.length - 1
                  ? handleSubmit
                  : handleNext
              }
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                padding: "10px 20px",
              }}
            >
              {currentQuestion === questions.length - 1
                ? "Finalizar"
                : "Próximo"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2>
            Resultado: {result} de {questions.length}
          </h2>
          <p>
            {result >= 15
              ? "Parabéns! Você está em um nível avançado."
              : result >= 10
              ? "Bom trabalho! Você está em um nível intermediário."
              : "Continue praticando! Você está em um nível básico."}
          </p>
          <button
            onClick={handleRestart}
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              padding: "10px 20px",
            }}
          >
            Fazer o teste novamente
          </button>
        </div>
      )}
    </div>
  );
}

export default NivelamentoTest;
