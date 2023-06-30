import { useContext } from ‘react’
import {searchContext} from “../pages/_app”
import SearchIcon from “./SearchIcon”

const SearchBar = () => { 
       const [searchTerm, setSearchTerm] useContext(searchContext)        

       return (
              <div className=“item-container”>
                     <div className=“search-bar-container”>
                     <SearchIcon/>
                            <input
                                   className=“search-input”
                                   placeholder=“Yôga, pilates, massage…”
                                   onChange={e => set.SearchTerm(e.target.value)}
                                   value={searchTerm}
                            />
                     </div>
              </div>
       )
}
