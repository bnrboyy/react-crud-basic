import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

import Home from './component/Home'
import Add from './component/Add'
import Edit from './component/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
