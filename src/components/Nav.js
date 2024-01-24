import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  //useState is a hook from React for setting the states. I used here state
  //to conditionally render for signOutBtn, loginBtn and registerbtn.
  // useNavigate is a hook from React Router for navigation
  const navigate = useNavigate();

  // Function to handle user sign-in
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  // Function to handle user sign-out

  /*
  - JSX rendering of the navigation bar
  - JSX structure: The component renders a navigation bar (<nav>) with 
  the title "Threadify" (<h2>) and a right-aligned section 
  (<div className="navbarRight">) containing a "Sign out" button 
  (<button onClick={signOut}>Sign out</button>).
  -Conditionally rendering based on authentication
  */

  return (
    <div>
      <nav className="navbar">
        <h2>Threadify</h2>
        <div className="navbarRight">
          {/* Button to trigger the signOut function */}
          <button onClick={handleLogin}>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
