import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editprofile from "./pages/dashboard/Editprofile";
import Home from "./pages/dashboard/Home";
import Notif from "./pages/dashboard/Notif";
import Profile from "./pages/dashboard/Profile";
import Landing from "./pages/landingpage/Landing";
import Login from "./pages/landingpage/Login";
import Signup from "./pages/landingpage/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/notification" element={<Notif/>}/>
          <Route path="/update" element={<Editprofile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
