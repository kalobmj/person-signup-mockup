import { useState, useEffect } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Header from './components/Header'

function App() {


  interface userInfo {

    firstName: String;
    lastName: String;
    email: String;
    number: Number;
    wantsUpdates: boolean;

  }

  const [userData, setUserData] = useState<userInfo>({

    firstName: '',
    lastName: '',
    email: '',
    number: 5555555555,
    wantsUpdates: false

  })

  // function to trigger setUserData on each userInput
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    setUserData((prevData) => ({

      ...prevData,
      [event.target.name]: event.target.value,

    }))

  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {

    const { name, checked } = event.target

    setUserData((prevData) => ({

      ...prevData,
      [name]: checked

    }))

  }

  const landingHeader = 'Sign up for the Place newsletter! 😊'
  const thankYouHeader = 'Thanks for signing up for our newsletter!'

  const [header, setHeader] = useState<string>(landingHeader)

  const [formDone, setFormDone] = useState<number>(0) // 0 1

  // state for button to be disabled by default, clickable on info completed
  const [infoComplete, setInfoComplete] = useState<number>(0)

  // useEffect on form completion
  // change value of header on form completion
  useEffect(() => {

    console.log('on form complete header change based off state')

    // setHeader goes here after form is complete

  }, [formDone])

  return (
    <div className='app-container'>
      <Header
        landingHeader={landingHeader}
        thankYouHeader={thankYouHeader}
        formDone={formDone}
      />
      <MainContainer
        formDone={formDone} 
        handleChange={handleChange} 
        handleCheckboxChange={handleCheckboxChange}
        userData={userData}
      />
    </div>
  )
}

export default App
