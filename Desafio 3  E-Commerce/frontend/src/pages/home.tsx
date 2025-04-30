import AppBar from "../components/AppBar/AppBar";
import Card from "../components/Card/Card";
import backgroundImage1 from '../assets/imgs/background-1.png';
import cat1 from '../assets/imgs/cat-1.png';
import "./css/home.css";

const Home = () => {
    return (
        <>
            <AppBar/>
            <main>
                <section id="welcome-area">
                    <div>
                        <h1>One More Friend</h1>
                        <p>Thousand More Fun!</p>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div>
                            <button>View Intro</button>
                            <button>Explore Now</button>
                        </div>
                    </div>
                    <img src={backgroundImage1} alt="woman lifting up a dog" id="img-background-1" />
                    <div id="square-1"></div>
                    <div id="square-2"></div>
                    <div id="square-3"></div>
                </section>
                <section className="cards-section">
                    <div>
                        <div>
                            <div id="cards-header">
                                <p>Whats new?</p>
                                <p>Take a look at some of our pets</p>
                            </div>
                            <button>View More</button>
                        </div>
                        <div className="cards-area">
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                            <Card name='a' genre='a' image={cat1} alternativeText='#' age={13}/>
                        </div>        
                    </div>             
                </section>
                <section>
                    <div></div>
                </section>
            </main>
            
        </>
    )
}

export default Home;