import "./scss/app.scss";
import { SearchBox } from "./components/search-box/SearchBox";
import { SearchResult } from "./components/search-result/SearchResult";
import { ProductDetail } from "./components/product-detail/ProductDetail";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/items/:id">
          <ProductDetail />
        </Route>
        <Route path="/items">
          <SearchResult />
        </Route>
        <Route path="/">
          <SearchBox />
        </Route>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}
export default App;
