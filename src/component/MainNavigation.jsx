import { RoutePaths } from "../utils/enum";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Registration";
import Book from "../pages/book/Book";
import BookListing from "../pages/bookListing/BookListing";
import EditBook from "../pages/edit/EditProduct";
import User from "../pages/user/User";
import EditUser from "../pages/edit/EditUser";
import Category from "../pages/category/Category";
import EditCategory from "../pages/edit/EditCategory";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/Cart";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import AppWrapper from "./AppWrapper";


const MainNavigation = () => {
  const authContext = useAuthContext();

  const Redirect = <Navigate to={RoutePaths.Login} />;

  return (
    <Routes>
      <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Register} element={<Register />} />
      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      

      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <User /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditUser}
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Category}
        element={authContext.user.id ? <Category /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddCategory}
        element={authContext.user.id ? <EditCategory /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.UpdateProfile}
        element={authContext.user.id ? <Profile /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Cart}
        element={authContext.user.id ? <Cart /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Other}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      
    </Routes>
  );
};

export default MainNavigation;