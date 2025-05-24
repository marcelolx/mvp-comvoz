import React from 'react';

const MetricCard = ({ icon, title, value, unit, description, bgColor, borderColor, textColor }) => {
  return (
    <div className={`${bgColor} p-5 rounded-lg shadow-sm border ${borderColor}`}>
      <h3 className={`text-lg font-semibold ${textColor} mb-2 flex items-center`}>
        <span className="mr-2">{icon}</span> {title}
      </h3>
      <p className={`text-4xl font-bold ${textColor}`}>{value} <span className={`text-xl ${textColor.replace('-800', '-600')} `}>{unit}</span></p>
      <p className={`text-sm ${textColor.replace('-800', '-500')} mt-2`}>{description}</p>
    </div>
  );
};

export default MetricCard;