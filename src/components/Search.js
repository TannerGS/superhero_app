import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState('')

    return (
        <label className="search">
            <input 
                type="text" 
                placeholder="Search Superheroes" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
        </label>
    )
}

export default Search
