import { useState } from 'react'

function Search() {
    const [query, setQuery] = useState('')
  return (
    <div>
        <input placeholder='Search' type="search" onChange={e => setQuery(e.target.value)} className="text-lg font-thin px-4 py-2"/>
    </div>
  )
}

export default Search