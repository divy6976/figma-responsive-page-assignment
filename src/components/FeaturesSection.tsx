import { Users, MapPin, ShoppingBasket, CheckSquare } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users size={36} className="feature-icon-people" />,
      title: "People",
      description: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      buttonText: "Connect",
      buttonClass: "btn-feature-people"
    },
    {
      icon: <MapPin size={36} className="feature-icon-place" />,
      title: "Place",
      description: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      buttonText: "Meet up",
      buttonClass: "btn-feature-place"
    },
    {
      icon: <ShoppingBasket size={36} className="feature-icon-product" />,
      title: "Product",
      description: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      buttonText: "Get it",
      buttonClass: "btn-feature-product"
    },
    {
      icon: <CheckSquare size={36} className="feature-icon-program" />,
      title: "Program",
      description: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      buttonText: "Attend",
      buttonClass: "btn-feature-program"
    }
  ];

  return (
    <section className="features-section">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6">
              <div className="feature-card">
                <div className="d-flex align-items-center mb-3">
                  {feature.icon}
                  <h3 className="feature-title mb-0 ms-3">{feature.title}</h3>
                </div>
                <p className="feature-description mb-4">
                  {feature.description}
                </p>
                <button className={`btn btn-outline-feature ${feature.buttonClass}`}>
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
