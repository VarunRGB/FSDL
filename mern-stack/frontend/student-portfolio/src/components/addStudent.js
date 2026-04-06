import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/student/add", student);
    alert("Student Added");
    window.location.reload();
  };

  return (
    <div>
      <h3>Add Student</h3>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="course" placeholder="Course" onChange={handleChange} /><br/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddStudent;