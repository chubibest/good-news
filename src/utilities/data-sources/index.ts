import { query as guardianQuery } from './the-guardian'
import { query as nytQuery } from './new-york-times'
import { query as newsApiQuery } from './news-api'
import { QueryParamsAndFilters } from '../../types/BaseTypes'
// each should filter
// each should transform

// export const composer = async ({ search, page }: QueryParamsAndFilters) => {
    // const guardian = await guardianQuery({ search, page })
    // const nyt = await nytQuery({ search, page })
    // const newsApi = await newsApiQuery({ search, page })
    // return newsApi
    // return [...guardian, ...nyt, ...newsApi]
// }

export const composer = async ({ search, page }: QueryParamsAndFilters) => {
    const guardian = await guardianQuery({ search, page })
    const nyt = await nytQuery({ search, page })
    const newsApi = await newsApiQuery({ search, page })

    return [...guardian, ...nyt, ...newsApi]
}
