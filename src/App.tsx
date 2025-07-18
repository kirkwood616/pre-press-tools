import CreateEditContainer from "@/components/containers/CreateEditContainer";
import PrivateRoutes from "@/components/containers/PrivateRoutes";
import UserContainer from "@/components/containers/UserContainer";
import ImagingList from "@/features/imaging/orders-list/ImagingList";
import Home from "@/pages/Home";
import Imaging from "@/pages/Imaging";
import ImagingOrder from "@/pages/ImagingOrder";
import ImagingOrderCreate from "@/pages/ImagingOrderCreate";
import ImagingOrderEdit from "@/pages/ImagingOrderEdit";
import LogIn from "@/pages/LogIn";
import { imagingSections } from "@/types/Imaging";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
              {imagingSections.map((section) => (
                <Route path={section} element={<ImagingList />}>
                  <Route path=":id" element={<ImagingOrder />} />
                </Route>
              ))}
              <Route path="edit" element={<CreateEditContainer />}>
                <Route path=":id" element={<ImagingOrderEdit />} />
              </Route>
              <Route path="create" element={<CreateEditContainer />}>
                <Route path="new-order" element={<ImagingOrderCreate />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
