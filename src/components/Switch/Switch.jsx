import "./Switch.scss";

function Switch({label, value = false, onChange })
{
    return <label className="switch-label row g-15 flex-center">
        <div className={`switch ${value ? "on" : "off"}`}>
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className="slider" />
        </div>
        <span>{label}</span>
    </label>;
}

export default Switch;