import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom'; 
import OrderReview from './components/orderReview/OrderReview';
import ManageInventory from './components/manageInventory/ManageInventory';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/shipping/Shipping';
import Payment from './components/payment/Payment';
import OrderPayment from './components/payment/OrderPayment';
import Admin from './components/admin/Admin';
import OrderList from './components/orderList/Orders';
import Orders from './components/orderList/Orders';

function App() {
  return (
    <div>
      <AuthProvider>
        
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
         
          <Route path="/admin" element={<Admin/>} >
            <Route path="/admin/manageInventory" element={<ManageInventory></ManageInventory>}> </Route>
            <Route path="/admin" element={<Orders></Orders>}> </Route>
          </Route>
          <Route path="/review" element={<PrivateRoute><OrderReview/></PrivateRoute>} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/payment" element={<PrivateRoute><OrderPayment /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </AuthProvider>
    </div>
  );
}

export default App;
