import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import FindPassword from "./pages/FindPassword";
import B2B from "./pages/B2B";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Management from "./pages/Management";
import Product from "./pages/Product";
import Myshelf from "./pages/Myshelf";
import Payment from "./pages/Payment";
import Feed from "./pages/Feed";
import BookDetail from "./pages/BookDetail";
import MyInfo from "./pages/MyInfo";
import LeaveUser from "./pages/LeaveUser";
import Viewer from "./pages/Viewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/management" element={<Management />} />
        <Route path="/product" element={<Product />} />
        <Route path="/myshelf" element={<Myshelf />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/bookDetail/:id" element={<BookDetail />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/leave-user" element={<LeaveUser />} />
        <Route path="/viewer/:id" element={<Viewer />} />
      </Routes>
    </Router>
  );
}

export default App;
