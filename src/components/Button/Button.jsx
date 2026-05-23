import "./Button.css";
import "@/index.css";

function Button({label, color, icon: Icon, onClick, url})
{
    const Tag = url ? "a" : "button";

    return <Tag
        onClick={onClick}
        href={url}
        className={`button ${color} flex-center`}
    >
        {Icon && <Icon />}
        <span>{label}</span>
    </Tag>;
}

export default Button;