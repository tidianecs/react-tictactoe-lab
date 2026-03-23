import Square from "./Square";
import { useState } from "react";

function calculateWinner(squares) {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6],
    ];
    for (let [a,b,c] of lines) {
        if (squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index) {
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        const newSquares = [...squares];
        newSquares[index] = xIsNext ? "X" : "O";

        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }
    
    const winner = calculateWinner(squares);

    return (
        <>
        <div>
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>

        <div>
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>

        <div>
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>

        <div>
            <h2>
                {winner ? "Winner: " + winner : "Next: " + (xIsNext ? "X" : "O")}
            </h2>
        </div>

        <div>
            <button onClick={resetGame}>
                Reset
            </button>
        </div>
        </>
        
    );
}