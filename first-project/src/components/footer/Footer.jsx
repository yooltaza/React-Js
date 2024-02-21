import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media */}
            <div className="footer-social-media">
                <div className="footer-social-media-text">Follow US On Social Media</div>
                <div className="footer-social-media-icons">
                    {/* Instagram */}
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'red' }} className="bi bi-instagram"></i>
                    </div>
                    {/* Facebook */}
                    <div className="footer-social-media-icon">
                        <i style={{ color: '#2980b9' }} className="bi bi-facebook"></i>
                    </div>
                    {/* YouTube */}
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'red' }} className="bi bi-youtube"></i>
                    </div>
                    {/* Twitter */}
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'skyblue' }} className="bi bi-twitter"></i>
                    </div>
                    {/* Telegram */}
                    <div className="footer-social-media-icon">
                        <i style={{ color: 'darkblue' }} className="bi bi-telegram"></i>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Usefull Links</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">Authors</li>
                        <li className="footer-link">About US</li>
                        <li className="footer-link">Contact Us</li>
                        <li className="footer-link">Register</li>
                    </ul>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Informations</h3>
                    <div className="footer-adress-wrapper">
                        <div className="footer-adress-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            Iraq - Baghdad - Maroc
                        </div>
                        <div className="footer-adress-item">
                            <i className="bi bi-telephone-fill"></i>
                            123-456-789
                        </div>
                        <div className="footer-adress-item">
                            <i className="bi bi-envelope-fill"></i>
                            info@gmail.com
                        </div>
                    </div>
                </div>

                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About US</h3>
                    <p className='footer-description'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Provident perferendis iure odio quasi hic ipsam sed natus.
                        Tempora corrupti culpa nobis accusamus itaque ipsam voluptatum,
                        doloribus a at, dolorum hic.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ducimus dolorum sint corrupti facilis rerum repellendus sequi.
                        Non placeat sequi incidunt,libero minus sint ad consectetur.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;