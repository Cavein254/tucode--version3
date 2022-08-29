import { useState } from 'react'

function Search({data}) {
  const [query, setQuery] = useState([])

  const handleSearch = e => {
    e.preventDefault()
    const searchTerm = e.target.value
    const newResults = data.filter(results => {
      return results.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    
    if(searchTerm === ""){
      setQuery([])
    }else{
      setQuery(newResults)
    }
  }


  return (
    <>
    <div>
        <input placeholder='Search' type="search" onChange={handleSearch} className="text-lg font-thin px-4 py-2"/>
    </div>
    {
      query.length != 0 && 
      <div className="overflow-y-scroll p-2  shadow-xl ml-4 mt-2 h-3/5 w-4/5 bg-gray-400 overflow-hidden ">
      {
       
        query?.slice(0,10).map(item => {
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
    }
    </>
  )
}

export default Search