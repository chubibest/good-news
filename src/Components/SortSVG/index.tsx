import React from "react";

const SortSVG = ({ sortOrder }) => {
    const fill = sortOrder === "oldToNew" ? "fill-active" : "fill-inactive";
    const textColor = sortOrder === "oldToNew" ? "text-active" : "text-inactive";

    return (
        <div className='cursor-pointer flex justify-center gap-[1vw] items-center'>
            <svg 
            className={`w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] ${fill}`} 
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false">
                <path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z"></path>
            </svg>
            <p className={`${textColor}`}>
                {sortOrder === "newToOld" ? 'New to Old': 'Old to New'}
            </p>
        </div>
    )
}

export default SortSVG