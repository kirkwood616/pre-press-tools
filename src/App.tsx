import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateEditContainer from "./components/containers/CreateEditContainer";
import PrivateRoutes from "./components/containers/PrivateRoutes";
import UserContainer from "./components/containers/UserContainer";
import ImagingList from "./components/features/imaging/orders-list/ImagingList";
import Home from "./pages/Home";
import Imaging from "./pages/Imaging";
import ImagingOrder from "./pages/ImagingOrder";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<LogIn />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route element={<PrivateRoutes component={<UserContainer />} />}>
            <Route path="home" element={<Home />} />
            <Route path="imaging" element={<Imaging />}>
              <Route index element={<Home />} />
              <Route path="queue" element={<ImagingList />}>
                <Route path=":id" element={<ImagingOrder isRead />} />
              </Route>
              <Route path="imaged" element={<Home />} />
              <Route path="washed" element={<Home />} />
              <Route path="edit" element={<CreateEditContainer />}>
                <Route path=":id" element={<ImagingOrder isEdit />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
