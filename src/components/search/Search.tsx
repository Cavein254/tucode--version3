import { useState } from 'react'

function Search({data}) {
  const [query, setQuery] = useState('')
  return (
    <>
    <div>
        <input placeholder='Search' type="search" onChange={e => setQuery(e.target.value)} className="text-lg font-thin px-4 py-2"/>
    </div>
    <div className=" p-2 rounded-lg shadow-xl ml-4 mt-2 h-3/5 w-4/5 bg-gray-400 overflow-hidden overflow-y-auto">
      {
        data.map(item => {
          return (
            <div key={item.slug} >
              <div >
                <a href={`snippet/${item.slug}`} 
                target="_blank" 
                rel="noreferrer"
                className="hover:bg-green-500 font-thin"
                
                >
                
                  {item.title}
                </a>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Search