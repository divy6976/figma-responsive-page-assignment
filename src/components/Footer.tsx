import { Facebook, Twitter, Instagram, Youtube, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          {/* Hobbycue Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading">Hobbycue</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#work">Work with Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* How Do I Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading">How Do I</h5>
            <ul className="footer-links">
              <li><a href="#signup">Sign Up</a></li>
              <li><a href="#add-listing">Add a Listing</a></li>
              <li><a href="#claim">Claim Listing</a></li>
              <li><a href="#query">Post a Query</a></li>
              <li><a href="#blog">Add a Blog Post</a></li>
              <li><a href="#other">Other Queries</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#listings">Listings</a></li>
              <li><a href="#blog-posts">Blog Posts</a></li>
              <li><a href="#shop">Shop / Store</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading">Social Media</h5>
            <div className="social-icons">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#pinterest" className="social-icon" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 20l4-9 4 9M12 11V3" />
                </svg>
              </a>
              <a href="#google" className="social-icon" aria-label="Google+">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a href="#youtube" className="social-icon" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#telegram" className="social-icon" aria-label="Telegram">
                <Send size={18} />
              </a>
              <a href="#email" className="social-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            <div className="invite-friends mt-4">
              <h5 className="footer-heading">Invite Friends</h5>
              <div className="invite-input-group">
                <input 
                  type="email" 
                  className="form-control invite-input" 
                  placeholder="Email ID"
                />
                <button className="btn btn-invite">Invite</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© Purple Cues Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
