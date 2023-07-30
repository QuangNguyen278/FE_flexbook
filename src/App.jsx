import { Route, Routes } from "react-router-dom/dist";
import Feed from "./feed";
import Login from "./index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
