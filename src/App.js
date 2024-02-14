import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home.js';
import Products from './views/Products.js';
import Cart from './views/Cart.js';
import ProductDetails from './views/ProductDetails.js';
import Users from './views/Users.js';
import Register from './views/Register.js';
import Login from './views/Login.js';
import TodoApp from './views/todo/TodoApp.js';
import Logout from './views/Logout.js';
import Profile from './views/Profile.js';
import EditDetails from './views/EditDetails.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>} ></Route>
        <Route path='/product-details/:productName' element={<ProductDetails/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/todo' element={<TodoApp/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/edit-details' element={<EditDetails/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
