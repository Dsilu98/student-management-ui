import { Routes, Route } from "react-router-dom";

import Dashboard from "../pges/Dashboard";
import StudentRegistration from "../pges/StudentRegistration";
import StudentList from "../pges/StudentList";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/students" element={<StudentList />} />
        </Routes>
    );
}

export default AppRoutes;