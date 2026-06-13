import "./Switch.scss";

function Switch({label, labelIcon: LabelIcon, title, value = false, onChange })
{
    return <label
        className={`switch-label row g-15 flex-center ${value ? "on" : "off"}`}
        title={title}
    >
        {LabelIcon && <LabelIcon />}

        <div className={`switch ${value ? "on" : "off"}`}>
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="slider" />
        </div>
        {label && <span>{label}</span>}
    </label>;
}

export default Switch;