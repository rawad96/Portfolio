import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './Portfolio'

function App() {


  return (
    <>
      <Routes >
        <Route path='/Portfolio/' element={<Portfolio />} />


      </Routes>
    </>
  )
}

export default App
