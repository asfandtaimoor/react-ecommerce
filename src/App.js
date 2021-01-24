import "./App.css";

// Components
import Navbar from "./Components/Navbar/Navbar.component";
import Banner from "./Components/Banner/Banner.component";
import { ProductContextProvider } from "./Global/ProductsContext";
import Products from "./Components/Products/Products.component";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Banner />

        <ProductContextProvider>
          <Products />
        </ProductContextProvider>
      </div>
    </div>
  );
}

export default App;
