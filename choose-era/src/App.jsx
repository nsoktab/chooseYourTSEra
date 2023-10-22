import { Router, Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Reputation from "./pages/Reputation";
import Era1989 from "./pages/Era1989";
import Lover from "./pages/Lover";
import Midnights from "./pages/Midnights";
import Folklore from "./pages/Folklore";


function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="era1989" element={<Era1989 />} />
      <Route path="reputation" element={<Reputation />} />
      <Route path="lover" element={<Lover />} />
      <Route path="folklore" element={<Folklore />} />
      <Route path="midnights" element={<Midnights />} />
    </Routes>
  );
}

export default App;
