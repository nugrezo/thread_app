import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
