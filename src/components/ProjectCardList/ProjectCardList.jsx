import "@/styles/index.scss";
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
    return <div className="g-30 flex-center">
        <div className="g-30 flex-center">
            <div className="flex-center fade-in">
                <h2>My deployed works</h2>
                <span className="text-dim">Projects I made that are currently running</span>
            </div>
            <div className="row flex-wrap flex-center g-30">
                {projectData.projects.map((project, index) =>
                    project.deployed &&
                    <ProjectCard
                        key={index}
                        title={project?.title}
                        desc={project?.desc}
                        image={images["/src/assets/projectImages/" + project?.imageFileName]}
                        techIconsFileNames={project?.techIcons}
                        url={project?.url}
                        deployed={project?.deployed}
                    />
                )}
            </div>
        </div>
        <div className="g-30 flex-center">
            <div className="flex-center fade-in">
                <h2>My projects</h2>
                <span className="text-dim">Projects that I made for fun / to learn</span>
            </div>
            <div className="row flex-wrap flex-center g-30">
                {projectData.projects.map((project, index) =>
                    !project.deployed &&
                    <ProjectCard
                        key={index}
                        title={project?.title}
                        desc={project?.desc}
                        image={images["/src/assets/projectImages/" + project?.imageFileName]}
                        techIconsFileNames={project?.techIcons}
                        url={project?.url}
                        deployed={project?.deployed}
                    />
                )}
            </div>
        </div>
    </div>
}

export default ProjectCardList;