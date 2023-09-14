import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';
import {BrowserRouter} from 'react-router-dom';
import "./index.css";

function App() {
  return (
     <div>
      <TicTacToe/>
     </div>
  );
}

export default App;
