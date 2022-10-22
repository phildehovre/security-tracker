import React, { useState, useMemo } from 'react'


function SearchBar(props) {

    const { handleSubmit } = props

    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = (e, term) => {
        handleSubmit(e, term)
        setSearchTerm('')
    }


    return (
        <div>
            <form onSubmit={(e) => { onSubmit(e, searchTerm) }}>
                <input type='text' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }}></input>
                <button type='submit'>Add Security</button>
            </form>

        </div>
    )
}

export default SearchBar