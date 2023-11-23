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
// https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test
// categrories => tags?
// { 
//     "response":
//      { 
//         "status":"ok",
//         "userTier":"developer",
//         "total":2466529,
//         "startIndex":1,
//         "pageSize":10,
//         "currentPage":1,
//         "pages":246653,
//         "orderBy":"newest",
//         "results":[
//             {
                
//                 "id":"media/2023/nov/23/andrew-malkinson-among-christmas-guest-editors-bbc-today-programme",
//                 "type":"article",
//                 "sectionId":"media",
//                 "sectionName":"Media",
//                 "webPublicationDate":"2023-11-23T10:01:24Z",
//                 "webTitle":"Andrew Malkinson to be among Christmas guest editors of BBC Today programme",
//                 "webUrl":"https://www.theguardian.com/media/2023/nov/23/andrew-malkinson-among-christmas-guest-editors-bbc-today-programme",
//                 "apiUrl":"https://content.guardianapis.com/media/2023/nov/23/andrew-malkinson-among-christmas-guest-editors-bbc-today-programme",
//                 "isHosted":false,
//                 "pillarId":"pillar/news",
//                 "pillarName":"News"
//             },
            
//             {"id":"sport/2023/nov/23/hybrid-pitches-2024-county-championship-season-cricket","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2023-11-23T10:00:02Z","webTitle":"Hybrid pitches to be used for first time in 2024 County Championship season","webUrl":"https://www.theguardian.com/sport/2023/nov/23/hybrid-pitches-2024-county-championship-season-cricket","apiUrl":"https://content.guardianapis.com/sport/2023/nov/23/hybrid-pitches-2024-county-championship-season-cricket","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},
//             {"id":"tv-and-radio/2023/nov/23/how-bobby-brazier-charmed-britain-he-has-a-sparkle-just-like-his-mum","type":"article","sectionId":"tv-and-radio","sectionName":"Television & radio","webPublicationDate":"2023-11-23T10:00:01Z","webTitle":"How Bobby Brazier charmed Britain: ‘He has a sparkle just like his mum’","webUrl":"https://www.theguardian.com/tv-and-radio/2023/nov/23/how-bobby-brazier-charmed-britain-he-has-a-sparkle-just-like-his-mum","apiUrl":"https://content.guardianapis.com/tv-and-radio/2023/nov/23/how-bobby-brazier-charmed-britain-he-has-a-sparkle-just-like-his-mum","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
//             {"id":"world/live/2023/nov/23/russia-ukraine-war-live-zelenskiy-hails-air-defence-coalition-formed-from-ramstein-group","type":"liveblog","sectionId":"world","sectionName":"World news","webPublicationDate":"2023-11-23T09:58:11Z","webTitle":"Russia-Ukraine war live: Zelenskiy hails air defence coalition formed from Ramstein group","webUrl":"https://www.theguardian.com/world/live/2023/nov/23/russia-ukraine-war-live-zelenskiy-hails-air-defence-coalition-formed-from-ramstein-group","apiUrl":"https://content.guardianapis.com/world/live/2023/nov/23/russia-ukraine-war-live-zelenskiy-hails-air-defence-coalition-formed-from-ramstein-group","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
//             {"id":"world/live/2023/nov/23/israel-hamas-war-live-updates-gaza-ceasefire-hostage-release-friday-israeli-us-officials","type":"liveblog","sectionId":"world","sectionName":"World news","webPublicationDate":"2023-11-23T09:57:36Z","webTitle":"Israel-Hamas war live: no ceasefire or hostage release before Friday, Israeli and US officials say","webUrl":"https://www.theguardian.com/world/live/2023/nov/23/israel-hamas-war-live-updates-gaza-ceasefire-hostage-release-friday-israeli-us-officials","apiUrl":"https://content.guardianapis.com/world/live/2023/nov/23/israel-hamas-war-live-updates-gaza-ceasefire-hostage-release-friday-israeli-us-officials","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
//             {"id":"business/live/2023/nov/23/richest-benefit-autumn-statement-tax-spending-nissan-electric-vehicles-sunderland-business-live","type":"liveblog","sectionId":"business","sectionName":"Business","webPublicationDate":"2023-11-23T09:56:29Z","webTitle":"UK facing ‘elevated’ recession risks as new orders fall; Nissan to build new electric vehicles in Sunderland – business live","webUrl":"https://www.theguardian.com/business/live/2023/nov/23/richest-benefit-autumn-statement-tax-spending-nissan-electric-vehicles-sunderland-business-live","apiUrl":"https://content.guardianapis.com/business/live/2023/nov/23/richest-benefit-autumn-statement-tax-spending-nissan-electric-vehicles-sunderland-business-live","isHosted":false,"pillarId":"pillar/news","pillarName":"News"},
//             {"id":"commentisfree/2023/nov/23/netherlands-far-right-geert-wilders-victory-mark-rutte","type":"article","sectionId":"commentisfree","sectionName":"Opinion","webPublicationDate":"2023-11-23T09:54:31Z","webTitle":"The Netherlands underestimated the far right – and Geert Wilders’ victory is the result | Cas Mudde","webUrl":"https://www.theguardian.com/commentisfree/2023/nov/23/netherlands-far-right-geert-wilders-victory-mark-rutte","apiUrl":"https://content.guardianapis.com/commentisfree/2023/nov/23/netherlands-far-right-geert-wilders-victory-mark-rutte","isHosted":false,"pillarId":"pillar/opinion","pillarName":"Opinion"},
//             {"id":"games/2023/nov/23/jurassic-park-classic-games-collection-review-a-great-way-to-relive-a-lost-world-of-gaming","type":"article","sectionId":"games","sectionName":"Games","webPublicationDate":"2023-11-23T09:51:09Z","webTitle":"Jurassic Park Classic Games Collection review – a great way to relive a lost world of gaming","webUrl":"https://www.theguardian.com/games/2023/nov/23/jurassic-park-classic-games-collection-review-a-great-way-to-relive-a-lost-world-of-gaming","apiUrl":"https://content.guardianapis.com/games/2023/nov/23/jurassic-park-classic-games-collection-review-a-great-way-to-relive-a-lost-world-of-gaming","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},
//             {"id":"tv-and-radio/2023/nov/23/hear-here-oatly-chronicles-podcast","type":"article","sectionId":"tv-and-radio","sectionName":"Television & radio","webPublicationDate":"2023-11-23T09:45:01Z","webTitle":"The truth about Oatly’s climate-friendly credentials","webUrl":"https://www.theguardian.com/tv-and-radio/2023/nov/23/hear-here-oatly-chronicles-podcast","apiUrl":"https://content.guardianapis.com/tv-and-radio/2023/nov/23/hear-here-oatly-chronicles-podcast","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},{"id":"politics/live/2023/nov/23/jeremy-hunt-autumn-statement-rishi-sunak-conservatives-tax-cuts-uk-politics-latest-updates","type":"liveblog","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2023-11-23T09:44:05Z","webTitle":"Hunt says it is ‘silly’ to see his autumn statement tax cuts as pre-election giveaway – UK politics live","webUrl":"https://www.theguardian.com/politics/live/2023/nov/23/jeremy-hunt-autumn-statement-rishi-sunak-conservatives-tax-cuts-uk-politics-latest-updates","apiUrl":"https://content.guardianapis.com/politics/live/2023/nov/23/jeremy-hunt-autumn-statement-rishi-sunak-conservatives-tax-cuts-uk-politics-latest-updates","isHosted":false,"pillarId":"pillar/news","pillarName":"News"}
//         ]
//     }
// }