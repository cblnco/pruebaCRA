import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import response from './response.json';
import response2 from './response2.json';

function App() {
  const [boardState, setBoardState] = useState(null); // --> [state, setstate];

  useEffect(() => {
    async function doFetch() {
      // Fetch.
      setBoardState(response);
    }

    doFetch();
  }, []);

  const onClickMiniPit = pitIdx => {
    const newBoard = { pit: pitIdx, players: boardState.players };
    console.log(newBoard);
    // Fetch.
    setBoardState(response2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Que ondiux</p>
        {boardState &&
          boardState.players.map(
            ({ name, playerType, board: { pits } }, idx) => {
              const addition = idx ? 6 : 0;
              return (
                <>
                  <div>Player: {name}</div>
                  <div>Type: {playerType}</div>
                  <div style={{ marginBottom: '1rem' }}>
                    {pits.map((value, pitIdx) => {
                      return (
                        <button
                          style={{
                            border: '2px solid white',
                            padding: '1.5rem',
                            minWidth: '8rem',
                            cursor: 'pointer',
                          }}
                          key={`value-container-${pitIdx}`}
                          onClick={() => {
                            onClickMiniPit(pitIdx + addition);
                          }}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </>
              );
            }
          )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
