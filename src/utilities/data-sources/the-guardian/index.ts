import { NewsItemProps } from "../../../Components/NewsItem";
import { QueryParamsAndFilters } from "../../../types/BaseTypes";
import formatDate from "../../formatDate";

const apiKey = '984bbfa7-3cb3-4ef1-ad4c-4723d115fdf2';
const apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;

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
      "webTitle": string
      "webUrl": string
      "apiUrl": string
      "isHosted": boolean
      "pillarId": string
      "pillarName": string
    }[]
  };

}
const query = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]>  => {
  const url = apiUrl + `&page=${page}`
  try {
    const response = await fetch(search ? `${url}&q=${search}`: url);
    const data = await response.json() as ReturnType;

    const results = data.response.results.map((result: any) => {
      return {
        id: result.id,
        headline: result.webTitle,
        thumbnail: result.webUrl,
        date: formatDate(result.webPublicationDate),
        source: 'guardian' as 'guardian',
      }
    })

    return results
  } catch (error) {
    console.log(error)
    return []
  }
}

export { query }