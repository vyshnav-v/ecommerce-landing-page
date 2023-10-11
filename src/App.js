import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
