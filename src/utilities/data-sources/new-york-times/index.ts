import { QueryParams } from "../../../types/BaseTypes";

const apiKey = process.env.New_YORK_TIMES_API_KEY;


const query = async ({ search, page }: QueryParams) => {
    const nytPage = page - 1;
    const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}&page=${nytPage}`;
    const withSearch = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}&page=${nytPage}`

    const url = search ? withSearch : apiUrl;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
    } catch (error) {
        console.error('Error fetching news from New York Times:', error);
        return []
    }
}

export { query }

// - SEARCH(KEYWORD), 
// - FILTERING(DATE, CATEGORY, SOURCE) after fetching
// - PERSONALIZATION(SOURCES, CATEGORIES, AUTHORS) LOCAL STORAGE