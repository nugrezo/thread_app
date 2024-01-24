import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*The following code snippet utilizes React Router's 
      BrowserRouter to manage navigation within the application.
      Each defined Route corresponds to a specific URL path, 
      rendering the associated component when the path is matched.*/}

      <BrowserRouter>
        <h1>Hello React</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
