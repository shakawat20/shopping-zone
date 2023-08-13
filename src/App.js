import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderReview from './components/orderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/shipping/Shipping';
import Payment from './components/payment/Payment';
import OrderPayment from './components/payment/OrderPayment';


function App() {
 
    
  return (
    <div>
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <PrivateRoute path='/review'>
            <OrderReview></OrderReview>
          </PrivateRoute>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          
          <Route path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </Route>
          
          <PrivateRoute path='/payment'>
           <OrderPayment></OrderPayment>
          </PrivateRoute>
           {/* <PrivateRoute path="/shipping">
            
           </PrivateRoute> */}

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>

          </Route>
        </Switch>
       </Router>
      </AuthProvider>

     
    </div>
  );
}
export default App;

