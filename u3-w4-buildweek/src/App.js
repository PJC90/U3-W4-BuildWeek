import "./App.css";
import Profile from "./Components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOffice from "./Components/BackOffice";
import OverlayLoading from "./Components/OverlayLoading";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <OverlayLoading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/backOffice" element={<BackOffice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
