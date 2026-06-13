import "./FixedContainer.scss"

function FixedContainer({ children, x = "left", y = "top" })
{
    return <div className={`fixed-container ${x} ${y}`}>{children}</div>;
}

export default FixedContainer;