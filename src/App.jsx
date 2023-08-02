import {React} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Book from "./pages/book/Book";
import Login from "./pages/login/Login";
import Header from "./component/header/Header";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
