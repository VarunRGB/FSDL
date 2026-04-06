import { useState } from "react";

function Projects() {
    const [show, setShow] = useState(false);

    const projects = [
        {
            name: "SmartRecipe",
            desc: "Recipe recommendation platform with filters and pricing insights"
        },
        {
            name: "CloudRepoHub",
            desc: "Cloud-native repo system using AWS, Docker, Kubernetes"
        }
    ];

    return (
        <div className="card">
            <h2>Projects</h2>

            <button onClick={() => setShow(!show)}>
                {show ? "Hide Projects" : "Show Projects"}
            </button>

            {show && (
                <div className="grid">
                    {projects.map((p, index) => (
                        <div className="card" key={index}>
                            <h3>{p.name}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Projects;