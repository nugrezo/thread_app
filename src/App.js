import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Replies from "./components/Replies";
import "./index.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      {" "}
      <div>
        {/*The following code snippet utilizes React Router's 
      BrowserRouter to manage navigation within the application.
      Each defined Route corresponds to a specific URL path, 
      rendering the associated component when the path is matched.*/}

        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Renders the <Login /> component when the path is the root URL ("/"). */}
            <Route path="/" element={<LandingPage />} />
            {/* Renders the <Register /> component when the path is "/register". */}
            <Route path="/register" element={<Register />} />
            {/* Renders the <Home /> component when the path is "/dashboard". */}
            <Route path="/dashboard" element={<Home />} />
            {/* 
          Renders the <Replies /> component when the path matches the pattern "/:id/replies".
          The ":id" parameter is a route parameter that captures dynamic values from the URL.
          */}
            <Route path="/:id/replies" element={<Replies />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
