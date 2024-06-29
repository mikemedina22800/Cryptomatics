import { createContext, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Background from "./components/Background"
import { Search } from "@mui/icons-material"

export const RootContext = createContext()

const Root = () => {
  const [query, setQuery] = useState('')

  const value = { query, setQuery }

  return (
    <RootContext.Provider value={value}>
      <div id="root">
        <nav>
          <Link to="/" className="cursor-default">
            <div id="searchbar">
              <input placeholder="Search for coin..." onChange={(e) => {setQuery(e.target.value)}}/>
              <Search/>
            </div>          
          </Link>
        </nav>
        <Background/>
        <Outlet/>
      </div>
    </RootContext.Provider>
  )
}

export default Root