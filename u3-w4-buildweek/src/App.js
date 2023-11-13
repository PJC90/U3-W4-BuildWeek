import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackOffice from "./Components/BackOffice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backOffice" element={<BackOffice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
