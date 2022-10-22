import React from 'react'
import Ticker from './Ticker'

function TickerList(props) {

    const { tickers } = props

    const tickerKeys = Object.keys(tickers)

    const renderTickers = () => {

        return (
            tickerKeys.map(t => {
                return <Ticker ticker={tickers[t]} />
            })
        )
    }

    return (
        <div className='ticker__list'>{renderTickers()}</div>
    )
}

export default TickerList