import { useState } from 'react'
import './App.css'
import Input1 from './Components/Input1'
// import {useAtom} from 'jotai'
// import {alphabetAtom} from './State.jsx'


function App() {

  // const [x, setx] = useAtom(alphabetAtom)

  // console.log(x)

  return (
    <div className="App">
      <header className="App-header">
        <Input1 />
        
      </header>
    </div>
  )
}

export default App
