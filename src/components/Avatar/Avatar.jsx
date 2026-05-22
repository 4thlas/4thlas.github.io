import avatar from "@/assets/avatar.svg";
import "./Avatar.css";

const techIcons = import.meta.glob(
    "@/assets/icons/*.svg",
    {
        eager: true,
        import: "default"
    }
);

const iconCount = Object.keys(techIcons).length;

function Avatar()
{
    return (
        <div className="avatar-wrapper">
            <img
                className="avatar"
                src={avatar}
                alt="avatar"
            />

            <div
                className="circle-container"
                style={{ "--icon-count": iconCount }}
            >
                {
                    Object.entries(techIcons).map(([key, value], index) =>
                        <div key={index} className="icon-wrapper" style={{"--icon-index": index}}>
                            <img
                                src={value}
                                alt="tech icon"
                                className="tech-icon"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Avatar;