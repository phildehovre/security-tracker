import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SearchBar() {

    const [ticker, setTicker] = useState('')
    const [fetchedData, setFetchedData] = useState(null)
    const [tickers, setTickers] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        axios.get('https://api.twelvedata.com/time_series?&apikey=1989b02f54f8431d875d1c357e296cb3', {
            params: {
                symbol: tickers.join(','),
                interval: '1day',
                output: '200'
            }
        }).then((res, err) => {
            setFetchedData(res.data)
            setFetching(false)
        })
    }, [tickers])


    const renderTickers = () => {
        if (fetchedData && !fetching) {
            return (
                <div>
                    {tickers.map(t => {
                        return (
                            <div>
                                <h4>
                                    {t}
                                </h4>
                                {fetchedData[t] != undefined && <h6>{fetchedData[t].values[0].close}</h6>}
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (fetching) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>No securities selected</div>
        )
    }


    const handleAddSec = () => {
        setTickers(prev => [...prev, ticker])
        setTicker('')
    }

    const handleClearSec = () => {
        setTickers([])
    }

    return (
        <div>
            <input type='text' value={ticker} onChange={(e) => {
                setTicker(e.target.value)
            }
            } />
            <button onClick={handleAddSec}>Add</button>
            <button onClick={handleClearSec}>Clear all</button>
            {renderTickers()}
        </div>
    )
}


export default SearchBar