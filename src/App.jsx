import './App.css';
import Header from './Header';
import Hero from './Hero';
import Reviews from "./Reviews";
import Footer from './Footer';

function App() {
  return (
    <>
      <Header id="top"

        title="My shop"
        nav1="Home"
        nav2="Products"
        nav3="Reviews"
        nav4="Contact"
      />
      <Hero
      />
      <Reviews />
      <Footer
      text={"© MyShop. All Rights Reserved."}
      
      />
    </>
  );
}

export default App;