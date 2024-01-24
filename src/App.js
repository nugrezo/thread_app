import "./App.css";
import { BrowserRouter } from "react-router-dom";

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
          <div>Hello This is react app</div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
