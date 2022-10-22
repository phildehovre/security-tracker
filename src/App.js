import { useState, useEffect, useMemo } from 'react'
import TickerList from './components/TickerList'
import SearchBar from './components/SearchBar'
import Chart from 'chart.js/auto'
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
        interval: '1week',
        output: '200'
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
    if (code === 200) {
      tickers.push(t)
      return true
    }
    return false
  }

  const handleSubmit = (e, term) => {
    e.preventDefault()
    setTicker(term)
  }

  console.log(tickerObjects)

  return (
    <div className="App">
      <header className="App-header">
        MyFy
      </header>
      <SearchBar handleSubmit={handleSubmit} />
      <TickerList tickers={tickerObjects} />

    </div>
  );
}

export default App;
