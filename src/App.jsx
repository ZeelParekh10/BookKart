import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthWrapper } from "./context/auth";
import { CartWrapper } from "./context/cart";
// import loader from "./assets/images/loader.gif";
import AppWrapper from "./component/AppWrapper";
import MainNavigation from "./component/MainNavigation";
import Navbar from "./component/Navbar";
// import SearchBar from "./component/SearchBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthWrapper>
        <CartWrapper>
          {/* <div className="loader-wrapper">
            <img src={loader} alt="loader" />
          </div> */}
          <AppWrapper>
            <Navbar />
            {/* <SearchBar /> */}
            <MainNavigation />
            <ToastContainer />
            <Footer />
            </AppWrapper>
        </CartWrapper>
      </AuthWrapper>
    </BrowserRouter>
    </div>
  );
}
export default App;
