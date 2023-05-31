import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import FindPassword from "./pages/FindPassword";
import B2B from "./pages/B2B";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/b2b" element={<B2B />} />
      </Routes>
    </Router>
  );
}

export default App;
