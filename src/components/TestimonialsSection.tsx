import { Quote, Play } from 'lucide-react';
import dancerProfile from '@/assets/dancer-profile.jpg';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container py-5">
        <div className="testimonial-card">
          <div className="d-flex align-items-start mb-4">
            <div className="quote-icon-circle">
              <Quote size={32} strokeWidth={2.5} />
            </div>
            <h2 className="testimonial-title ms-3 mb-0">Testimonials</h2>
          </div>
          
          <p className="testimonial-text mb-4">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <div className="audio-player">
                <button className="play-button">
                  <Play size={24} fill="white" />
                </button>
                <div className="audio-progress">
                  <div className="progress-bar">
                    <div className="progress-indicator"></div>
                  </div>
                  <span className="audio-time">0:00</span>
                </div>
                <div className="audio-avatar">
                  <img className="img-fluid" src={dancerProfile} alt="Shubha Nagarajan" />
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img className="img-fluid" src={dancerProfile} alt="Shubha Nagarajan" />
                </div>
                <div className="author-info">
                  <h4 className="author-name">Shubha Nagarajan</h4>
                  <p className="author-title">Classical Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
