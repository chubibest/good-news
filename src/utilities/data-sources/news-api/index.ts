import { QueryParamsAndFilters } from '../../../types/BaseTypes';
import { NewsItemProps } from "../../../Components/NewsItem";
import formatDate from '../../formatDate';
interface ReturnType {
    status: string
    articles: {
        id: string,
        name: string
        author: string
        title: string
        description: string
        url: string
        urlToImage: string
        publishedAt: string
        content: string
    }[]
}

const query = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]>  => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=c05d19226b0e4a96aecb2e7a7b9b038c&page=${page}&language=en`
    const response = await fetch(search ? `${url}&q=${search}`: url);
    const data = await response.json() as ReturnType;

    const { status, articles } = data
    if(status !== 'ok') {
        return []
    }

    const result = articles.map((article: any) => {
        return {
            id: article.title,
            headline: article.title,
            thumbnail: article.urlToImage,
            date: formatDate(article.publishedAt),
            url: article.url,
            source: 'newsapi' as 'newsapi',
        }
    })
    // filter by date, author and source
    return result
}

export { query }
