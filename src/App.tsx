import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ImagingList from "./components/features/imaging/ImagingList";
import Sidebar from "./components/nav/Sidebar";
import Home from "./pages/Home";
import Imaging from "./pages/Imaging";
import ImagingOrder from "./pages/ImagingOrder";
import { record } from "./utils/TestData";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="imaging" element={<Imaging />}>
            <Route index element={<Home />} />
            <Route path="queue" element={<ImagingList />}>
              <Route path={":id"} element={<ImagingOrder record={record} />} />
            </Route>
            <Route path="imaged" element={<Home />} />
            <Route path="washed" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
