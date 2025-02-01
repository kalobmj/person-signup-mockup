import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Header from './components/Header'

function App() {

  const landingHeader = 'Sign up for the Place newsletter! 😊'
  const thankYouHeader = 'Thanks for signing up for our newsletter!'

  const [header, setHeader] = useState<string>(landingHeader)

  const [formDone, setFormDone] = useState<number>(0) // 0 1

  // useEffect on form completion
  // change value of header on form completion
  useEffect(() => {

    console.log('on form complete header change based off state')

    // setHeader goes here after form is complete

  }, [formDone])

  return (
    <>
      <Header
        landingHeader={landingHeader}
        thankYouHeader={thankYouHeader}
        formDone={formDone}
      />
      <MainContainer
        formDone={formDone}
      />
    </>
  )
}

export default App
