import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import DisplayBooks from './Components/DisplayBooks/DisplayBooks';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
//  import Header from './Components/Headers/Header';
// import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
//  import DashBoardBar from './Components/DashboardBar.jsx/DashBoardBar';
// import DashBoardBar from './Components/DashboardBar/DashBoardBar';
// import SignUp from './Components/SignUp/SignUp';
// import Login from './Components/Login/Login';
   import HomePage from './Pages/HomePage/HomePage';
 import Dashboard from './Pages/Dashboard/Dashboard';
import GetBookByid from './Pages/GetBookByid/GetBookByid';
// import Cart from './Components/Cart/Cart';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess';
import CartPage from './Pages/CartPage/CartPage';
import OrderSummery from './Components/OrderSummery/OrderSummery';

function App() {
  return (
    <div className="App">
      {/* <HomePage />  */}
      {/* <Login /> */}
      {/* <SignUp></SignUp> */}
      {/* <DashBoardBar></DashBoardBar> */}
      {/* <ForgetPassword></ForgetPassword> */}
      {/* <Header/> */}
    

      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage />}></Route>
          <Route path='/dashboard' element = {<Dashboard />}></Route>
          <Route path='/forgotpassword' element={<ForgetPassword/>} />
          <Route path='/getBookByid' element={<GetBookByid/>} />
          {/* <Route path = '/mycart' element = {<Cart/> } /> */}
          <Route path = '/customerDetails' element = {<CustomerDetails/> } />
          <Route path = '/success' element = {<OrderSuccess/> } />
          <Route path='/mycart' element = {<CartPage />}></Route>
          {/* <Route path = '/ordersummery' element = {<OrderSummery/> } /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
