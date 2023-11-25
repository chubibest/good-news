import React from 'react';
import ColorfulTag from './ColorfulTag';
import { sourceTagStyles } from '../utilities/options';
export interface NewsItemProps {
    id: string
    headline: string
    thumbnail: string
    date: string
    rawDate: string
    url?: string
    // source: 'nytimes' | 'guardian' | 'newsapi'
    source: string
}



const NewsItem = ({ headline, thumbnail, date, source }: NewsItemProps) => {
    return (
        <div className='grid grid-cols-12 mb-[9vw]'>
            <h3 className='mb-[4vw] md:mb-[unset] text-left md:col-start-4 col-span-full'>{headline}</h3>
            <div className='md:col-start-4 col-span-full flex flex-row justify-start'>
                <p className="mr-[4vw]">{date}</p>
                <ColorfulTag {...sourceTagStyles[source]} />
            </div>
            <div className="relative row-start-3 md:row-start-1 mb-[2vw] md:mb-[unset]
                place-self-center w-[60vw] h-[60vw] md:w-[15vw] md:h-[15vw] rounded col-start-1
                col-span-full md:col-span-3 mt-[4vw] md:mt-[unset]">
                <img className='absolute top-1/2 md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 gap-[2vw] object-cover rounded' src={thumbnail} alt='Thumbnail' />
            </div>
        </div>
    );
};

export default NewsItem;