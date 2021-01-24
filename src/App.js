import "./App.css";

// Components
import Navbar from "./Components/Navbar/Navbar.component";
import Banner from "./Components/Banner/Banner.component";
import ProductContextProvider from "./Global/ProductsContext";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Banner />
      </div>
    </div>
  );
}

export default App;
