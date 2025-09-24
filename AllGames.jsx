
import React, { useState, useEffect, useRef } from "react";

export const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winningLine, setWinningLine] = useState([]);
    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");
    const [gameStarted, setGameStarted] = useState(false);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const calculateWinner = (squares) => {
        for (let line of winningCombinations) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line };
            }
        }
        return { winner: null, line: [] };
    };

    const { winner, line } = calculateWinner(board);
    const isDraw = !winner && board.every(cell => cell !== null);
    const winnerName = winner === "X" ? playerX : playerO;

    const handleClick = (index) => {
        if (!gameStarted || board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const result = calculateWinner(newBoard);
        if (result.winner) {
            setWinningLine(result.line);
        }
    };

    const startGame = () => {
        if (playerX && playerO) {
            setGameStarted(true);
        } else {
            alert("Please enter both player names before starting!");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinningLine([]);
        setGameStarted(false);
        setPlayerX("");
        setPlayerO("");
    };

    const continueGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinningLine([]);
    };

    return (
       <div className="flex flex-col items-center justify-center">
         <div className="flex flex-col items-center justify-center  bg-gray-100 w-96 rounded-xl max-w-md mx-auto shadow-lg p-2 ">
            <h2 className="text-3xl font-bold  text-gray-800 p-2 font-Merienda">Tic-Tac-Toe</h2>

            {!gameStarted ? (
                <div className="mb-6 w-full">
                    <input
                        type="text"
                        placeholder="Enter Player X Name"
                        value={playerX}
                        onChange={(e) => setPlayerX(e.target.value)}
                        className="mb-3 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter Player O Name"
                        value={playerO}
                        onChange={(e) => setPlayerO(e.target.value)}
                        className="mb-3 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                        onClick={startGame}
                        className="w-full px-6 py-2 bg-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-105"
                    >
                        Start Game
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        {board.map((cell, index) => (
                            <button
                                key={index}
                                className={`w-24 h-24 text-4xl font-bold flex items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-105 
                  ${winningLine.includes(index) ? "bg-green-500 text-white animate-pulse" :
                                        cell === "X" ? "bg-blue-500 text-white" :
                                            cell === "O" ? "bg-red-500 text-white" :
                                                "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                onClick={() => handleClick(index)}
                                disabled={winner || cell}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>

                    <div className="h-12 flex items-center justify-center">
                        {winner ? (
                            <h3 className="text-2xl font-bold text-green-600 animate-bounce">
                                🎉 {winnerName} Wins! 🎉
                            </h3>
                        ) : isDraw ? (
                            <h3 className="text-2xl font-bold text-yellow-600">
                                It's a Draw! 🤝
                            </h3>
                        ) : (
                            <h3 className="text-xl">
                                Next Player:{" "}
                                <span className={isXNext ? "text-blue-600 font-bold" : "text-red-600 font-bold"}>
                                    {isXNext ? playerX : playerO}
                                </span>
                            </h3>
                        )}
                    </div>

                    <div className="mt-4 flex gap-4">
                        {(winner || isDraw) && (
                            <>
                                <button
                                    onClick={continueGame}
                                    className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-105"
                                >
                                    Continue
                                </button>
                                <button
                                    onClick={resetGame}
                                    className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:bg-red-700 hover:scale-105"
                                >
                                    Reset
                                </button>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
       </div>
    );
};




// Game 1: Color Match Game
// const ColorMatchGame = () => {
//   const colors = ["red", "blue", "green", "yellow", "purple"];
//   const colorClasses = {
//     red: "bg-red-500",
//     blue: "bg-blue-500",
//     green: "bg-green-500",
//     yellow: "bg-yellow-500",
//     purple: "bg-purple-500"
//   };

//   const [targetColor, setTargetColor] = useState("");
//   const [targetText, setTargetText] = useState("");
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [gameActive, setGameActive] = useState(false);

//   useEffect(() => {
//     if (!gameActive) return;

//     const interval = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(interval);
//           setGameActive(false);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [gameActive]);

//   useEffect(() => {
//     if (gameActive) generateNewRound();
//   }, [gameActive]);

//   const startGame = () => {
//     setScore(0);
//     setTimeLeft(30);
//     setGameActive(true);
//   };

//   const generateNewRound = () => {
//     const newTargetColor = colors[Math.floor(Math.random() * colors.length)];
//     let newTargetText;
//     do {
//       newTargetText = colors[Math.floor(Math.random() * colors.length)];
//     } while (newTargetText === newTargetColor); // Ensure text and color are different

//     setTargetColor(newTargetColor);
//     setTargetText(newTargetText);
//   };

//   const handleAnswer = (isMatch) => {
//     const actualMatch = targetColor === targetText;
//     if (isMatch === actualMatch) {
//       setScore(score + 1);
//     } else {
//       setScore(Math.max(0, score - 1));
//     }
//     generateNewRound();
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-lg max-w-md mx-auto">
//       <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Color Match</h2>
//       <p className="text-center text-gray-700 mb-4">Is the word's color matching its meaning?</p>

//       {!gameActive && timeLeft === 0 && (
//         <div className="mb-4 text-center">
//           <p className="text-xl font-bold">Game Over!</p>
//           <p className="text-lg">Final Score: {score}</p>
//         </div>
//       )}

//       <div className="flex justify-between mb-4">
//         <div className="text-lg font-bold">Score: {score}</div>
//         <div className="text-lg font-bold">Time: {timeLeft}s</div>
//       </div>

//       {gameActive ? (
//         <>
//           <div className="flex justify-center items-center h-32 mb-6">
//             <span className={`text-4xl font-bold ${colorClasses[targetColor]} text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105`}>
//               {targetText.toUpperCase()}
//             </span>
//           </div>

//           <div className="flex justify-center space-x-4">
//             <button 
//               onClick={() => handleAnswer(true)} 
//               className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-green-600"
//             >
//               Match
//             </button>
//             <button 
//               onClick={() => handleAnswer(false)} 
//               className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-red-600"
//             >
//               No Match
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="flex justify-center">
//           <button 
//             onClick={startGame} 
//             className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
//           >
//             Start Game
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// Game 2: Number Memory Game
const NumberMemoryGame = () => {
    const [number, setNumber] = useState("");
    const [userGuess, setUserGuess] = useState("");
    const [stage, setStage] = useState(0);
    const [displayingNumber, setDisplayingNumber] = useState(false);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const startGame = () => {
        setScore(0);
        setStage(3);
        setGameOver(false);
        nextRound();
    };

    const nextRound = () => {
        const digits = stage;
        let newNumber = "";
        for (let i = 0; i < digits; i++) {
            newNumber += Math.floor(Math.random() * 10);
        }
        setNumber(newNumber);
        setUserGuess("");
        setDisplayingNumber(true);

        // Hide number after a delay
        setTimeout(() => {
            setDisplayingNumber(false);
        }, digits * 1000);
    };

    const handleSubmit = () => {
        if (userGuess === number) {
            setScore(score + 1);
            setStage(stage + 1);
            nextRound();
        } else {
            setGameOver(true);
        }
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Number Memory</h2>
            <p className="text-center text-gray-700 mb-4">Remember the number sequence</p>

            <div className="flex justify-between mb-4">
                <div className="text-lg font-bold">Score: {score}</div>
                <div className="text-lg font-bold">Digits: {stage}</div>
            </div>

            {!gameOver ? (
                <>
                    <div className="flex justify-center items-center h-32 mb-6 bg-white rounded-lg shadow-inner">
                        {displayingNumber ? (
                            <span className="text-4xl font-bold text-blue-600 animate-pulse">{number}</span>
                        ) : (
                            <>
                                {stage > 0 && !displayingNumber && (
                                    <input
                                        type="text"
                                        value={userGuess}
                                        onChange={(e) => setUserGuess(e.target.value)}
                                        className="w-3/4 p-3 text-xl text-center border-2 border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter the number"
                                        maxLength={stage}
                                    />
                                )}
                            </>
                        )}
                    </div>

                    {stage > 0 && !displayingNumber && (
                        <div className="flex justify-center">
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-purple-600"
                            >
                                Submit
                            </button>
                        </div>
                    )}

                    {stage === 0 && (
                        <div className="flex justify-center">
                            <button
                                onClick={startGame}
                                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
                            >
                                Start Game
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center mb-6">
                    <p className="text-xl font-bold mb-2">Game Over!</p>
                    <p className="mb-4">The number was: <span className="font-bold text-purple-600">{number}</span></p>
                    <p className="mb-4">Your final score: <span className="font-bold">{score}</span></p>
                    <button
                        onClick={startGame}
                        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-blue-600"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

// Game 3: Pattern Memory Game
const PatternMemoryGame = () => {
    const [pattern, setPattern] = useState([]);
    const [userPattern, setUserPattern] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [demonstrating, setDemonstrating] = useState(false);
    const [level, setLevel] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const colors = [
        { id: 0, color: "bg-red-500 hover:bg-red-600", activeColor: "bg-red-300" },
        { id: 1, color: "bg-blue-500 hover:bg-blue-600", activeColor: "bg-blue-300" },
        { id: 2, color: "bg-green-500 hover:bg-green-600", activeColor: "bg-green-300" },
        { id: 3, color: "bg-yellow-500 hover:bg-yellow-600", activeColor: "bg-yellow-300" }
    ];

    const startGame = () => {
        setPattern([]);
        setUserPattern([]);
        setLevel(1);
        setGameOver(false);
        setPlaying(true);
        setTimeout(addToPattern, 500);
    };

    const addToPattern = () => {
        const newPattern = [...pattern];
        newPattern.push(Math.floor(Math.random() * 4));
        setPattern(newPattern);
        demonstratePattern(newPattern);
    };

    const demonstratePattern = async (patternToShow) => {
        setDemonstrating(true);
        setUserPattern([]);

        for (let i = 0; i < patternToShow.length; i++) {
            await new Promise(resolve => {
                setTimeout(() => {
                    setActiveButton(patternToShow[i]);
                    setTimeout(() => {
                        setActiveButton(null);
                        resolve();
                    }, 400);
                }, 600);
            });
        }

        setDemonstrating(false);
    };

    const handleButtonClick = (buttonId) => {
        if (demonstrating || gameOver) return;

        setActiveButton(buttonId);
        setTimeout(() => setActiveButton(null), 300);

        const newUserPattern = [...userPattern, buttonId];
        setUserPattern(newUserPattern);

        // Check if user made a mistake
        if (newUserPattern[newUserPattern.length - 1] !== pattern[newUserPattern.length - 1]) {
            setGameOver(true);
            setPlaying(false);
            return;
        }

        // Check if user completed the current pattern
        if (newUserPattern.length === pattern.length) {
            setLevel(level + 1);
            setUserPattern([]);
            setTimeout(addToPattern, 1000);
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-100 to-pink-100 p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Pattern Memory</h2>
            <p className="text-center text-gray-700 mb-4">Remember and repeat the pattern</p>

            <div className="mb-4 text-center">
                <p className="text-lg font-bold">Level: {level}</p>
                {demonstrating && <p className="text-sm italic">Watch the pattern...</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {colors.map((item) => (
                    <button
                        key={item.id}
                        className={`w-full h-24 rounded-lg transition-all duration-300 transform hover:scale-105 ${activeButton === item.id ? item.activeColor : item.color}`}
                        onClick={() => handleButtonClick(item.id)}
                        disabled={demonstrating}
                    />
                ))}
            </div>

            {gameOver && (
                <div className="text-center mb-6">
                    <p className="text-xl font-bold mb-2">Game Over!</p>
                    <p className="mb-4">You reached level: <span className="font-bold">{level}</span></p>
                    <button
                        onClick={startGame}
                        className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600"
                    >
                        Play Again
                    </button>
                </div>
            )}

            {!playing && !gameOver && (
                <div className="flex justify-center">
                    <button
                        onClick={startGame}
                        className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600"
                    >
                        Start Game
                    </button>
                </div>
            )}
        </div>
    );
};

// Game 4: Word Scramble
const WordScrambleGame = () => {
    const words = [
        "REACT", "JAVASCRIPT", "TAILWIND", "CODE", "DEVELOPER",
        "PROGRAMMER", "ALGORITHM", "FUNCTION", "COMPONENT", "STYLE"
    ];

    const [currentWord, setCurrentWord] = useState("");
    const [scrambledWord, setScrambledWord] = useState("");
    const [userInput, setUserInput] = useState("");
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameActive, setGameActive] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {
        if (!gameActive) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    setGameActive(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [gameActive]);

    useEffect(() => {
        if (gameActive) generateNewWord();
    }, [gameActive]);

    const startGame = () => {
        setScore(0);
        setTimeLeft(60);
        setGameActive(true);
        setMessage("");
    };

    const generateNewWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        setCurrentWord(word);
        setScrambledWord(scrambleWord(word));
        setUserInput("");
    };

    const scrambleWord = (word) => {
        const wordArray = word.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        return wordArray.join('');
    };

    const handleSubmit = () => {
        if (userInput.toUpperCase() === currentWord) {
            setScore(score + 1);
            setMessage("Correct!");
            setMessageType("success");
            setTimeout(() => {
                setMessage("");
                generateNewWord();
            }, 1000);
        } else {
            setMessage("Try again!");
            setMessageType("error");
            setTimeout(() => {
                setMessage("");
            }, 1000);
        }
    };

    const handleSkip = () => {
        generateNewWord();
    };

    return (
        <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Word Scramble</h2>
            <p className="text-center text-gray-700 mb-4">Unscramble the word</p>

            <div className="flex justify-between mb-4">
                <div className="text-lg font-bold">Score: {score}</div>
                <div className="text-lg font-bold">Time: {timeLeft}s</div>
            </div>

            {!gameActive && timeLeft === 0 && (
                <div className="mb-4 text-center">
                    <p className="text-xl font-bold">Game Over!</p>
                    <p className="text-lg">Final Score: {score}</p>
                </div>
            )}

            {gameActive ? (
                <>
                    <div className="flex justify-center items-center h-24 mb-6 bg-white rounded-lg shadow-inner">
                        <span className="text-4xl font-bold tracking-widest text-teal-600">{scrambledWord}</span>
                    </div>

                    {message && (
                        <div className={`text-center mb-4 font-bold text-lg ${messageType === "success" ? "text-green-600" : "text-red-600"} animate-bounce`}>
                            {message}
                        </div>
                    )}

                    <div className="mb-4">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                            className="w-full p-3 text-xl text-center border-2 border-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your answer"
                        />
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-teal-600"
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleSkip}
                            className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-gray-600"
                        >
                            Skip
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex justify-center">
                    <button
                        onClick={startGame}
                        className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:bg-teal-600"
                    >
                        Start Game
                    </button>
                </div>
            )}
        </div>
    );
};

// Game 5: Reaction Time Game
// const ReactionTimeGame = () => {
//   const [gameState, setGameState] = useState("ready"); // ready, waiting, click, results
//   const [startTime, setStartTime] = useState(0);
//   const [reactionTime, setReactionTime] = useState(null);
//   const [bestTime, setBestTime] = useState(null);
//   const [attempts, setAttempts] = useState([]);

//   const startGame = () => {
//     setGameState("waiting");
//     setReactionTime(null);

//     // Random wait between 1-5 seconds
//     const waitTime = 1000 + Math.floor(Math.random() * 4000);
//     setTimeout(() => {
//       setStartTime(Date.now());
//       setGameState("click");
//     }, waitTime);
//   };

//   const handleClick = () => {
//     if (gameState === "ready") {
//       startGame();
//     } else if (gameState === "waiting") {
//       // Clicked too early
//       setGameState("ready");
//     } else if (gameState === "click") {
//       const endTime = Date.now();
//       const time = endTime - startTime;
//       setReactionTime(time);

//       const newAttempts = [...attempts, time].slice(-5); // Keep last 5 attempts
//       setAttempts(newAttempts);

//       if (bestTime === null || time < bestTime) {
//         setBestTime(time);
//       }

//       setGameState("results");
//     } else if (gameState === "results") {
//       setGameState("ready");
//     }
//   };

//   const getBackgroundColor = () => {
//     switch (gameState) {
//       case "waiting": return "bg-red-500";
//       case "click": return "bg-green-500";
//       case "results": return "bg-blue-500";
//       default: return "bg-gray-500";
//     }
//   };

//   const getMessage = () => {
//     switch (gameState) {
//       case "ready": return "Click to start";
//       case "waiting": return "Wait for green...";
//       case "click": return "CLICK NOW!";
//       case "results": return `${reactionTime}ms - Click to continue`;
//       default: return "";
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-xl shadow-lg max-w-md mx-auto">
//       <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Reaction Time</h2>
//       <p className="text-center text-gray-700 mb-4">Test how quickly you can react</p>

//       <div className="mb-4 flex justify-between">
//         <div className="text-lg">
//           <span className="font-bold">Best:</span> {bestTime ? `${bestTime}ms` : "N/A"}
//         </div>
//         <div className="text-lg">
//           <span className="font-bold">Last:</span> {reactionTime ? `${reactionTime}ms` : "N/A"}
//         </div>
//       </div>

//       <div 
//         className={`flex justify-center items-center h-48 mb-6 rounded-lg shadow transition-all duration-300 transform hover:scale-105 ${getBackgroundColor()} cursor-pointer`}
//         onClick={handleClick}
//       >
//         <span className="text-2xl font-bold text-white">{getMessage()}</span>
//       </div>

//       <div className="grid grid-cols-5 gap-1 mb-2">
//         {attempts.map((time, index) => (
//           <div key={index} className="h-2 bg-blue-400 rounded-full" style={{ opacity: 0.5 + (index * 0.1) }}></div>
//         ))}
//       </div>

//       <div className="text-sm text-center text-gray-600">
//         {attempts.length > 0 ? (
//           <p>Average: {Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length)}ms</p>
//         ) : (
//           <p>Complete attempts to see your average</p>
//         )}
//       </div>
//     </div>
//   );
// };

// Main App Component
export const MindGamesCollection = () => {
    const [activeGame, setActiveGame] = useState(0);
    const games = [
        // { id: 0, name: "Color Match", component: <ColorMatchGame /> },
        { id: 0, name: "Number Memory", component: <NumberMemoryGame /> },
        { id: 1, name: "Pattern Memory", component: <PatternMemoryGame /> },
        { id: 2, name: "Word Scramble", component: <WordScrambleGame /> },
        // { id: 4, name: "Reaction Time", component: <ReactionTimeGame /> }
    ];

    return (
        <div className="p-4  mt-10">
            <h1 className="text-4xl font-bold text-center p text-gray-800 font-Merienda">Mind Games</h1>
            <p className="text-center p-2 text-slate-400 font-Josefin"># Click the below button for change to other game</p>

            <div className="flex justify-center mb-6 overflow-x-auto">
                <div className="flex space-x-2">
                    {games.map((game) => (
                        <button
                            key={game.id}
                            className={`px-4 py-2 rounded-lg transition-all duration-300 transform  ${activeGame === game.id
                                    ? "bg-indigo-600 text-white font-bold"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            onClick={() => setActiveGame(game.id)}
                        >
                            {game.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="transition-all duration-500 transform ">
                {games[activeGame].component}
            </div>
        </div>
    );
};






export const MemoryGame = () => {
    const cardsArray = ["🍎", "🍌", "🍇", "🍉", "🍎", "🍌", "🍇", "🍉"].sort(() => Math.random() - 0.5);
    const [cards, setCards] = useState(cardsArray.map((card) => ({ emoji: card, flipped: false, matched: false })));
    const [selectedCards, setSelectedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);

    useEffect(() => {
        // Check if all cards are matched
        if (cards.every(card => card.matched) && cards.length > 0) {
            setGameComplete(true);
        }
    }, [cards]);

    const handleCardClick = (index) => {
        // Prevent clicks if already two cards are flipped or the card is already flipped or matched
        if (selectedCards.length === 2 || cards[index].flipped || cards[index].matched) return;

        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);

        const newSelectedCards = [...selectedCards, index];
        setSelectedCards(newSelectedCards);

        if (newSelectedCards.length === 2) {
            setMoves(moves + 1);
            const firstIndex = newSelectedCards[0];

            if (cards[firstIndex].emoji === cards[index].emoji) {
                // Match found
                setTimeout(() => {
                    const matchedCards = [...newCards];
                    matchedCards[firstIndex].matched = true;
                    matchedCards[index].matched = true;
                    setCards(matchedCards);
                    setSelectedCards([]);
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    const resetCards = [...newCards];
                    resetCards[firstIndex].flipped = false;
                    resetCards[index].flipped = false;
                    setCards(resetCards);
                    setSelectedCards([]);
                }, 1000);
            }
        }
    };

    const resetGame = () => {
        const shuffledCards = [...cardsArray].sort(() => Math.random() - 0.5);
        setCards(shuffledCards.map((card) => ({ emoji: card, flipped: false, matched: false })));
        setSelectedCards([]);
        setMoves(0);
        setGameComplete(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-100 to-blue-100 rounded-xl max-w-md mx-auto shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800 font-Merienda">Memory Card Game</h2>

            <div className="mb-4 flex justify-between w-full">
                <p className="text-lg font-medium text-indigo-700">Moves: {moves}</p>
                <button
                    onClick={resetGame}
                    className="px-4 py-1 bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105"
                >
                    Restart
                </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative w-16 h-16 md:w-24 md:h-24 cursor-pointer perspective-500`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div
                            className={`absolute w-full h-full transition-all duration-500 transform-style-3d ${card.flipped ? 'rotate-y-180' : ''
                                }`}
                        >
                            {/* Front of card (question mark) */}
                            <div className={`absolute w-full h-full flex items-center justify-center rounded-lg bg-indigo-500 text-white text-2xl font-bold backface-hidden shadow-md border-2 ${card.matched ? 'border-green-500' : 'border-indigo-600'
                                }`}>
                                ❓
                            </div>

                            {/* Back of card (emoji) */}
                            <div className={`absolute w-full h-full flex items-center justify-center rounded-lg bg-white text-4xl rotate-y-180 backface-hidden shadow-md border-2 ${card.matched ? 'border-green-500 bg-green-100' : 'border-indigo-300'
                                }`}>
                                {card.emoji}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {gameComplete && (
                <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-center animate-bounce">
                    <p className="text-xl font-bold text-green-700">Congratulations!</p>
                    <p className="text-green-700">You completed the game in {moves} moves</p>
                </div>
            )}
        </div>
    );
};

// /* Add these custom styles to make the 3D card flipping work */
// const styles = `
// .perspective-500 {
//   perspective: 500px;
// }
// .transform-style-3d {
//   transform-style: preserve-3d;
// }
// .backface-hidden {
//   backface-visibility: hidden;
// }
// .rotate-y-180 {
//   transform: rotateY(180deg);
// }
// `;

// // Add the custom styles to the document
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.type = "text/css";
//   styleSheet.innerText = styles;
//   document.head.appendChild(styleSheet);
// }




export const SnakeGame = () => {
    // Game configuration
    const [gridSize, setGridSize] = useState({ rows: 10, cols: 30 });
    const [cellSize, setCellSize] = useState(20);
    const [gameSpeed, setGameSpeed] = useState(200); // ms
  
    // Game state
    const [snake, setSnake] = useState([]);
    const [food, setFood] = useState({});
    const [direction, setDirection] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [isGameRunning, setIsGameRunning] = useState(false);
  
    // Score tracking
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(
      localStorage.getItem("snakeHighScore") ?
        parseInt(localStorage.getItem("snakeHighScore")) : 0
    );
  
    // Refs for form inputs and game loop
    const rowsInputRef = useRef(null);
    const colsInputRef = useRef(null);
    const gameLoopRef = useRef(null);
  
    // Initialize snake and food
    const initGame = () => {
      // Start snake in the middle of the grid
      const startX = Math.floor(gridSize.cols / 2);
      const startY = Math.floor(gridSize.rows / 2);
  
      setSnake([{ x: startX, y: startY }]);
      setFood(generateFood([{ x: startX, y: startY }]));
      setDirection("RIGHT");
      setScore(0);
      setIsGameOver(false);
    };
  
    // Generate food in a position not occupied by the snake
    const generateFood = (currentSnake) => {
      const snakePositions = new Set(
        currentSnake.map(segment => `${segment.x},${segment.y}`)
      );
  
      let newFood;
      do {
        newFood = {
          x: Math.floor(Math.random() * gridSize.cols),
          y: Math.floor(Math.random() * gridSize.rows)
        };
      } while (snakePositions.has(`${newFood.x},${newFood.y}`));
  
      return newFood;
    };
  
    // Game movement logic
    const moveSnake = () => {
      if (isGameOver || !isGameRunning) return;
  
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
  
        // Move head based on direction
        switch (direction) {
          case "UP": head.y -= 1; break;
          case "DOWN": head.y += 1; break;
          case "LEFT": head.x -= 1; break;
          case "RIGHT": head.x += 1; break;
          default: break;
        }
  
        // Check for border collision
        if (
          head.x < 0 ||
          head.x >= gridSize.cols ||
          head.y < 0 ||
          head.y >= gridSize.rows
        ) {
          handleGameOver();
          return prevSnake;
        }
  
        // Check for self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          handleGameOver();
          return prevSnake;
        }
  
        // Add new head
        newSnake.unshift(head);
  
        // Check for food collision
        if (head.x === food.x && head.y === food.y) {
          // Eat food (snake grows)
          setScore(prevScore => prevScore + 10);
          setFood(generateFood(newSnake));
        } else {
          // Remove tail
          newSnake.pop();
        }
  
        return newSnake;
      });
    };
  
    const handleGameOver = () => {
      setIsGameOver(true);
      setIsGameRunning(false);
  
      // Update high score if needed
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("snakeHighScore", score.toString());
      }
    };
  
    const startGame = () => {
      if (isGameRunning) return;
      initGame();
      setIsGameRunning(true);
    };
  
    const restartGame = () => {
      setIsGameRunning(false);
      initGame();
      setIsGameRunning(true);
    };
  
    const updateGridSize = () => {
      const newRows = parseInt(rowsInputRef.current.value) || 5;
      const newCols = parseInt(colsInputRef.current.value) || 20;
  
      // Enforce minimum size
      const rows = Math.max(newRows, 5);
      const cols = Math.max(newCols, 10);
  
      setGridSize({ rows, cols });
      setIsGameRunning(false);
      setIsGameOver(false);
    };
  
    // Handle keyboard controls
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (!isGameRunning) return;
  
        const { key } = event;
  
        // Prevent direction reversal (can't go in the opposite direction)
        if (key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
        else if (key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
        else if (key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
        else if (key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
      };
  
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }, [direction, isGameRunning]);
  
    // Game loop using requestAnimationFrame for smoother animation
    useEffect(() => {
      if (!isGameRunning) return;
  
      let lastTime = 0;
  
      const gameLoop = (timestamp) => {
        if (!isGameRunning) return;
  
        if (timestamp - lastTime >= gameSpeed) {
          moveSnake();
          lastTime = timestamp;
        }
  
        gameLoopRef.current = requestAnimationFrame(gameLoop);
      };
  
      gameLoopRef.current = requestAnimationFrame(gameLoop);
  
      return () => {
        if (gameLoopRef.current) {
          cancelAnimationFrame(gameLoopRef.current);
        }
      };
    }, [isGameRunning, gameSpeed, direction]);
  
    // Initialize game when component mounts
    useEffect(() => {
      initGame();
      return () => {
        if (gameLoopRef.current) {
          cancelAnimationFrame(gameLoopRef.current);
        }
      };
    }, [gridSize]);
  
    // Generate the grid cells
    const renderGrid = () => {
      const grid = [];
  
      for (let y = 0; y < gridSize.rows; y++) {
        for (let x = 0; x < gridSize.cols; x++) {
          const isSnakeCell = snake.some(segment => segment.x === x && segment.y === y);
          const isHead = isSnakeCell && snake[0].x === x && snake[0].y === y;
          const isFoodCell = food.x === x && food.y === y;
  
          let cellClass = "bg-gray-200";
  
          if (isHead) {
            cellClass = "bg-green-600";
          } else if (isSnakeCell) {
            cellClass = "bg-green-400";
          } else if (isFoodCell) {
            cellClass = "bg-red-500";
          }
  
          grid.push(
            <div
              key={`${x}-${y}`}
              className={`${cellClass} rounded-sm border border-gray-300`}
              style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
            />
          );
        }
      }
  
      return grid;
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-gray-700 rounded-lg shadow-lg p-6  w-fit ">
  
  
          {/* Score Display */}
          <div className="flex justify-between mb-2">
            <div className="bg-gray-600 rounded-lg p-2 text-white w-32 text-center">
              <p className="text-sm">Score</p>
              <p className="text-xl font-bold">{score}</p>
            </div>
            <h1 className="text-3xl font-bold text-center mb-4 text-white font-Merienda">Snake Game</h1>
            <div className="bg-gray-600 rounded-lg p-2 text-white w-32 text-center">
              <p className="text-sm">High Score</p>
              <p className="text-xl font-bold">{highScore}</p>
            </div>
          </div>
  
          {/* Game Controls */}
          <div className="flex flex-wrap gap-2 mb-4 justify-between">
            <div className="flex gap-2">
              <button
                onClick={startGame}
                disabled={isGameRunning}
                className={`px-4 py-2 rounded font-bold ${isGameRunning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
              >
                Start
              </button>
  
              <button
                onClick={restartGame}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-bold"
              >
                Restart
              </button>
            </div>
  
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <label className="text-white mr-1">Rows:</label>
                <input
                  type="number"
                  ref={rowsInputRef}
                  defaultValue={gridSize.rows}
                  min="5"
                  max="20"
                  className="w-16 p-1 rounded"
                />
              </div>
  
              <div className="flex items-center">
                <label className="text-white mr-1">Cols:</label>
                <input
                  type="number"
                  ref={colsInputRef}
                  defaultValue={gridSize.cols}
                  min="10"
                  max="40"
                  className="w-16 p-1 rounded"
                />
              </div>
  
              <button
                onClick={updateGridSize}
                className="px-2 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
  
          {/* Game Status */}
          {isGameOver && (
            <div className="bg-red-500 text-white text-center py-2 px-4 rounded mb-4 font-bold">
              Game Over! Your score: {score}
            </div>
          )}
  
          {/* Game Grid */}
          <div className="flex justify-center mb-4">
            <div
              className="grid gap-px bg-gray-300 p-1 rounded"
              style={{
                gridTemplateColumns: `repeat(${gridSize.cols}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize.rows}, ${cellSize}px)`
              }}
            >
              {renderGrid()}
            </div>
          </div>
  
          {/* Instructions */}
          <div className="bg-gray-600 rounded p-3 text-white text-sm text-center">
  
            <p>Use arrow keys to control the snake. Eat the red food to grow and earn points.</p>
            <p>Avoid hitting the walls or yourself!</p>
          </div>
        </div>
      </div>
    );
  };
  