import NewsAPI from 'newsapi'
import { QueryParams, FilterParams } from '../../../types/BaseTypes';

const newsapi = new NewsAPI(process.env.NEWS_API_KEY as string);

const query = async ({ search, page }: QueryParams) => {

    const response = await newsapi.v2.topHeadlines({
        ...(search && { q: search.trim() }),
        page
    })

    console.log('Query News API', JSON.stringify(response, null, 2))
    const { status, articles } = response
    if(status !== 'ok') {
        return []
    }

    // filter by date, author and source
    return articles
}

export { query }
