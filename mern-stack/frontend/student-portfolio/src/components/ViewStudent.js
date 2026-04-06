import { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/student/view");
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/student/delete/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>Students</h3>
      {students.map((s) => (
        <div key={s._id}>
          {s.name} - {s.email} - {s.course}
          <button onClick={() => deleteStudent(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;