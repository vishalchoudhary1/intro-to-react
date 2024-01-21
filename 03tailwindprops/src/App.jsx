import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "John",
    age: 23
  }
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card username="john" obj={myObj}/> */}
      <Card username="john" btnTxt="click me"/>
      <Card username="Kevin" btnTxt="hire me"/>
    </>
  )
}

export default App
