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
          <Route path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          
          <PrivateRoute path="/placeOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

           <PrivateRoute path="/shipping">
            <Shipping></Shipping>
           </PrivateRoute>

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

