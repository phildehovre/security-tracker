import React, { useState, useContext } from 'react'
import { SecuritiesContext } from '../Contexts/SecuritiesContext'


function SearchBar() {

    const { handleSubmit } = useContext(SecuritiesContext)

    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = (e, term) => {
        e.preventDefault()
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