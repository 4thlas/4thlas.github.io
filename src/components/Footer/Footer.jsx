import "@/styles/index.scss";
import "./Footer.scss";

const date = new Date();
const year = date.getFullYear();

function Footer()
{
    return <footer className="w-100 text-center flex-center">
        <span className="text-dim ">Athlas {year}</span>
    </footer>
}

export default Footer;