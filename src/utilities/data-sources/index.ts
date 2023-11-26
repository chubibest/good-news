import { query as guardianQuery } from './the-guardian'
import { query as nytQuery } from './new-york-times'
import { query as newsApiQuery } from './news-api'
import { QueryParamsAndFilters } from '../../types/BaseTypes'
import { NewsItemProps } from '../../Components/NewsItem'

export const composer = async ({ search, page, preference }: QueryParamsAndFilters): Promise<NewsItemProps[]> => {

    const guardian = await guardianQuery({ search, page })
    const newsApi = await newsApiQuery({ search, page })

    if(page > 1 && preference) {
        return [...guardian, ...newsApi]
    }

    const nyt = await nytQuery({ search, page })

    return [...guardian, ...nyt, ...newsApi]
}

type SortGeneric = Awaited<ReturnType<typeof composer>>
interface SortParams {
    order: string
    source?: string
    preferences: boolean
}

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }


export const sortFunction = (data: SortGeneric, { order, source, preferences }: SortParams): SortGeneric => {
    let result = data

    if(source) {
        result = result.filter(item => item.source === source)
    } else if(!preferences){
        result = shuffleArray(result)
        result = shuffleArray(result)
    }
    

    result.sort((a, b) => {
        const dateA = new Date(a.rawDate).getTime();
        const dateB = new Date(b.rawDate).getTime();
        
        if (order === 'newToOld') {
            return dateB - dateA;
        }
        return dateA - dateB;
    });
                  

    return result
}
