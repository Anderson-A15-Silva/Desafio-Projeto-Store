import AppBar from "../components/AppBar/AppBar";
import Card from "../components/Card/Card";
import backgroundImage1 from '../assets/imgs/background-1.png';
import backgroundImage2 from '../assets/imgs/background-2.png';
import backgroundImage3 from '../assets/imgs/background-3.png';
import partnerIcon1 from '../assets/icons/logo-sheba.png';
import partnerIcon2 from '../assets/icons/logo-whiskas.png';
import partnerIcon3 from '../assets/icons/logo-bakers.png';
import partnerIcon4 from '../assets/icons/logo-felix.png';
import partnerIcon5 from '../assets/icons/logo-good-boy.png';
import partnerIcon6 from '../assets/icons/logo-butchers.png';
import partnerIcon7 from '../assets/icons/logo-pedigree.png';
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
                            <button className="blue-button">Explore Now</button>
                        </div>
                    </div>
                    <img src={backgroundImage1} alt="woman lifting up a dog" id="img-background-1" />
                    <div id="square-1"></div>
                    <div id="square-2"></div>
                </section>
                <section className="cards-section">
                    <div>
                        <div>
                            <div className="cards-header">
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
                        <div id="first-banner">
                            <img src={backgroundImage2} alt="woman lifting up a dog" id="img-background-2" />
                            <div>
                                <h2>One More Friend</h2>
                                <p>Thousands More Fun!</p>
                                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                                <div>
                                    <button>View Intro</button>
                                    <button className="blue-button">Explore Now</button>
                                </div>
                            </div>
                            <div id="square-4"></div>
                            <div id="square-5"></div>
                        </div>     
                        <div>
                            <div className="cards-header">
                                <p>Hard to choose right products for your pets?</p>
                                <p>Our Products</p>
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
                <section id="information-section">
                    <div>
                        <div className="cards-header">
                            <div>
                                <p>Proud to be part of <span>Pets Sellers</span></p>
                                <button>View all of our sellers</button>
                            </div>
                            <div>
                                <img src={partnerIcon1} alt="sheba logo" />
                                <img src={partnerIcon2} alt="whiskas logo" />
                                <img src={partnerIcon3} alt="bakers logo" />
                                <img src={partnerIcon4} alt="felix logo" />
                                <img src={partnerIcon5} alt="good boy logo" />
                                <img src={partnerIcon6} alt="butchers logo" />
                                <img src={partnerIcon7} alt="pedigree logo" />
                            </div>
                        </div>
                   
                        <div id="second-banner">
                            <div>
                                <h2>Adoption</h2>
                                <p>We Need Help. So Do They</p>
                                <p>Adopt a pet and give it a home, <br/> it will be love you back unconditionally.</p>
                            </div>
                            <img src={backgroundImage3} alt="" />
                            <div id="square-6"></div>
                            <div id="square-7"></div>
                        </div>
                        
                        <div>
                            <div>
                                <div className="cards-header">
                                    <p>Hard to choose right products for your pets?</p>
                                    <p>Our Products</p>
                                </div>
                                <button>View More</button>
                            </div>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </>
    )
}

export default Home;