import { useState } from "react";

function CourseTypes() {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!name.trim()) return alert("Course type name required.");
    if (editId) {
      setTypes(types.map(t => t.id === editId ? { ...t, name } : t));
      setEditId(null);
    } else {
      setTypes([...types, { id: Date.now(), name }]);
    }
    setName("");
  };

  const handleEdit = (id) => {
    const ct = types.find(t => t.id === id);
    setName(ct.name);
    setEditId(ct.id);
  };

  const handleDelete = (id) => {
    setTypes(types.filter(t => t.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Course Types</h2>
      <div className="mt-2">
        <input value={name} onChange={e => setName(e.target.value)} className="border p-2 mr-2" placeholder="e.g. Individual" />
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2">{editId ? "Update" : "Add"}</button>
      </div>
      <ul className="mt-4">
        {types.map((t) => (
          <li key={t.id} className="flex justify-between border-b py-2">
            <span>{t.name}</span>
            <div>
              <button onClick={() => handleEdit(t.id)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => handleDelete(t.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseTypes;
