import React from "react";

const SortSVG = ({ sortOrder }) => {
    const fill = sortOrder === "oldToNew" ? "fill-active" : "fill-inactive";
    const textColor = sortOrder === "oldToNew" ? "text-active" : "text-inactive";

    return (
        <div className='cursor-pointer flex justify-center gap-[1vw] items-center pt-[2vw] pt-[4vw]'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={`self-end w-[4vw] h-[4vw] md:w-[1.5vw] md:h-[1.5vw] ${fill}`}
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 6h18V4H3v2zM3 11h12V9H3v2zM3 16h12v-2H3v2z" />
            </svg>
            <p className={`small ${textColor}`}>
                {sortOrder === "newToOld" ? 'New to Old': 'Old to New'}
            </p>
        </div>
    )
}

export default SortSVG