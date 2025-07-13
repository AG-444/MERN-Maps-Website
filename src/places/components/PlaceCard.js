import React, { useEffect, useRef, useState } from 'react';
import './PlaceCard.css';

const PlaceCard = ({ image, title, description, actions }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showDropdown]);

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  if (isMobile) {
    return (
      <div className="place-card mobile">
        <div className="place-card__details">
          <h2 className="place-card__title">{title}</h2>
          <p className="place-card__description">{description}</p>
        </div>
        <div className="place-card__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-card__mobile-actions" ref={dropdownRef}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            &#x2026;
          </button>
          <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
            {actions}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="place-card">
      <div className="place-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="place-card__details">
        <h2 className="place-card__title">{title}</h2>
        <p className="place-card__description">{description}</p>
        <div className="place-card__actions">{actions}</div>
      </div>
    </div>
  );
};

export default PlaceCard;
