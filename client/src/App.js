import "./App.css";
import Detail from "./pages/gpsDetail";
import Summary from "./pages/gpsSumary";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
