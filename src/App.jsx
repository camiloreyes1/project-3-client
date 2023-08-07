import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";
import AddPost from "./pages/AddPost";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostDetails from "./pages/PostDetails";


function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div className="App">
      
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/all-posts" element={<AllPosts />} />

        <Route element={<LoggedIn />}>

          <Route path="/add-post" element={<AddPost/>} />
          <Route path="/edit/:postId" element={<EditPost />} />  
          <Route path="/post-details/:postId" element={<PostDetails/>} />  

        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>
      </Routes>
      
    </div>
  );
}
export default App;