import { useState } from "react";

function Registrations() {
  const offerings = [
    "Individual - English",
    "Individual - Hindi",
    "Group - Urdu",
    "Special - English",
  ];

  const [registrations, setRegistrations] = useState([]);
  const [selectedOffering, setSelectedOffering] = useState("");
  const [studentName, setStudentName] = useState("");
  const [filter, setFilter] = useState("");

  const handleRegister = () => {
    if (!studentName || !selectedOffering) return alert("Fill all fields");
    setRegistrations([
      ...registrations,
      { id: Date.now(), studentName, offering: selectedOffering },
    ]);
    setStudentName("");
    setSelectedOffering("");
  };

  const filteredOfferings = offerings.filter((o) =>
    filter ? o.startsWith(filter) : true
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student Registrations</h2>

      <div className="mb-4">
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Student Name"
        />
        <select
          value={selectedOffering}
          onChange={(e) => setSelectedOffering(e.target.value)}
          className="p-2 border mr-2"
        >
          <option value="">Select Offering</option>
          {offerings.map((o, i) => (
            <option key={i}>{o}</option>
          ))}
        </select>
        <button onClick={handleRegister} className="bg-green-500 text-white p-2">
          Register
        </button>
      </div>

      <div className="mb-4">
        <label>Filter by Course Type: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border ml-2">
          <option value="">All</option>
          <option>Individual</option>
          <option>Group</option>
          <option>Special</option>
        </select>
      </div>

      <ul>
        {registrations
          .filter((r) => (filter ? r.offering.startsWith(filter) : true))
          .map((r) => (
            <li key={r.id} className="border-b py-2">
              {r.studentName} - <strong>{r.offering}</strong>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Registrations;
