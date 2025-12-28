import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Pages
import Landing from "./pages/Landing";
import AddHabit from "./pages/AddHabit";


// Optional shared UI
import { BottomNav } from "./components/BottomNav";
import BasePortal from "./layouts/BasePortal";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import TempBaseDashLayout from "./layouts/TempBaseDashLayout";
import NotFound from "./erros/404";
import UserDashboard from "./pages/user/UserDashboard";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import AddNewTaskPage from "./pages/user/AddNewTaskPage";
import HelpPortal from "./pages/HelpPortal";
import PersonalInfo from "./pages/user/PersonalInfo";
import License from "./pages/LIcense";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Routes>
        {/* Public */}
        <Route element={<BasePortal />}>
          <Route path="/" element={<Landing />} />
          <Route path="/help" element={<HelpPortal />} />
          <Route path="/license" element={<License />} />
        </Route>

        {/* authentication jurney */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* App */}
        <Route element={<UserDashboardLayout />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/task/new" element={<AddNewTaskPage />} />
          <Route path="/personals" element={<PersonalInfo />} />          
        </Route>
        <Route path="/add-habit" element={<AddHabit />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Mobile Navigation */}
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
