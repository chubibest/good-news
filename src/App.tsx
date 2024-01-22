import React, { useEffect, useState, useCallback, useRef } from 'react'

import NewsItem, { NewsItemProps } from './Components/NewsItem'
import Reload from './Components/Reload'
import SortSVG from './Components/SortSVG'
import FilterSVG from './Components/FilterSVG'
import PreferenceSelector from './Components/PreferenceSelector'
import { composer, sortFunction } from './utilities/data-sources'
import { options, optionToText } from './utilities/options'

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchString = searchParams.get('q')

  const [choosingPreferences, setChoosingPreferences] = useState(!searchString)
  const [fetchingPreferences, setFetchingPreferences] = useState(false)
  const [itemsDeferredForPreferences, setItemsDeferredForPreferences] = useState([] as NewsItemProps[])
  const [preferences, setPreferences] = useState([] as string[])
  const [newsItems, setNewsItems] = useState([] as NewsItemProps[])
  const [sortedAndFiltered, setSortedAndFiltered] = useState([] as NewsItemProps[])
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
    setButtonActive(() => false)
    window.location.replace(window.location.protocol + '//' + window.location.host + '/good-news' + `?q=${inputValue}`)
  }, [inputValue])

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Trigger the search function
      handleSearch();
    }
  };
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
      setNewsItems((prevItems) => [...prevItems, ...data]);
      setButtonActive(() => true)
      setFetching(() => false)
    });
  }, [page, searchString]);

  useEffect(() => {
    if(preferences.length === 0) return
    if(page === 1) {
      setFetchingPreferences(() => true)
    }
    setFetching(() => true)
    const promises = preferences.map((preference) => {
      return composer({ page, preference: preference.toLowerCase() });
    })

    Promise.allSettled(promises).then((results) => {
      const data = results.reduce((acc, result) => {
        if(result.status === 'fulfilled') {
          return [...acc, ...result.value]
        }
        return acc
      }, [] as NewsItemProps[])
      if(page === 1) {
        setNewsItems((prevItems) => {
          setItemsDeferredForPreferences(() => prevItems)
          return data
        });
      } else if(page === 2) {
        setNewsItems((prevItems) => [...prevItems, ...itemsDeferredForPreferences, ...data])
      }else {
        setNewsItems((prevItems) => [...prevItems, ...data]);
      }
      setFetching(() => false)
      setFetchingPreferences(() => false)
    })
  }, [preferences, page]);

  useEffect(() => {
    if(!ref || !ref.current) return

    ref.current.addEventListener('scroll', fetchMoreNews);
    return () => {
      if(ref && ref.current) {
        ref.current.removeEventListener('scroll', fetchMoreNews);
      }
    }
  }, [fetchMoreNews, fetching, choosingPreferences]);

  useEffect(() => {
    setSortedAndFiltered(() => [
      ...sortFunction(newsItems,
      {order: sortOrder, source: selectedFilter as string, preferences: preferences.length > 0}
    )])
  }, [selectedFilter, sortOrder, newsItems])

  const closeFilter = useCallback(() => {
    setIsFilterOpen(()=> false);
  }, [])

  useEffect(() => {
    if(isFilterOpen){
      document.body.addEventListener('click', closeFilter);
      return () => {
        document.body.removeEventListener('click', closeFilter);
      }
    }
  }, [isFilterOpen])

  return (
    choosingPreferences ? 
      <PreferenceSelector setPreferences={setPreferences} setChoosingPreferences={setChoosingPreferences} />
      :
    newsItems.length === 0 || fetchingPreferences ? 
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Reload loading={true}/>
      </div>
      :
      <div className="overflow-hidden h-[100vh] px-[4vw] py-[8vw] md:py-[3vw]">
        <header className=' pb-[8vw] md:pb-[3vw] z-10 bg-[var(--background)]'>
          <div className='flex justify-between md:justify-evenly items-center'>
            <div className='flex gap-[2vw]'>
              <input className='pl-[2vw] md:pl-[1vw]' type="text" 
                placeholder="Search" value={inputValue} onChange={handleChangeSearchText}
                onKeyPress={handleEnterKeyPress}
                />
              <button className={`${!buttonActive ? 'bg-[dimgrey]': ''}`} onClick={handleSearch} disabled={!buttonActive}>Search</button>
            </div>
            <Reload loading={false}/>
          </div>
          <div className='flex justify-center items-center gap-[4vw] pt-[2vw] pt-[4vw]'>
            <div className="relative" onClick={(e) => {handleFilterClick(); e.stopPropagation()}} aria-label='Filter by news source'>
              <FilterSVG filter={selectedFilter} isFilterOpen={isFilterOpen} clearFilter={setSelectedFilter} setIsFilterOpen={setIsFilterOpen}/>
              {isFilterOpen && (
                <ul className="text-left p-[3vw] md:p-[2vw] flex flex-col absolute z-10 w-[40vw] md:w-[15vw]  gap-[2vw] top-[7vw] md:top-[3vw] left-[0] left-[-2vw] md:left-[-2vw] rounded shadow-sm shadow-[--color] bg-[var(--background)]">
                  {options.map((option) => (
                    <li
                      key={option}
                      className='cursor-pointer'
                      onClick={(e) => {
                        handleFilterOption(option)
                        e.stopPropagation()
                      }}
                    >
                      {optionToText[option]}
                    </li>
                  ))  
                  }
                </ul>
              )}
            </div>
            <div onClick={handleSortOrder} aria-label='Sort by date'>
              <SortSVG sortOrder={sortOrder} />
            </div>
          </div>
        </header>
        <section ref={ref} className='overflow-scroll h-[80vh] md:h-[90vh]'>
          <ul>
            {sortedAndFiltered.map((item, index) => {
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
            {fetching ? 
                <div className='backdrop-blur fixed bottom-0 py-[6vw] md:py-[2vw] flex justify-center w-[100vw]'>
                  <Reload loading={fetching}/>
                </div>
               : null
             }
      </div>
  )
}

export default App
