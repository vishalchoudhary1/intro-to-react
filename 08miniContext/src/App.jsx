import './App.css'
import userContext from './context/userContext'
import userContextProvider from './context/userContextProvider'
function App() {
  

  return (
   <userContextProvider>
   <h1>react</h1>
   </userContextProvider>
  )
}

export default App
