import React, { useState } from 'react';

const Accordion = ({ title, children, bgColor, borderColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item mb-3">
      <button
        className={`accordion-header w-full text-left p-3 ${bgColor} hover:bg-opacity-80 rounded-md font-medium ${textColor} flex justify-between items-center transition duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      <div className={`accordion-content p-3 ${bgColor.replace('-100', '-50')} border ${borderColor} rounded-b-md ${isOpen ? '' : 'hidden'} ${textColor.replace('-800', '-700')}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;