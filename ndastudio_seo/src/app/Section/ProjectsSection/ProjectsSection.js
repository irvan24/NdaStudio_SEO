import "./ProjectsSection.css";

const projects = [
  { id: 1, title: "Touchzen" },
  { id: 2, title: "La ronde des formes" },
  { id: 3, title: "Websheet" },
  { id: 4, title: "HMI House" },
];

export default function ProjectsSection() {
  return (
    <section className="project-section">
      <div className="project-header">
        <h1 className="section-title">
          <span className="section-title-black">Nos derniers</span> clients
        </h1>

      <hr className="separator" />

      {/* <div className="section-subtitle-view">
        <h2 className="section-subtitle">Vidéos de présentation</h2>
      </div> */}
      </div>


      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-container">
            <div className="project-video-card"></div>
            <h3 className="project-title-text">{project.title}</h3>
          </div>
        ))}
      </div>
      <hr className="separator" />
    </section>
  );
}
