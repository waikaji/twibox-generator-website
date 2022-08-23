import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Campaign from "./pages/Campaign"
import Profile from "./pages/Profile"
import ListAll from "./pages/ListAll"
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/search" element={<ListAll />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
