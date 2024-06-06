import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainRouter from "./MainRouter";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRouter />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
