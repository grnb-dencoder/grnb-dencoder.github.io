import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {API_BASE} from "../../config/ApiConfig";
import Loader from 'react-loaders';
import DencodeFormWrapper from "../DencodeFormWrapper";

const App = () => {

  const [isApiAvailable, setApiAvailable] = useState(false);

  const checkIsApiAvailable = () => {
    return fetch(API_BASE)
  }

  useEffect(() => {
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
                <Loader type="line-scale-pulse-out" active/>
                <h4>Initializing the application...</h4>
              </>
            )
        }
      </header>
    </div>
  );
}

export default App;
