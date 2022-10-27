import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'

export const SecuritiesContext = createContext({})

export function SecuritiesProvider({ children }) {

    const [ticker, setTicker] = useState('')
    const [tickerObjects, setTickerObjects] = useState({})
    let tickers = []

    const validateTicker = (t, code) => {
        if (code === 200) {
            tickers.push(t)
            return true
        }
        return false
    }
    useEffect(() => {
        axios.get('https://api.twelvedata.com/time_series?&apikey=1989b02f54f8431d875d1c357e296cb3', {
            params: {
                symbol: ticker,
                interval: '1week',
                output: '200'
            }
        }).then((res, err) => {
            validateTicker(ticker, res.code)
            if (res.data.code !== 400) {
                setTickerObjects(prev => ({ ...prev, [ticker]: res.data }))
            }
        })
    }, [ticker])


    const handleSubmit = (e, term) => {
        setTicker(term)
    }



    return (
        <SecuritiesContext.Provider value={{ tickerObjects, handleSubmit }}>
            {children}
        </SecuritiesContext.Provider>
    )
}
