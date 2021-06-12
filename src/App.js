import "./App.css";
import Homepage1 from "./pages/homepage/Homepage1";
import { Route, Switch } from "react-router-dom";
import shop from "./pages/shop/shop.js";
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
      <Switch>
        <Route exact path="/" component={Homepage1} />
        <Route exact path="/shop" component={shop} />
        <Route exact path="/contact2" component={contact2} />
        <Route exact path="/contact3" component={contact3} />
      </Switch>
    </>
  );
}

export default App;
