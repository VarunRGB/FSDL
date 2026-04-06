function Skills() {
  const skills = ["C++", "JavaScript", "React", "Python", "MySQL", "OpenCV"];

  return (
    <div className="card skills-container">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;