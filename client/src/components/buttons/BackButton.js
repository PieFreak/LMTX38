import React from 'react';

const BackButton = (props) => (
  <button 
    className="absolute top-0 left-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 max-md:text-xs"
    onClick={props.onClick}
  >
    Tillbaka
  </button>
)

export default BackButton;