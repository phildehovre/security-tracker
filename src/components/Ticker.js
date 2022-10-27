import React from 'react'

function Ticker(props) {

    const { ticker } = props


    return (
        <div className='ticker__slice'>{ticker.meta.symbol}
            <div>
                {ticker.values[0].close + ' ' + ticker.meta.currency}
            </div>
        </div>
    )
}

export default Ticker