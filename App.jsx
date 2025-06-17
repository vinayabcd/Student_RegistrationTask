import { Link, Route, Routes } from "react-router-dom";
import CourseTypes from "./CourseType";
import Courses from "./Courses";
import Offerings from "./Offerings";
import Registrations from "./Registrations";

function App() {
  return (
    <>
      <nav style={{ padding: "1rem", backgroundColor: "#333", color: "white" }}>
        <Link to="/" style={{ marginRight: 10, color: "white" }}>Course Types</Link>
        <Link to="/courses" style={{ marginRight: 10, color: "white" }}>Courses</Link>
        <Link to="/offerings" style={{ marginRight: 10, color: "white" }}>Offerings</Link>
        <Link to="/registrations" style={{ color: "white" }}>Registrations</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CourseTypes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/registrations" element={<Registrations />} />
      </Routes>
    </>
  );
}
export default App;
