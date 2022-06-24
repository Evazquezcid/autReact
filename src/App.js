
import './App.scss';
import Navigator from './components/Navigator';
import Gallery from "./pages/Gallery";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RequiereAuth } from "./components/RequiereAuth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App()  {
  
  return (
    
    <Router>
    <div className="App">
    <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<RequiereAuth> <Gallery /> </RequiereAuth>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </div>
    </Router>
   
  );
}

export default App;
