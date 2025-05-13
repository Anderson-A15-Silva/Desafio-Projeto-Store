import AppBar from "../components/AppBar/AppBar";
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
import Footer from "../components/Footer/Footer";
import "./css/home.css";
import Banner from "../components/Banner/Banner";
import CardsSection from "../components/CardsSection/CardsSection";
import Button from "../components/Button/Button";

const Home = () => {
    return (
        <div id="homePage">

            <AppBar backgroundColor="var(--primary)" squareDisplay={true} />

            <main>

                <section id="welcome-area">

                    <div>

                        <h1>One More Friend</h1>
                        <p>Thousand More Fun!</p>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>

                        <div>
                            <Button text="View Intro" backgroundColor="var(--neutral)" color="var(--terciary)" border="0.1px solid var(--terciary)" haveLink={true} />
                            <Button text="Explore Now" backgroundColor="var(--terciary)" color="var(--neutral)" border="0.1px solid var(--terciary)" haveLink={true} nextPage="/category/pets" />
                        </div>

                    </div>

                    <img src={backgroundImage1} alt="woman lifting up a dog" id="img-background-1" />

                    <div id="square-1"></div>
                    <div id="square-2"></div>

                </section>

                <CardsSection type="pet" title="Whats new?" text="Take a look at some of our pets" />

                <div id="banner-1">
                    <Banner backgroundImage={backgroundImage2} title="One More Friend" subtitle="Thousands More Fun!" text="Having a pet means you have more joy, a new friend, a happy person who will always b'e with you to have fun. We have 200+ different pets that can meet your needs!" nextPage="/category/pets" backgroundColor="var(--terciary)" textSide="end" flexDirection="row"/>
                </div>

                <CardsSection type="product" title="Hard to choose right products for your pets?" text="Our Products" />

                <section id="information-section">

                    <div id="partners-information">

                        <div id="partners-header">
                            <p>Proud to be part of <span className="blue-word">Pets Sellers</span></p>
                            <Button text="View all of our sellers" haveLink={false} backgroundColor="var(--neutral)" color="var(--terciary)" border="2px solid var(--terciary)" />
                        </div>

                        <div id="partners-logo">
                            <img src={partnerIcon1} alt="sheba logo" />
                            <img src={partnerIcon2} alt="whiskas logo" />
                            <img src={partnerIcon3} alt="bakers logo" />
                            <img src={partnerIcon4} alt="felix logo" />
                            <img src={partnerIcon5} alt="good boy logo" />
                            <img src={partnerIcon6} alt="butchers logo" />
                            <img src={partnerIcon7} alt="pedigree logo" />
                        </div>

                    </div>

                    <div id="banner-2">
                         <Banner backgroundImage={backgroundImage3} title="Adoption" subtitle="We Need Help. So Do They" text="Adopt a pet and give it a home, it will be love you back unconditionally." nextPage="/category/pets" backgroundColor="var(--quaternary)" textSide="start" flexDirection="row-reverse"/>
                    </div>          

                    <CardsSection title="You already know?" text="Useful pet knowledge" type="informative" />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;