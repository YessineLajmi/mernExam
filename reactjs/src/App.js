import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Addorder from "./pages/addorder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new" element={<Addorder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
