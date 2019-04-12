
import React from 'react';

export default function LogoClub({ url, className }) {
  return (
    <div className={className}>
      <img className="shadow-logo" src={url} width="100%" height="100%" alt="url" />
    </div>
  );
}
