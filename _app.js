import Link from ‘next/link’
import ‘../styles/globals.css’
import { createContext, useState} from ‘react’
import SearchBar from “../Componentes/SearchBar”

export cosnt searchContext = createContext(null)

const App ({Components, pageProps}) => {
       const [searchTerm, setSearchTerm] = useState(null)

       console.log(‘searchTerm’, searchTerm)

       return (
              <>
                     <searchContex.Provider value{[searchTerm, setSearchTerm]}>
                      <header> 
                            <Link href=“/”>
                                   <h3>ClassPass</h3> 
                            <Link/>
                            <SearchBar/>
                     <header/>
                     <Component{ …pageProps }/>
                            </searchContext.Provider>

              </>
      )
}

export default App
