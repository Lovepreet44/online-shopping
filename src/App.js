import "./App.css";
import Homepage1 from "./pages/homepage/Homepage1";
import { Route, Switch } from "react-router-dom";
import shop from "./pages/shop/shop.js";
import Header from "./components/header/header.component";
import Signinandsignup from "./pages/sign-in -and-sign-up/sign-in-and-sign-up.component";

function App() {
  const contactus = (props) => {
    console.log(props);
    return <div>contactus page</div>;
  };
  const contact2 = () => {
    return <div>contactus page 2</div>;
  };
  const contact3 = () => {
    return <div>contactus page 3</div>;
  };
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage1} />
        <Route exact path="/shop" component={shop} />
        <Route exact path="/contact2" component={contact2} />
        <Route exact path="/contact3" component={contact3} />
        <Route exact path="/signin" component={Signinandsignup} />
      </Switch>
    </>
  );
}

export default App;
