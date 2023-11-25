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

const keys = ['c05d19226b0e4a96aecb2e7a7b9b038c', 'f59045462e5d4e0c90a69566174eb553', '2bc63f8347f44a1abdc54dc4b842111a', '27618ebce3df43f79bceb9f2af784ad2']
const query = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]>  => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${keys[0]}&page=${page}&language=en`
    const response = await fetch(search ? `${url}&q=${search}`: url);
    const data = await response.json() as ReturnType;

    const { status, articles } = data
    if(status !== 'ok') {
        keys.push(keys.shift() as string);

        return []
    }

    const result = articles.map((article: any) => {
        return {
            id: article.title,
            headline: article.title,
            thumbnail: article.urlToImage,
            date: formatDate(article.publishedAt),
            rawDate: article.publishedAt?.split('T')[0],
            url: article.url,
            source: 'newsapi' as 'newsapi',
        }
    })

    // filter by date, author and source
    return result.filter(({ headline }) =>  headline.trim() != '[Removed]')
}

export { query }
