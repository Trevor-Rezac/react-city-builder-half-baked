import React from 'react';

export default function City({ skylineId, waterfrontId, castleId }) {
  
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load appropriate images that live in the public directory */}
      <img className='skyline-img' src={`skyline-${skylineId}.jpeg`}></img>
      <img className='waterfront-img' src={`waterfront-${waterfrontId}.jpeg`}></img>
      <img className='castle-img' src={`castle-${castleId}.jpeg`}></img>
    </div>
  );
}
