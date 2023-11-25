import { NewsItemProps } from "../../../Components/NewsItem";
import { QueryParamsAndFilters } from "../../../types/BaseTypes";
import formatDate from "../../formatDate";

interface ReturnType {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: {
      "id": string
      "type": string
      "sectionId": string
      "sectionName": string
      "webPublicationDate": string
      "fields": {
        "thumbnail": string
      },
      "webTitle": string
      "webUrl": string
      "apiUrl": string
      "isHosted": boolean
      "pillarId": string
      "pillarName": string
    }[]
  };

}

const keys = ['984bbfa7-3cb3-4ef1-ad4c-4723d115fdf2', '17d993b2-4853-4f27-84be-5b3ba90a435c', '0108cf2e-fb64-405c-806c-55cca73c2076']
const query = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]>  => {
  const url =`https://content.guardianapis.com/search?api-key=${keys[0]}&page=${page}&show-fields=thumbnail`
  try {
    const response = await fetch(search ? `${url}&q=${search}`: url);
    const data = await response.json() as ReturnType;

    const results = data.response.results.map((result: any) => {
      return {
        id: result.id,
        headline: result.webTitle,
        thumbnail: result.fields?.thumbnail,
        date: formatDate(result.webPublicationDate),
        rawDate: result.webPublicationDate.split('T')[0],
        source: 'guardian' as 'guardian',
      }
    })

    return results
  } catch (error) {
    keys.push(keys.shift() as string);
    console.log(error)
    return []
  }
}

export { query }