import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "./Login";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
