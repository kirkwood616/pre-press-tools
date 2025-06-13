import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ImagingList from "./components/imaging/ImagingList";
import Sidebar from "./components/nav/Sidebar";
import Home from "./pages/Home";
import Imaging from "./pages/Imaging";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imaging" element={<Imaging />}>
            <Route index element={<Home />} />
            <Route path="queue" element={<ImagingList />} />
            <Route path="imaged" element={<Home />} />
            <Route path="washed" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
