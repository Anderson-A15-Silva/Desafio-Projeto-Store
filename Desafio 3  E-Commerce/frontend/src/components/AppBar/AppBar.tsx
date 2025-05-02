import "./AppBar.css";

const AppBar = () => {
    return (
        <header id="AppBar">
            <div>
                <p>Monito</p>
                <p>Pets for Best</p>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <input type="text" placeholder="Search something here!"/>
            <button>Join the community</button>
            <div id="square-3"></div>
        </header>
    )
}

export default AppBar;