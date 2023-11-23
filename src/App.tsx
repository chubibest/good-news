import newsitems  from './utilities/dummydata'
import NewsItem from './Components/NewsItem'
import React from 'react'

function App() {
  return (
    <div className="px-[4vw]">
      {newsitems.map(({ headline, date }) => {
        return (
          <div className='mb-[9vw]'>

            <NewsItem 
              headline={headline as string}
              date={date}
              source={'guardian'}
              thumbnail='https://www.kasandbox.org/programming-images/avatars/spunky-sam.png'
              content='lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet lipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum more lorem ipusm immet'
              />
          </div>
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