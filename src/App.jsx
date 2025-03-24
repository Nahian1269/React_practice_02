import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form/Form'
import Stateful_Form from './Component/Form/Statefulform/Stateful_Form'

function App() {

  return (
    <>
      {/* <Form></Form> */}
      <Stateful_Form></Stateful_Form>
    </>
  )
}

export default App
