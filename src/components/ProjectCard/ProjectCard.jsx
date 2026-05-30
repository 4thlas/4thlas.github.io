import "./ProjectCard.scss";
import "@/styles/index.scss";
import {useRef} from "react";
import useTilt from "@/hooks/useTilt.jsx";

function ProjectCard({title, desc, image, url, deployed})
{
    const cardRef = useRef(null);

    useTilt(cardRef);

    return <div className="perspective-wrapper">
        <a href={url} target="_blank" className="project-card col p-30 col-space-between" ref={cardRef}>
            <div className="col g-15">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <p className="text-accent text-right visit-prompt">{deployed ? "Visit" : "See repo"} {">>>"}</p>
        </a>
    </div>
}

export default ProjectCard;