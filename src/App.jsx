import { React, useState } from "react";
// import "./App.css"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthWrapper } from "./context/auth";
import loader from "./assets/images/loader.gif";
import Book from "./pages/book/Book";
// import AppWrapper from "./component/AppWrapper";
import MainNavigation from "./component/MainNavigation";
import Navbar from "./component/Navbar";
// import SearchBar from "./component/SearchBar";

function App() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <AuthWrapper>
        {/* <div className="loader-wrapper">
          <img src={loader} alt="loader" />
        </div> */}
        {/* <Header setHasAccount={setHasAccount} /> */}
        <Navbar/>
        {/* <SearchBar/> */}
        <MainNavigation />
        <ToastContainer/>
        <Footer />
      </AuthWrapper>
      </BrowserRouter>
    </div>
  );
}
export default App;
