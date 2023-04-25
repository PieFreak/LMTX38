import React from 'react';

const Optioncircle = ({ category, buttonActivate }) => {
  const getFontSize = () => {
    return window.innerWidth >= 768 ? '1rem' : '0.875rem';
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mx-auto bg-light text-center rounded-circle" style={{ width: '15rem', height: '15rem' }}>
      <p className="fs-5 h5 fw-bold mb-3">{category.title}</p>
      <p className="fs-6 mb-0 px-2">{category.text}</p>
      <button className="btn btn-outline-secondary border-2 mt-2 mx-2 py-1" onClick={buttonActivate}>
        <h2 className="fw-bold mb-0" style={{ fontSize: getFontSize() }}>Välj</h2>
      </button>
    </div>
  );
};

export default Optioncircle;
