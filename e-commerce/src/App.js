import Header from "./component/Header/Header";
import Home from "./Pages/Home";
import Products from './Pages/Products'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/Regsiter/RegsiterOptions";

function App() {
  return (
    <div className="App">
            <Router>
      <Header />

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/products' element={<Products/>} />
  <Route path="/register" element={<Register/>} />
</Routes>
        </Router>

    </div>
  );
}

export default App;
