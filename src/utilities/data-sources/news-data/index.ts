import { QueryParamsAndFilters } from '../../../types/BaseTypes';
import { NewsItemProps } from "../../../Components/NewsItem";
import formatDate from '../../formatDate';
import getHourlyRotatedKey from '../getHourlyRotatedKey';
interface ReturnType {
    status: string
    results: {
        article_id: string,
        description: string
        title: string
        source_name: string
        link: string
        image_url: string
        pubDate: string

        content: string
    }[]
}

const keys = ['pub_36550e191dbd43159e4782275d474724', 'pub_a8d1fd2e311c4d0cad00d67a7310c381']
const query = async ({ search, preference }: QueryParamsAndFilters): Promise<NewsItemProps[]>  => {
    const activeKey = getHourlyRotatedKey(keys)
    let url = `https://newsdata.io/api/1/latest?apikey=${activeKey}&language=en`

    if(search){
        url += `&q=${search}`
    } else if(preference) {
        url += `&category=${preference}`
    }
    const response = await fetch(url);
    const data = await response.json() as ReturnType;

    const { status, results } = data
    if(status !== 'success') {
        return []
    }
    console.log('newsdata', results)
    const result = results.map((article: any) => {
        return {
            id: article.title,
            headline: article.title,
            thumbnail: article.image_url,
            date: formatDate(article.pubDate),
            rawDate: article.pubDate?.split(' ')[0],
            url: article.link,
            source: 'newsdata' as 'newsdata',
        }
    })

    return result.filter(({ headline }) =>  headline.trim() != '[Removed]')
}

export { query }
