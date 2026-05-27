import avatar from "@/assets/avatar.svg";
import "./Avatar.scss";

const techIcons = import.meta.glob(
    "@/assets/icons/techIcons/*.svg",
    {
        eager: true,
        import: "default"
    }
);

const iconCount = Object.keys(techIcons).length;

function Avatar()
{
    return (
        <div className="avatar-wrapper no-select">
            <img
                className="avatar"
                src={avatar}
                alt="avatar"
            />

            <div className="circle-container" style={{ "--icon-count": iconCount }}>
                {
                    Object.entries(techIcons).map(([key, value], index) =>
                        <div key={index} className="icon-wrapper" style={{"--icon-index": index}}>
                            <img
                                src={value}
                                alt={key.split("_").pop().split(".")[0]}
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