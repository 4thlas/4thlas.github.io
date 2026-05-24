import "@/index.css";
import projectData from "@/data/projects.json"
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";

const images = import.meta.glob(
    "@/assets/projectImages/*",
    {
        eager: true,
        import: "default"
    }
)

function ProjectCardList()
{
    return <div className="row flex-wrap flex-center g-30">
        {projectData.projects.map((project, index) =>
            <ProjectCard
                key={index}
                title={project?.title}
                desc={project?.desc}
                image={images["/src/assets/projectImages/" + project?.imageFileName]}
                url={project?.url}
                deployed={project?.deployed}
            />)}
    </div>
}

export default ProjectCardList;