import { QueryParamsAndFilters } from "../../../types/BaseTypes";
import { NewsItemProps } from "../../../Components/NewsItem";
import formateDate from '../../formatDate'
interface ArticleSearchReturnType {
    status: string;
    response: {
        docs: {
            headline: {
                main: string
            }
            pub_date: string
            web_url: string
            multimedia: {
                url: string
                subtype: 'square640'
            }[]
        }[]
    }
}

interface HomepageReturnType {
    status: string;
    results: {
        title:  string
        section: string
        url: string
        updated_date?: string
        published_date?: string
        created_date: string
        multimedia: {
            format: "Large Thumbnail";
            type: "image"
        }[]
    }[]
}
const keys = ['BboaoE5pFBiA1GDraV3HjSUEhPlw8xwW', 'HoWFnmnlJlRtOcYAMOcp8DBRWj9sIm7A', 'w3NGuQTVGUnGLuYBAa822u9j1HiB0r75']

const query = async ({ search, page, preference }: QueryParamsAndFilters): Promise<NewsItemProps[]> => {
    
    try {
        if (!search) {
            const section = preference?.toLowerCase() || 'home';
            const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${keys[0]}`);
            const data = await response.json() as HomepageReturnType;
            
            return data.results.map((result) => {
                const date = result.updated_date || result.published_date || result.created_date;

                return {
                    id: result.url,
                    headline: result.title,
                    thumbnail: result.multimedia?.find(({format, type}) => type === 'image' && format === 'Large Thumbnail')?.url,
                    date: formateDate(date),
                    rawDate: date.split('T')[0], 
                    url: result.url,
                    source: 'nytimes' as 'nytimes',
                }
            })
        }


        const nytPage = page - 1;
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${keys[0]}&page=${nytPage}&sort=relevance`
        
        const response = await fetch(url);
        const data = await response.json() as ArticleSearchReturnType;

        const results = data.response.docs.map((result) => {
            return {
                id: result.web_url,
                headline: result.headline.main,
                thumbnail: 'https://static01.nyt.com/' + result.multimedia.find((media) => media.subtype === 'square640')?.url,
                date: formateDate(result.pub_date),
                rawDate: result.pub_date.split('T')[0],
                url: result.web_url,
                source: 'nytimes' as 'nytimes',
            }
        })

        return results
    } catch (error) {
        keys.push(keys.shift() as string);

        return []
    }
}

export { query }
