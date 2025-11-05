import { ChevronUp, ChevronDown } from 'lucide-react';
import communityIllustration from '@/assets/community-illustration.png';
import { useEffect, useState } from 'react';

const CommunitySection = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToggle = () => {
    try {
      if (isAtTop) {
        const bottom = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        window.scrollTo({ top: bottom, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // Fallback for older browsers
      if (isAtTop) {
        const bottom = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        document.documentElement.scrollTop = bottom;
        document.body.scrollTop = bottom;
      } else {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  };

  return (
    <section className="community-section">
      <div className="container py-5">
        <div className="row align-items-start g-4">
          <div className="col-12 col-md-8">
            <div className="community-header">
              <h2 className="community-title">
                Your <span className="text-hobby">Hobby</span>, Your <span className="text-community">Community</span>...
              </h2>
              <button className="btn btn-community-cta btn-block-sm">Get started</button>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-md-end">
            <button className="scroll-to-top" type="button" aria-label={isAtTop ? 'Go to bottom' : 'Go to top'} onClick={handleScrollToggle}>
              {isAtTop ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <div className="community-illustration text-center">
              <img className="img-fluid w-100" src={communityIllustration} alt="People enjoying various hobbies" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
