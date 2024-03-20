import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Note: eval() has security risks, consider safer alternatives in production code
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="input">{input || "0"}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => addToInput('1')}>1</button>
        <button onClick={() => addToInput('2')}>2</button>
        <button onClick={() => addToInput('3')}>3</button>
        <button onClick={() => addToInput('+')}>+</button>
        <button onClick={() => addToInput('4')}>4</button>
        <button onClick={() => addToInput('5')}>5</button>
        <button onClick={() => addToInput('6')}>6</button>
        <button onClick={() => addToInput('-')}>-</button>
        <button onClick={() => addToInput('7')}>7</button>
        <button onClick={() => addToInput('8')}>8</button>
        <button onClick={() => addToInput('9')}>9</button>
        <button onClick={() => addToInput('*')}>*</button>
        <button onClick={() => addToInput('0')}>0</button>
        <button onClick={() => addToInput('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addToInput('/')}>/</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};


export default App
