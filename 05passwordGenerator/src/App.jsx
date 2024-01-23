import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "~`@!#$%^&*()-+={}[]:;";
    
    for(let i = 1; i< array.length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char);
    }
    setpassword(pass);
  } ,[length,numberAllowed, charAllowed, setpassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none w-full p-1 px-3"
          placeholder='password' />
        </div>
      </div>
    </>
  );
}

export default App;
