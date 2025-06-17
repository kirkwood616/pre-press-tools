import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./components/containers/PrivateRoutes";
import UserContainer from "./components/containers/UserContainer";
import ImagingList from "./components/features/imaging/ImagingList";
import Sidebar from "./components/nav/Sidebar";
import useAuthCheck from "./hooks/useAuthCheck";
import Home from "./pages/Home";
import Imaging from "./pages/Imaging";
import ImagingOrder from "./pages/ImagingOrder";
import LogIn from "./pages/LogIn";

function App() {
  const { user } = useAuthCheck();
  return (
    <div className="App">
      <Router>
        {user ? <Sidebar /> : ""}
        <Routes>
          <Route path={"/"} element={<LogIn />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route element={<PrivateRoutes component={<UserContainer />} />}>
            <Route path="home" element={<Home />} />
            <Route path="imaging" element={<Imaging />}>
              <Route index element={<Home />} />
              <Route path="queue" element={<ImagingList />}>
                <Route path={":id"} element={<ImagingOrder />} />
              </Route>
              <Route path="imaged" element={<Home />} />
              <Route path="washed" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
