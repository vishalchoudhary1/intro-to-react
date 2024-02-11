import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
   <UserContextProvider>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
