import { useState } from 'react'
import './App.css'
import Search from './components/search/search'

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      
    </>
  )
}

export default App
