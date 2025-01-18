import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router, routes, route, Routes, RouterProvider, Route} from "react-router-dom";
import Create from './component/Create';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/create" element = {<Create/>}/>
        <Route path = "/update/:id" element  = {<Update/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
