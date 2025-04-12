import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product Component</h1>}/>
          <Route path='/add' element={<h1>Add Product Component</h1>}/>
          <Route path='/update' element={<h1> Update Product Component</h1>}/>
          <Route path='/logout' element={<h1>Logout Product Component</h1>}/>
          <Route path='/Profile' element={<h1>Profile Component</h1>}/>
        </Routes>  
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
