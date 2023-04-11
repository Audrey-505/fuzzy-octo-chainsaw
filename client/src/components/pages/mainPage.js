import React, { useState } from "react";
import NavBar from "./NavBar";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
// import Join from "../pages/Join";
import Contact from "../pages/Contact";
import Home from '../pages/Home'

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage == "Home") {
      return <Home />;
    }
    if (currentPage == "Login") {
      return <Login />;
    }
    if (currentPage == "Signup") {
      return <Signup />;
    }
    // if (currentPage == "Join") {
    //   return <Join />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
