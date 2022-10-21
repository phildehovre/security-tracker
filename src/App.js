import { useState, useEffect } from 'react'
import TickerList from './components/TickerList'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import './App.css';

function App() {

  const [ticker, setTicker] = useState('')
  const [tickerObjects, setTickerObjects] = useState({})

  let tickers = []

  useEffect(() => {
    axios.get('https://api.twelvedata.com/time_series?&apikey=1989b02f54f8431d875d1c357e296cb3', {
      params: {
        symbol: ticker,
        interval: '1day',
        output: '100'
      }
    }).then((res, err) => {
      console.log(res.code)
      validateTicker(ticker, res.code)
      if (res.data.code !== 400) {
        setTickerObjects(prev => ({ ...prev, [ticker]: res.data }))
      }
    })
  }, [ticker])

  const validateTicker = (t, code) => {
    console.log(code, t)
    if (code === 200) {
      tickers.push(t)
      return true
    }
    return false
  }

  console.log(tickers)

  const handleSubmit = (e, term) => {
    e.preventDefault()
    setTicker(term)
  }


  return (
    <div className="App">
      <header className="App-header">
        MyFy
      </header>
      <SearchBar handleSubmit={handleSubmit} />
      <TickerList tickers={tickers} />

    </div>
  );
}

export default App;
