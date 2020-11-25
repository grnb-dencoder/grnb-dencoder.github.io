import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API_BASE} from "../../config/ApiConfig";
import DencodeFormWrapper from "../DencodeFormWrapper";
import Loader from "../Loader";

const App = () => {

  const [isApiAvailable, setApiAvailable] = useState(false);

  const checkIsApiAvailable = () => {
    return fetch(API_BASE)
  }

  useEffect(() => {
    console.debug("App did mounted")
    checkIsApiAvailable()
      .then(r => setApiAvailable(r.ok))
      .catch(() => setApiAvailable(false))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          isApiAvailable ?
            (
              <DencodeFormWrapper
                apiBase={API_BASE}
              />
            )
            :
            (
              <>
              <Loader/>
              <h1>Initializing the application...</h1>
              </>
            )
        }
      </header>
    </div>
  );
}

export default App;
