import React from 'react';

const Card = ({ image, title, description }) => (
  <div className="space-y-4 border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-[rgba(241,213,167,0.2)]">
      <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-white">{description}</p>
  </div>
);

export default Card;
