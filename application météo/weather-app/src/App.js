
import './App.css';
import { useState } from 'react';

const api = {
  key: '71269e00548123c9718b74200364b14b',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        console.log(result)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meteo</h1>
        {/*Barre de recherche */}
        <div>
          <input
            type='text'
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
            />
          <button onClick={searchPressed}>Search</button>
        </div>


      {/* Si la temperature n est pas defini */}
        {typeof weather.main !== "undefined" ? (

            <div>
    
              {/* Localisation*/}
    
              <p>{weather.name}</p>
    
              {/* Temperature */}
    
              <p>{weather.main.temp}°C</p>
    
              {/* Condition */}
    
    
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>

        </div>
        ):(
          ""
        )}


      </header>
    </div>
  );
}

export default App;
