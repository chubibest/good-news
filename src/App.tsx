import NewsItem, { NewsItemProps } from './Components/NewsItem'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import Reload from './Components/Reload'
import { composer } from './utilities/data-sources'
import SortSVG from './Components/SortSVG'
import FilterSVG from './Components/FilterSVG'

function App(props) {
  const searchParams = new URLSearchParams(window.location.search);
  const searchString = searchParams.get('q')
  
  const [newsItems, setNewsItems] = useState([] as NewsItemProps[])
  const [inputValue, setInputValue] = useState(searchString || '')
  const [buttonActive, setButtonActive] = useState(true)
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'newToOld' | 'oldToNew'>('newToOld');

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleFilterClick = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const handleFilterOption = (filter: string) => {
    setSelectedFilter((prevFilter) => (prevFilter === filter ? null : filter));
    setIsFilterOpen(false);
  };
  const handleSortOrder = useCallback(() => {
    setSortOrder((prevOrder) => (prevOrder === 'newToOld' ? 'oldToNew' : 'newToOld'));
  }, []);
  const handleChangeSearchText = useCallback((e) => {
    setInputValue(() => e.target.value)
  }, [])
  const handleSearch = useCallback(() => {
    if (!inputValue) return
    window.location.replace(window.location.href + `?q=${inputValue}`)
  }, [inputValue])

  const fetchMoreNews = useCallback(() => {
    if (ref.current && !fetching) {
      if(ref.current.scrollHeight - ref.current.scrollTop < (2 * ref.current.clientHeight)) {
        setFetching(() => true)
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [fetching])

  useEffect(() => {
    setFetching(() => true)

    composer({ page, ...(searchString && { search: searchString }) }).then((data) => {
      console.log(JSON.stringify(data, null, 2))
      setNewsItems((prevItems) => [...prevItems, ...data]);
      setButtonActive(() => true)
      setFetching(() => false)
    });

  }, [page, searchString]);
  useEffect(() => {
    if(!ref.current) return

    ref.current.addEventListener('scroll', fetchMoreNews);
    return () => ref.current.removeEventListener('scroll', fetchMoreNews);
  }, [fetchMoreNews]);

  return (
    
    newsItems.length === 0 ? 
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Reload loading={true}/>
      </div>
      :
      <div className="overflow-hidden h-[100vh] px-[4vw] py-[18vw] md:py-[3vw]">
        <header className=' pb-[8vw] md:pb-[3vw] z-10 bg-[#242424]'>
          <div className='flex justify-between md:justify-evenly items-center'>
            <div className='flex gap-[2vw]'>
              <input className='pl-[2vw] md:pl-[1vw]' type="text" 
                placeholder="Search" value={inputValue} onChange={handleChangeSearchText}
                />
              <button className={`${!buttonActive ? 'bg-[dimgrey]': ''}`} onClick={handleSearch} disabled={!buttonActive}>Search</button>
            </div>
            <Reload loading={fetching}/>
          </div>
          <div className='flex justify-evenly'>
            <div className="relative" onClick={handleFilterClick}>
              <FilterSVG isActive={selectedFilter}/>
              {isFilterOpen && (
                <div className="absolute top-[2vw] left-[0] bg-white p-[1vw] rounded shadow">
                  <div onClick={() => handleFilterOption('nytimes')}>New York Times</div>
                  <div onClick={() => handleFilterOption('guardian')}>The Guardian</div>
                  <div onClick={() => handleFilterOption('newsapi')}>News API</div>
                </div>
              )}
            </div>
            {selectedFilter && (
              <div className="flex items-center">
                <span className="mr-[0.5vw]">{selectedFilter}</span>
                <div onClick={() => setSelectedFilter(null)}>Clear</div>
              </div>
            )}
            <div onClick={handleSortOrder}>
              <SortSVG sortOrder={sortOrder} />
            </div>
          </div>
        </header>
        <section ref={ref} className='overflow-scroll h-[80vh] md:h-[90vh]'>
          <ul>
            {newsItems.map((item, index) => {
              return (
                <li key={`${item.id}-${index}-${item.headline}`}>
                  <NewsItem
                    {...item} 
                  />
                </li>
              )
            })}
          </ul>
        </section>
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