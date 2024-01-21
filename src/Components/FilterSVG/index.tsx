import React from 'react'
import { optionToText } from '../../utilities/options'

const FilterSVG = ({ filter, clearFilter, setIsFilterOpen, isFilterOpen }) => {
  const fill = filter ? "fill-active" : "fill-[var(--color)]";
  const textColor = filter ? "text-active" : "text-[var(--color)]";

  return (
    <div className='cursor-pointer relative flex justify-center gap-[1vw] items-center'>
      <svg className={`z-10 w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] ${fill}`} viewBox="0 0 24 24" aria-label="Filter Icon" focusable="false">
          <path d="M20,8H4C3.4,8,3,7.6,3,7s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,8,20,8z M18,13c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10C17.6,14,18,13.6,18,13z M15,19c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4C14.6,20,15,19.6,15,19z"></path>
      </svg>
      {/* <div className="h-[3vw] absolute top-[2vw] w-[6vw]  border border-[3vw] border-b-[--background] border-r-[transparent] border-t-[transparent] border-l-[transparent]"></div> */}
      {
        filter ?
        <p className={`${textColor}`}>
            {optionToText[filter]}
        </p> : null
      }
      {
        filter ?
        <svg className={`w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] ${fill}`} 
          onClick={(e) => {
            clearFilter(null)
            setIsFilterOpen(false)

            e.stopPropagation()
          }}
          aria-label='Remove selected filter'
          viewBox="0 0 24 24" focusable="false">
          <path d="M13.4,12l7.5-7.5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L4.5,3.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l7.5,7.5l-7.5,7.5 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7.5-7.5l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12z"></path>
        </svg> 
        : null
      }
    </div>
  );
}

export default FilterSVG