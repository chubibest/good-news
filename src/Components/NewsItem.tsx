import React from 'react';
import ColorfulTag from './ColorfulTag';

export interface NewsItemProps {
    headline: string
    thumbnail: string
    date: string
    source: string
    content: string
}

const sourceTagStyles = {
    nytimes: {
        bgColor: 'bg-[#000]',
        text: 'NY Times',
        textColor: 'text-[#fff]'
    },
    guardian: {
        bgColor: 'bg-[#052962]',
        text: 'The Guardian',
        textColor: 'text-[#fff]'
    },
    newsapi: {
        bgColor: 'bg-[#1a73e8]',
        text: 'NewsAPI',
        textColor: 'text-[#fff]'
    },
}
const NewsItem = ({ headline, thumbnail, date, source }: NewsItemProps) => {
    return (
        <div className='flex flex-row gap-[2vw]'>
            <div className="w-[10vw] h-[10vw] rounded">
                <img className='gap-[2vw] object-cover' src={thumbnail} alt={headline} />
            </div>
            <div className='flex flex-col justify-between'>
                <h3 className='text-left'>{headline}</h3>
                <div className='flex flex-row justify-start'>
                    <p className="mr-[4vw]">{date}</p>
                    <ColorfulTag {...sourceTagStyles[source]} />
                </div>
            </div>
        </div>
    );
};

export default NewsItem;