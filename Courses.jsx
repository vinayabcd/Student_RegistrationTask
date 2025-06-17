import { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!name.trim()) return alert("Course name required.");
    if (editId) {
      setCourses(courses.map(c => c.id === editId ? { ...c, name } : c));
      setEditId(null);
    } else {
      setCourses([...courses, { id: Date.now(), name }]);
    }
    setName("");
  };

  const handleEdit = (id) => {
    const course = courses.find(c => c.id === id);
    setName(course.name);
    setEditId(course.id);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Courses</h2>
      <div className="mt-2">
        <input value={name} onChange={e => setName(e.target.value)} className="border p-2 mr-2" placeholder="e.g. English" />
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2">{editId ? "Update" : "Add"}</button>
      </div>
      <ul className="mt-4">
        {courses.map((c) => (
          <li key={c.id} className="flex justify-between border-b py-2">
            <span>{c.name}</span>
            <div>
              <button onClick={() => handleEdit(c.id)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => handleDelete(c.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Courses;
