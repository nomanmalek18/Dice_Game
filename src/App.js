import { useState } from 'react';
import './App.css';
import GamePlay from './Components/GamePlay';
import StartGame from './Components/StartGame';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      
    </>
  );
}

export default App;
