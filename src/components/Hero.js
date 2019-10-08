import React from 'react';

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  // imported from app.css
  hero: 'defaultHero'
};
