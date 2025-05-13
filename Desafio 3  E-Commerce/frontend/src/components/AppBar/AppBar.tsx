import { Link } from "react-router-dom";
import "./AppBar.css";

interface AppBarProps {
    backgroundColor: string;
    squareDisplay: boolean;
}

const AppBar: React.FC<AppBarProps> = ({ backgroundColor, squareDisplay }) => {
    return (
        <header id="AppBar" style={{ backgroundColor: backgroundColor, display: squareDisplay ? "flex" : "none" }}>
            <div id="logo-header">
                <p>Monito</p>
                <p>Pets for Best</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/pets">Category</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <input type="text" placeholder="Search something here!" />
            <button>Join the community</button>
            <button> <img src="#" alt=""/> VND</button>
            <div id="square-3"></div>
        </header>
    );
};

export default AppBar;
