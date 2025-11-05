import hobbiesIllustration from '@/assets/hobbies-illustration.png';
import { useState } from 'react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'signin' | 'joinin'>('signin');

  return (
    <section className="hero-section">
      <div className="container py-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-7 pe-lg-5">
            <h1 className="hero-title mb-4">
              Explore your <span className="text-secondary">hobby</span> or <span className="text-primary">passion</span>
            </h1>

            <p className="hero-text mb-4">
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
              suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
              outdoor activities…
            </p>

            <p className="hero-text mb-5">
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
              products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>

            <div className="illustration-container mt-5">
              <img 
                src={hobbiesIllustration} 
                alt="People enjoying various hobbies" 
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-12 col-md-5 mt-4 mt-lg-0">
            <div className="auth-card">
              <div className="auth-tabs mb-4">
                <button
                  className={`auth-tab ${activeTab === 'signin' ? 'active' : ''}`}
                  onClick={() => setActiveTab('signin')}
                  type="button"
                >
                  Sign In
                </button>
                <button
                  className={`auth-tab ${activeTab === 'joinin' ? 'active' : ''}`}
                  onClick={() => setActiveTab('joinin')}
                  type="button"
                >
                  Join In
                </button>
              </div>

              {/* Auth form body */}
              {activeTab === 'signin' ? (
                <div className="auth-form">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control auth-input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type="password"
                      className="form-control auth-input"
                      placeholder="Password"
                    />
                    <button className="btn btn-link password-toggle" type="button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#" className="text-muted text-decoration-none">
                      <span className="me-1">{/* lock icon not necessary, keep spacing */}</span>
                      Forgot password?
                    </a>
                  </div>

                  <button className="btn btn-primary w-100 continue-btn mb-4">
                    Continue
                  </button>

                  <div className="divider mb-4">
                    <span>Or connect with</span>
                  </div>

                  <button className="btn btn-social w-100 mb-3">
                    <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  <button className="btn btn-social w-100 mb-1">
                    <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Continue with Facebook
                  </button>
                </div>
              ) : (
                <div className="auth-form">
                  <button className="btn btn-social w-100 mb-3">
                    <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  <button className="btn btn-social w-100 mb-4">
                    <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Continue with Facebook
                  </button>

                  <div className="divider mb-4">
                    <span>Or connect with</span>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control auth-input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type="password"
                      className="form-control auth-input"
                      placeholder="Password"
                    />
                    <button className="btn btn-link password-toggle" type="button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <div className="password-strength-label">Password strength</div>
                  </div>

                  <p className="terms-text mb-3">
                    By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                  </p>

                  <button className="btn btn-primary w-100 continue-btn">
                    Agree and Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
