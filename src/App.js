// import logo from './logo.svg';
import './App.css';
import { useState  } from 'react';


const App = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [name, setName] = useState("");


  return (
      <>
          <input
           placeholder="What's your name?"
              onChange={(e) => {
                  setName(e.target.value);
               }}
          />
          <button
              onClick={() =>
                  name.length > 0 ? setShowGreeting(!showGreeting) : null
              }
          >
              {!showGreeting ? "Show" : "Hide"}
          </button>
          <label>
              {showGreeting ? `Hi ${name}` : ""}
          </label>
      </>
  );
};
