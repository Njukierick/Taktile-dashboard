import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
