import React, { useContext } from 'react'
import Ticker from './Ticker'
import { SecuritiesContext } from '../Contexts/SecuritiesContext'

function TickerList() {


    const { tickerObjects } = useContext(SecuritiesContext)

    const tickerKeys = Object.keys(tickerObjects)

    const renderTickers = () => {

        return (
            tickerKeys.map(t => {
                return <Ticker ticker={tickerObjects[t]} />
            })
        )
    }

    return (
        <div className='ticker__list'>
            {renderTickers()}
        </div>
    )
}

export default TickerList