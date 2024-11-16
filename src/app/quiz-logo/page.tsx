"use client"

import { useState } from "react";
import AnswerButton from "../_components/answer-button";
import { questions } from "../_data/questions";

export default function QuizLogo() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const question = questions[currentQuestion];

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score => score + 1);
            console.log("correct");
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion => currentQuestion + 1);
        } else {
            setFinished(true);
        }
    }

    const restart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setFinished(false);
    }

    return (
        <div className="bg-white p-6 mt-20 mb-6 max-w-sm mx-auto rounded-xl">
            <div className={`${finished ? 'hidden' : ''}`}>
                <h1 className="text-xl text-black">{question.question}</h1>

                <div className="grid grid-cols-3 gap-4 mt-6 ">
                    {question.options.map((option) => (
                        <AnswerButton
                            key={option.id}
                            item={option}
                            onClick={() => handleAnswer(option.isCorrect)}
                        />
                    ))}
                </div>
            </div>

            <p className={`my-4 text-black text-center ${finished ? 'text-3xl' : ''}`}>Tu puntuación es: {score}/{questions.length}</p>
            <button
                className={`${finished ? '' : 'hidden'} mt-4 mx-auto bg-black hover:bg-slate-800 text-white rounded-lg p-4 my-4 font-semibold text-center flex items-center justify-center`}
                onClick={() => restart()}
            >
                ¡Volver a empezar!
            </button>
        </div>
    );
}
