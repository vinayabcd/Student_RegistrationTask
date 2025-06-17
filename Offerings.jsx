import { useState } from "react";

function Offerings() {
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
  const [courses, setCourses] = useState(["English", "Hindi", "Urdu"]);
  const [offerings, setOfferings] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!selectedType || !selectedCourse) return alert("Select course and type");
    const name = `${selectedType} - ${selectedCourse}`;
    if (editId !== null) {
      const updated = offerings.map((o) =>
        o.id === editId ? { ...o, name, type: selectedType, course: selectedCourse } : o
      );
      setOfferings(updated);
      setEditId(null);
    } else {
      setOfferings([...offerings, {
        id: Date.now(),
        type: selectedType,
        course: selectedCourse,
        name,
      }]);
    }
    setSelectedType("");
    setSelectedCourse("");
  };

  const handleEdit = (offering) => {
    setSelectedType(offering.type);
    setSelectedCourse(offering.course);
    setEditId(offering.id);
  };

  const handleDelete = (id) => {
    setOfferings(offerings.filter((o) => o.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Course Offerings</h2>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="p-2 border mr-2">
        <option value="">Select Type</option>
        {courseTypes.map((t, i) => <option key={i}>{t}</option>)}
      </select>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="p-2 border mr-2">
        <option value="">Select Course</option>
        {courses.map((c, i) => <option key={i}>{c}</option>)}
      </select>
      <button onClick={handleAdd} className="bg-green-500 text-white p-2">
        {editId ? "Update" : "Add"}
      </button>

      <ul className="mt-4">
        {offerings.map((o) => (
          <li key={o.id} className="flex justify-between border-b py-2">
            <span>{o.name}</span>
            <div>
              <button onClick={() => handleEdit(o)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => handleDelete(o.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Offerings;
