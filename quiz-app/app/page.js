"use client";
import QuestionBox from "@/components/QuestionBox";
import "./globals.css";
import questions from "@/data/data";
import { useState } from "react";
import WelcomeBox from "@/components/WelcomeBox";
import Header from "@/components/Header";
import EndBox from "@/components/EndBox";

export default function Home() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const handlScore = () => {
    setScore(score + 1);
  };
  const handleEndOfQuiz = (finish) => {
    setEnd(true);
    setIsStart(false);
  };
  const handleStart = (name) => {
    if (name != "") {
      setName(name);
      setIsStart(true);
    }
    setIsWelcome(false);
    setIsStart(true);
  };
  const handleStartAgain = () => {
    setName("");
    setScore(0);
    setIsStart(false);
    setEnd(false);
    setIsWelcome(true);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center px-4 bg-black">
      <Header name={name} score={score} />
      {isStart && (
        <QuestionBox
          questions={questions}
          handlScore={handlScore}
          handleEndOfQuiz={handleEndOfQuiz}
        />
      )}
      {isWelcome && <WelcomeBox handleStart={handleStart} />}
      {end && (
        <EndBox name={name} score={score} handleStartAgain={handleStartAgain} />
      )}
      {!isWelcome && (
        <div className="w-full ml-[20%] mt-6">
          <button
            onClick={() => handleStartAgain()}
            className="px-6 py-2 rounded-md bg-yellow-400"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
