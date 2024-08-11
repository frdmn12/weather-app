import React from 'react';
import './Background.css'; 

const Background: React.FC = () => {
  return (
    <div className="background fixed w-screen h-screen top-0 left-0 bg-black overflow-hidden -z-0">
      {Array.from({ length: 10 }).map((_, index) => (
        <span key={index} className={`span-${index} w-[50vmin] h-[50vmin] rounded-[50vmin] absolute`}></span>
      ))}
    </div>
  );
};

export default Background;
