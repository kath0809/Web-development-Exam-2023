import { useState } from 'react';

const Quiz = () => {
    // questions is an array of objects. Each object contains a question, an array of choices,
    // and the correct answer.
    // Questions, answers and correct answer is from: https://www.welovequizzes.com/formula-1-quiz-questions-and-answers/

    const questions = [
        {
            question: 'Who won the 2021 Formula 1 championship?',
            choices: ['Lewis Hamilton', 'Max Verstappen', 'Valtteri Bottas', 'Sergio Perez'],
            correctAnswer: 'Max Verstappen'
        },
        {
            question: 'The title “Grand Prix” was first used for a motor race in which country?',
            choices: ['France', 'Italy', 'The United States', 'Germany'],
            correctAnswer: 'France'
        },
        {
            question: 'Which driver has won the most F1 world championships?',
            choices: ['Lewis Hamilton', 'Michael Schumacher', 'Sebastian Vettel', 'Ayrton Senna'],
            correctAnswer: 'Michael Schumacher'
        },
        {
            question: 'What is the nickname of Ferrari – one of the most successful racing teams in F1 history?',
            choices: ['The Dancing Dinkey', 'The Prancing Horse', 'The Red Baron'],
            correctAnswer: 'The Prancing Horse'
        },
        {
            question: 'Juan Manuel Fangio, one of the greatest F1 drivers, took his last world championship title in which year?',
            choices: ['1956', '1957', '1958'],
            correctAnswer: '1957'
        }
    ];

    // State variables are used to store the current question, the selected answer, and the score.
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);

    // handleAnswerChange is called when an answer is selected.
    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(e.currentTarget.value);
    };

    // handleAnswer is for when the user clicks the Submit Answer button.
    // if selected answer is correct, it adds +1 to the score.
    const handleAnswer = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Set the current question to the next question(+1) and resets the selected answer.
        setSelectedAnswer('');
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        
        <section className='mt-5 fs-3 text-info border border-4 border-danger-subtle p-3'>
            {currentQuestion < questions.length ? (
                // If there are any question to show, display question and the following choises.
            <>
            <p className=''>{questions[currentQuestion].question}</p>
            {/* Show the current question */}

            {questions[currentQuestion].choices.map((choice, index) => (
            // Map choices and display them with radio buttons
            <div className='text-white fs-5' key={index}>
                <input className='m-3'
                type= "radio"
                value= {choice}
                checked= {selectedAnswer === choice}
                onChange= {handleAnswerChange}/>
                {choice}
                </div>))}

                <button className='submitBtn btn btn-outline-secondary text-white m-2' onClick={handleAnswer}>Submit Answer</button>
                </>
                ):
                (// Display score
                <p className='text-primary'>Thats it, your score is: {score} points 🔥 out of {questions.length} questions</p>
            )}

        </section>
    )
};

export default Quiz;