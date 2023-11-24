import React from 'react'

const FilterSVG = ({ isActive }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={isActive ? "#fff" : "#000"}
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      {/* Your filter icon path */}
      {isActive ? (
        <>
          <rect width="24" height="24" fill="none" />
          <path d="M5 8l7 4 7-4V4H5z" />
        </>
      ) : (
        // Your inactive filter icon path
        <path d="M0 0h24v24H0z" fill="none" />
      )}
    </svg>
);

export default FilterSVG