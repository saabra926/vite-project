import { useState } from "react";

export default function Game() {
  const [number, setNumber] = useState(generateNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const checkGuess = () => {
    const userGuess = parseInt(guess);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
      setMessage("⚠️ Please enter a number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
    } else if (userGuess < number) {
      setMessage("📉 Too low! Try again.");
    } else {
      setMessage("📈 Too high! Try again.");
    }
  };

  const resetGame = () => {
    setNumber(generateNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-dark">
      <div className="text-center shadow p-4 rounded bg-white">
        <h1 className="mb-3">🎯 Guess the Number</h1>
        <p>I'm thinking of a number between 1 and 100.</p>

        <input
          type="number"
          className="form-control my-3"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />

        <div className="d-grid gap-2 col-6 mx-auto mb-3">
          <button onClick={checkGuess} className="btn btn-primary">
            Check Guess
          </button>
          <button onClick={resetGame} className="btn btn-secondary">
            Reset Game
          </button>
        </div>

        {message && <div className="alert alert-info mt-3">{message}</div>}

        <p className="mt-4 text-muted">Dawood Rehman</p>
      </div>
    </div>
  );
}