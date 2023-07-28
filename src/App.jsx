import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Login from "./pages/login/Login";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/book" element={<Book />} />
            <Route path ="/login" element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}
export default App;
