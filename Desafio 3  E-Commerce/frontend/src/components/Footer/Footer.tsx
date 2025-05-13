import { Link } from 'react-router-dom';
import './Footer.css';
import Button from '../Button/Button';

const Footer = () => {
    return (
        <footer id='footer'>
            <div>
                <div id='footer-form'>
                    <div>
                        <p>Register Now So You Don't Miss <br/> Our Programs</p>
                    </div>
                    <div>
                        <input type="email" placeholder='Enter your email'/>
                        <Button text='Subscribe Now' haveLink={false} backgroundColor='var(--terciary)' color='var(--neutral)' border='none'/>
                    </div>
                </div>
                <div id='footer-list'>
                    <div>
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/category/pets">Category</Link></p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <img src="#" alt="facebook logo icon" />
                        <img src="#" alt="twitter logo icon" />
                        <img src="#" alt="instagram logo icon" />
                        <img src="#" alt="youtube logo icon" />
                    </div>
                </div>
                <hr />
                <div id='footer-end'>
                    <div>
                        <p>© 2022 Monito. All rights reserved.</p>
                        <div>
                            <p>Monito</p>
                            <p>Pest For Best</p>
                        </div>
                    </div>
                    <div>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;