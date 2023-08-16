"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

const QuestionBox = ({ questions, handlScore, handleEndOfQuiz }) => {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState();
  const [colorIndex, setColorIndex] = useState(5);
  console.log(colorIndex);
  useEffect(() => {
    setColorIndex("");
  }, []);
  const handleAnswer = (e, answer, i) => {
    if (answer) {
      handlScore();
      setCorrect(true);
    }
    setColorIndex(i);
    setTimeout(() => {
      handlScore(index);
      if (index < questions.length - 1) {
        setIndex(index + 1);
      }
      setColorIndex("");
    }, 1000);
    if (index >= questions.length - 1) {
      handleEndOfQuiz();
    }
  };

  return (
    <div className="w-full md:w-[60%] md:py-[56px] md:mx-auto flex flex-col md:flex-row px-4 md:px-1 py-5 bg-yellow-400 rounded-lg">
      <div className="md:w-1/2  md:gap-10 p-4 flex flex-col gap-2">
        <p className="w-full text-4xl font-bold text-center md:text-left md:text-6xl">
          Question {index + 1}/{questions.length}
        </p>
        <p className="text-xl font-medium md:text-2xl">
          {questions[index].questionText}
        </p>
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 md:pr-10">
        {questions[index].answerOptions.map((item, i) => {
          return (
            <div
              key={i + 1}
              onClick={(e) => handleAnswer(e, item.isCorrect, i)}
              className={clsx(
                "border-2 border-black p-2 rounded-xl cursor-pointer bg-yellow-400",
                { "bg-green-500": item.isCorrect && colorIndex === i },
                { "bg-red-500": !item.isCorrect && colorIndex === i },
                { "bg-yellow-400": colorIndex === "" }
              )}
            >
              {item.answerText}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBox;
