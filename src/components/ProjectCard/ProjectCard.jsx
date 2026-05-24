import "./ProjectCard.css";
import "@/index.css";

function ProjectCard({title, desc, image, url, deployed})
{
    return <a href={url} target="_blank" className="project-card col p-30 col-space-between">
        <div className="col g-15">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>

        <p className="text-accent text-right">{deployed ? "Visit" : "See repo"} {">>>"}</p>
    </a>
}

export default ProjectCard;