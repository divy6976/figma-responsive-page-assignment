import { Search, Compass, Star, Bookmark, Bell, ShoppingCart, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement | null>(null);
  const hobbiesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node) &&
        hobbiesRef.current &&
        !hobbiesRef.current.contains(event.target as Node)
      ) {
        setIsExploreOpen(false);
        setIsHobbiesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="logo-box me-2">
            <span className="logo-letter">h</span>
          </div>
          <div className="d-flex flex-column">
            <span className="brand-name">hobbycue</span>
            <span className="brand-tagline">Your Hobby, Your Community</span>
          </div>
        </a>

        <div className="search-container mx-4 flex-grow-1">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search here..."
              aria-label="Search"
            />
            <button className="btn btn-search" type="button">
              <Search size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div className="dropdown position-relative" ref={exploreRef}>
            <button
              className="btn btn-link nav-dropdown text-decoration-none"
              type="button"
              onClick={() => {
                setIsExploreOpen((v) => !v);
                setIsHobbiesOpen(false);
              }}
            >
              <Compass size={20} className="me-1 icon-primary" />
              <span>Explore</span>
              <ChevronDown size={16} className="ms-1" />
            </button>
            {isExploreOpen && (
              <div className="dropdown-menu-custom">
                <button className="dropdown-item-custom" type="button">People - Community</button>
                <button className="dropdown-item-custom" type="button">Places - Venues</button>
                <button className="dropdown-item-custom" type="button">Programs - Events</button>
                <button className="dropdown-item-custom" type="button">Products - Store</button>
                <button className="dropdown-item-custom" type="button">Blogs</button>
              </div>
            )}
          </div>

          <div className="dropdown position-relative" ref={hobbiesRef}>
            <button
              className="btn btn-link nav-dropdown text-decoration-none"
              type="button"
              onClick={() => {
                setIsHobbiesOpen((v) => !v);
                setIsExploreOpen(false);
              }}
            >
              <Star size={20} className="me-1 icon-primary" />
              <span>Hobbies</span>
              <ChevronDown size={16} className="ms-1" />
            </button>
            {isHobbiesOpen && (
              <div className="dropdown-menu-custom">
                <button className="dropdown-item-custom" type="button">Arts & Crafts</button>
                <button className="dropdown-item-custom" type="button">Sports</button>
                <button className="dropdown-item-custom" type="button">Music</button>
                <button className="dropdown-item-custom" type="button">Photography</button>
                <button className="dropdown-item-custom" type="button">More…</button>
              </div>
            )}
          </div>

          <button className="btn btn-link p-0 nav-icon">
            <Bookmark size={22} className="icon-muted" />
          </button>

          <button className="btn btn-link p-0 nav-icon">
            <Bell size={22} className="icon-muted" />
          </button>

          <button className="btn btn-link p-0 nav-icon">
            <ShoppingCart size={22} className="icon-primary" />
          </button>

          <button className="btn btn-outline-primary px-4 sign-in-btn">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
