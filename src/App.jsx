import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form/Form'
import Stateful_Form from './Component/Form/Statefulform/Stateful_Form'
import Ref_form from './Component/Ref form/Ref_form'

function App() {

  return (
    <>
      {/* <Form></Form> */}
      <Stateful_Form></Stateful_Form>
      <Ref_form></Ref_form>
    </>
  )
}

export default App
