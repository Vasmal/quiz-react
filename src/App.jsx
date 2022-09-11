import React, { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ onClickTryAgain, counter }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {counter} ответа из {questions.length}
      </h2>
      <button onClick={onClickTryAgain}>Попробовать снова</button>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const progress = (step / questions.length) * 100;
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progress}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    index === question.correct && setCounter(counter + 1);
  };
  const onClickTryAgain = () => {
    setStep(0);
    setCounter(0);
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result onClickTryAgain={onClickTryAgain} counter={counter} />
      )}
    </div>
  );
}

export default App;
