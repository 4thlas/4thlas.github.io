import "./ProjectCard.scss";
import "@/styles/index.scss";
import {useRef} from "react";
import useTilt from "@/hooks/useTilt.jsx";

function ProjectCard({title, desc, image, url, techIconsFileNames, deployed})
{
    const cardRef = useRef(null);

    useTilt(cardRef);

    const techIconsMap = import.meta.glob(
        "@/assets/icons/techIcons/*.svg",
        {
            eager: true,
            import: "default"
        }
    );

    const techIcons = techIconsFileNames.map(filename => techIconsMap[`/src/assets/icons/techIcons/${filename}`]);

    return <div className="perspective-wrapper fade-in">
        <a href={url} target="_blank" className="project-card col p-30 col-space-between g-15" ref={cardRef}>
            <div className="col g-15">
                <img src={image} alt={title} />
                <div className="w-100 row row-space-between g-0">
                    <h3>{title}</h3>
                    <div className="row g-15 flex-center">
                        {techIcons.map((icon, index) =>
                            icon && <img className="tech-icon" key={index} src={icon} alt={techIconsFileNames[index]} />
                        )}
                    </div>
                </div>
                <p>{desc}</p>
            </div>

            <p className="text-accent text-right visit-prompt">{deployed ? "Visit" : "See repo"} {">>>"}</p>
        </a>
    </div>
}

export default ProjectCard;