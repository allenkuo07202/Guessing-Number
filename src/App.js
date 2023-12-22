import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [guessnumber, setGuessnumber] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>猜數字遊戲</h1>
        <p className="question">1 到 100 之間的數字，你猜是多少？</p>
        <form>
          <input type="text" id="guessField" />
          <input type="submit" value="猜!" id="guessSubmit" />
          <input type="submit" value="答案" id="answerSubmit" />
          <input type="submit" value="再玩一次" id="resetSubmit" />
          {/* <input id="number" type="text" placeholder="Please input number!" value={guessnumber} /> */}
        </form>

        <p className="message"></p>
        <p className="answer"></p>
        <p className="second"></p>



        <RandomNumber />
        <GuessBar /><GuessButton onClick={handleClick} />

      </header>

    </div>
  );
}

function RandomNumber() {
  return (
    Math.floor(Math.random() * 100) + 1
  );
}

function GuessBar() {
  return (
    <form>
      {/* <input id="number" type="text" placeholder="Please input number!" value={guessnumber} /> */}
    </form>
  );
}

function GuessButton({ onClick }) {
  return (
    <button onClick={onClick}>
      猜！
    </button>
  );
}

function handleClick(event) {
  console.log('value is:', event.number.value);
}




// function GuessNumber() {
//   return (
//     <div classNAme="question">1 到 100 之間的數字，你猜是多少？
//       <h1>猜數字遊戲</h1>
//     </div>
//   );
// }
export default App;
