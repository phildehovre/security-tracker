import React from 'react'
import Ticker from './Ticker'

function TickerList(props) {

    const { tickers } = props

    const renderTickers = () => {
        return (
            tickers.map(t => {
                return <Ticker ticker={t} />
            })
        )
    }

    return (
        <div>{renderTickers()}</div>
    )
}

export default TickerList