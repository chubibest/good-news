import NewsItem, { NewsItemProps } from './Components/NewsItem'
import React, { useEffect, useState, useCallback } from 'react'

import { composer } from './utilities/data-sources'

function App() {
  const [newsItems, setNewsItems] = useState([] as NewsItemProps[])
  const [searchText, setSearchText] = useState('')
  const [buttonActive, setButtonActive] = useState(true)
  

  const changeSearchText = useCallback((e) => {
    setSearchText(() => e.target.value)
  }, [])

  const handleSearch = useCallback(() => {

    if (!searchText) {
      return
    }
    setButtonActive(() => false)
    composer({ page: 1, search: searchText }).then((data) => {
      setNewsItems(() => data)
      setButtonActive(() => true)
    })
  }, [])

  useEffect(() => {
    composer({ page: 1 }).then((data) => {
      setNewsItems(data)
    })

  }, [])
  return (
    <div className="px-[4vw] py-[4vw] md:py-[3vw]">
      <header className='pb-[8vw] md:pb-[4vw]'>
        <div className='flex gap-[2vw]'>
          <input className='pl-[2vw] md:pl-[1vw]' type="text" 
            placeholder="Search" value={searchText} onChange={changeSearchText}
            />
          <button className={`${!buttonActive ? 'bg-[dimgrey]': ''}`} onClick={handleSearch} disabled={!buttonActive}>Search</button>
        </div>
      </header>

      {newsItems.map((item, index) => {
        return (
          <NewsItem
            {...item}
            key={`${item.id}-${index}-${item.headline}`}
            />
        )
      })}
    </div>
  )
}
// NewsAPI , The Guardian, New York Times
export default App


// const apiKey = 'YOUR_NEWSAPI_API_KEY';
// const apiUrl = 'https://newsapi.org/v2/top-headlines';

// fetchNews();

// const apiUrl = 'https://content.guardianapis.com/search';
// const apiKey = 'YOUR_GUARDIAN_API_KEY';

// async function fetchGuardianNews() {
//   try {
//     const response = await fetch(`${apiUrl}?api-key=${apiKey}`);
//     const data = await response.json();
//     console.log(data.response.results);
//   } catch (error) {
//     console.error('Error fetching news from The Guardian:', error);
//   }
// }

// fetchGuardianNews();

// const apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json';
// const apiKey = 'YOUR_NYT_API_KEY';

// async function fetchNYTNews() {
//   try {
//     const response = await fetch(`${apiUrl}?api-key=${apiKey}`);
//     const data = await response.json();
//     console.log(data.results);
//   } catch (error) {
//     console.error('Error fetching news from New York Times:', error);
//   }
// }

// fetchNYTNews();

// - SEARCH(KEYWORD), FILTERING(DATE, CATEGORY, SOURCE)
// - PERSONALIZATION(SOURCES, CATEGORIES, AUTHORS) LOCAL STORAGE

// // newsapi: business entertainment general health science sports technology
// // nytimes: business, fashion, food, health  science, sports, technology, 