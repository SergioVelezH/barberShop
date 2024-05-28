import { Route ,Routes } from "react-router-dom";
import './App.css'
import Landing from "./views/landing/landing";
import Agenda from "./views/agenda/agenda";

function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" Component={Landing}/>
        <Route path="/agenda" Component={Agenda}/>
      </Routes>
    </div>
  )
}

export default App
