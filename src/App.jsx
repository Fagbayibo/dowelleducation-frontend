import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/Homepage";
// import LoginWithFaceId from './Pages/LoginPage/LoginFaceId';
import RestrictedAccessPage from "./Pages/RestrictedAccessPage/RestrictedAccessPage";
import DashboardPage from "./Pages/Dashboard/Dashboard";
import WorkspaceLogin from "./Pages/WorkSpace/WorkspaceLogin";
import WorkspaceDashboard from "./Pages/WorkSpace/WorkspaceDashboard";
import WorkspaceReport from "./Pages/WorkSpace/WorkspaceReport";
import WorkspaceScaleDetails from "./Pages/WorkSpace/WorkspaceScaleDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/dowelleducation/" element={<LoginPage />} />
      <Route path="/dowelleducation/home" element={<HomePage />} />
      {/* <Route path="/dowelleducation/faceid" element={<LoginWithFaceId />} /> */}
      <Route
        path="/dowelleducation/restricted-access"
        element={<RestrictedAccessPage />}
      />
      <Route path="/dowelleducation/dashboard" element={<DashboardPage />} />
      {/* New routes for Dowell Workspace  */}
      <Route
        path="/dowelleducation/workspace-login"
        element={<WorkspaceLogin />}
      />
      <Route
        path="/dowelleducation/workspace-dashboard"
        element={<WorkspaceDashboard />}
      />
      <Route
        path="/dowelleducation/workspace-report"
        element={<WorkspaceReport />}
      />
      <Route 
      path="/dowelleducation/workspace-scale-details" 
      element={<WorkspaceScaleDetails/>}
      />
    </Routes>
  );
};

export default App;
