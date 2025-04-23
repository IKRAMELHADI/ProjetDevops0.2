import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>Product Component</h1>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update' element={<h1> Update Product Component</h1>}/>
          <Route path='/logout' element={<h1>Logout Product Component</h1>}/>
          <Route path='/Profile' element={<h1>Profile Component</h1>}/>

          </Route>  
          <Route path='/SignUP' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>  
        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
