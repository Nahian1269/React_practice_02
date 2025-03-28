import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form/Form'
import Stateful_Form from './Component/Form/Statefulform/Stateful_Form'
import Ref_form from './Component/Ref form/Ref_form'
import Hookform from './Component/HookForm.jsx/Hookform'
import Reusable_Form from './Component/Reusable_form/Reusable_Form'

function App() {

  return (
    <>
      {/* <Form></Form> */}
      {/* <Stateful_Form></Stateful_Form>
      <Ref_form></Ref_form>
      <Hookform></Hookform> */}
      <Reusable_Form></Reusable_Form>
    </>
  )
}

export default App
