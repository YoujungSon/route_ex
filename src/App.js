import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cat from "./Cat";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:name" element={<Cat />} />
      </Routes>
    </div>
  );
}

export default App;
