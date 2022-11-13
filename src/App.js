import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Campaign from "./pages/Campaign"
import Profile from "./pages/Profile"
import Search from "./pages/Search"
import './App.css'

function App() {
  // const user = JSON.parse(localStorage.getItem("profile"))

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<Campaign />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
