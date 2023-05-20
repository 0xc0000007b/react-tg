import logo from './logo.svg';
import './App.css';
import WebApp from "@twa-dev/sdk";
import {useEffect} from "react";

function App() {
    const tg = window.Telegram
 useEffect(() => {
   tg.ready()
 })
    const close =() => {
        tg.close()
    }
  return (
    <div className="App">
      <div className="container">
          <button onClick={close}>X</button>
      </div>
    </div>
  );
}

export default App;
