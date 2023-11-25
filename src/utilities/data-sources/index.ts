import { query as guardianQuery } from './the-guardian'
import { query as nytQuery } from './new-york-times'
import { query as newsApiQuery } from './news-api'
import { QueryParamsAndFilters } from '../../types/BaseTypes'
import { NewsItemProps } from '../../Components/NewsItem'
// each should filter
// each should transform

// export const composer = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]> => {
//     console.log('search', search)
//     console.log('page',page)
//     const guardian = await guardianQuery({ search, page })
    // const nyt = await nytQuery({ search, page })
    // const newsApi = await newsApiQuery({ search, page })
    // return guardian

// }

export const composer = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]> => {
    const guardian = await guardianQuery({ search, page })
    const nyt = await nytQuery({ search, page })
    const newsApi = await newsApiQuery({ search, page })

    return [...guardian, ...nyt, ...newsApi]
}

// export const composer = async ({ search, page }: QueryParamsAndFilters): Promise<NewsItemProps[]> => {
//     console.log('search', search)
//     console.log('page',page)
//     // const guardian = await guardianQuery({ search, page })
//     // const nyt = await nytQuery({ search, page })
//     // const newsApi = await newsApiQuery({ search, page })

//     return data
// }

type SortGeneric = Awaited<ReturnType<typeof composer>>
interface SortParams {
    order?: string
    source?: string
}
export const sortFunction = (data: SortGeneric, { order, source }: SortParams): SortGeneric => {
    let result = data

    if(source) {
        result = result.filter(item => item.source === source)
    }
    console.log('order', order)
       
    result.sort((a, b) => {
        const dateA = new Date(a.rawDate).getTime();
        const dateB = new Date(b.rawDate).getTime();
        console.log('is sorting')
        
        if (order === 'newToOld') {
        return dateB - dateA;
        }
        return dateA - dateB;
    });
                  

    return result
}
const data = [
    {
      "id": "uk-news/2023/nov/25/fivefold-rise-number-eu-citizens-refused-entry-uk-since-brexit",
      "headline": "Fivefold rise in number of EU citizens refused entry to UK since Brexit",
      "thumbnail": "https://media.guim.co.uk/01aff52275ec83648a04b1c80a44643eae0f61db/251_277_3597_2159/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "culture/2023/nov/25/nsw-police-fees-musical-festivals-dying-greens",
      "headline": "NSW police accused of ‘killing’ music festivals by charging excessive fees",
      "thumbnail": "https://media.guim.co.uk/375a4ac740ee2fddfcf026d35f094f1c90e3fe98/0_73_3860_2317/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "australia-news/2023/nov/25/newcastle-harbour-blockade-activists-planning-the-biggest-civil-disobedience-action-in-australias-history",
      "headline": "Newcastle port blockade: paddling activists take part in one of the biggest climate protests in Australia’s history",
      "thumbnail": "https://media.guim.co.uk/11b267d169dc81c41f3cea8f2972313b606c87ee/0_233_3543_2125/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "politics/2023/nov/24/sunak-risks-ripping-up-good-friday-agreement-rwanda-senior-tories-say",
      "headline": "Sunak risks ripping up Good Friday agreement over Rwanda, senior Tories say",
      "thumbnail": "https://media.guim.co.uk/8b6374ac612ed5d7c00f6b0dcd2b61ef1c45b91a/0_200_6000_3600/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "crosswords/weekend/672",
      "headline": "Weekend crossword No 672",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "crosswords/prize/29237",
      "headline": "Prize crossword No 29,237",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-25",
      "source": "guardian"
    },
    {
      "id": "business/2023/nov/24/thousands-of-hsbc-customers-in-uk-unable-to-access-online-banking-services",
      "headline": "Thousands of HSBC customers in UK unable to access online banking services",
      "thumbnail": "https://media.guim.co.uk/16743d376f9180a3ae32c684cfc686185ba0d21a/43_238_5953_3574/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-24",
      "source": "guardian"
    },
    {
      "id": "uk-news/2023/nov/24/met-police-shoot-dead-armed-man-who-said-he-wanted-to-kill-himself",
      "headline": "Met police shoot dead armed man who said he wanted to kill himself",
      "thumbnail": "https://media.guim.co.uk/82dac15ce506e3259b41cbc9a9ab51267e3fa5d9/0_215_8256_4954/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-24",
      "source": "guardian"
    },
    {
      "id": "commentisfree/2023/nov/25/what-i-learned-from-our-child-sexual-abuse-survey-rational-paranoia-can-help-parents-protect-their-kids",
      "headline": "What I learned from our child sexual abuse survey: ‘rational paranoia’ can help parents protect their kids | Michael Salter",
      "thumbnail": "https://media.guim.co.uk/23a63add400d41a78e82487cd05463b248b8c52b/0_97_5220_3132/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-24",
      "source": "guardian"
    },
    {
      "id": "artanddesign/2023/nov/25/louise-bourgeois-art-gallery-nsw-has-the-day-invaded-the-night-or-has-the-night-invaded-the-day",
      "headline": "Nightmarish, playful, erotic: the revelatory Sydney show of art titan Louise Bourgeois",
      "thumbnail": "https://media.guim.co.uk/84306bad5262b7c53ef037838f049b97fdeb6128/0_27_4000_2401/500.jpg",
      "date": "November 25th, 2023",
      "rawDate": "2023-11-24",
      "source": "guardian"
    },
    {
      "id": "https://www.nytimes.com/2021/02/01/world/asia/india-budget-modi-economy.html",
      "headline": "India’s Modest Budget Signals Modi’s Limited Options",
      "thumbnail": "https://static01.nyt.com/images/2021/02/02/world/01india-budget-print/01india-budget-square640.jpg",
      "date": "February 1st, 2021",
      "rawDate": "2021-02-01",
      "url": "https://www.nytimes.com/2021/02/01/world/asia/india-budget-modi-economy.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2021/01/08/arts/design/olujimi-portraits.html",
      "headline": "In 177 Portraits, an Artist’s Homage to His Bed-Stuy Muse",
      "thumbnail": "https://static01.nyt.com/images/2021/01/10/arts/10olujimi-portraits-01/merlin_178641810_71ef5003-47bc-45b5-840a-3ddb03e29309-square640.jpg",
      "date": "January 8th, 2021",
      "rawDate": "2021-01-08",
      "url": "https://www.nytimes.com/2021/01/08/arts/design/olujimi-portraits.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/12/18/style/self-care/how-to-move-in-with-your-parents.html",
      "headline": "How to Move In With Your Parents (and, Eventually, Move Out)",
      "thumbnail": "https://static01.nyt.com/images/2020/12/20/fashion/00MOVINGHOME-art/00MOVINGHOME-art-square640.jpg",
      "date": "December 18th, 2020",
      "rawDate": "2020-12-18",
      "url": "https://www.nytimes.com/2020/12/18/style/self-care/how-to-move-in-with-your-parents.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/29/us/politics/robert-mueller-andrew-weissmann.html",
      "headline": "Mueller Rebuts Insider’s Claim That He Could Have Done More to Investigate Trump",
      "thumbnail": "https://static01.nyt.com/images/2020/09/29/us/politics/29dc-mueller/29dc-mueller-square640.jpg",
      "date": "September 29th, 2020",
      "rawDate": "2020-09-29",
      "url": "https://www.nytimes.com/2020/09/29/us/politics/robert-mueller-andrew-weissmann.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/28/t-magazine/design-future-pandemic-climate.html",
      "headline": "Design for the Future When the Future Is Bleak",
      "thumbnail": "https://static01.nyt.com/images/2020/09/28/t-magazine/28tmag-future-slide-2V39/28tmag-future-slide-2V39-square640.jpg",
      "date": "September 28th, 2020",
      "rawDate": "2020-09-28",
      "url": "https://www.nytimes.com/2020/09/28/t-magazine/design-future-pandemic-climate.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/24/t-magazine/sculpturecenter-queer-correspondence.html",
      "headline": "The T List: Five Things We Recommend This Week",
      "thumbnail": "https://static01.nyt.com/images/2020/09/23/t-magazine/23tmag-newsletter-slide-ARMT/23tmag-newsletter-slide-ARMT-square640.jpg",
      "date": "September 24th, 2020",
      "rawDate": "2020-09-24",
      "url": "https://www.nytimes.com/2020/09/24/t-magazine/sculpturecenter-queer-correspondence.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/21/us/politics/andrew-weissmann-mueller.html",
      "headline": "Mueller’s Team Should Have Done More to Investigate Trump-Russia Links, Top Aide Says",
      "thumbnail": "https://static01.nyt.com/images/2020/10/01/us/politics/21dc-weissmann-sub/21dc-weissmann-sub-square640-v2.jpg",
      "date": "September 21st, 2020",
      "rawDate": "2020-09-21",
      "url": "https://www.nytimes.com/2020/09/21/us/politics/andrew-weissmann-mueller.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/15/arts/music/angel-deradoorian-find-the-sun.html",
      "headline": "Angel Deradoorian Channels Cosmic Energy (and Ozzy Osbourne)",
      "thumbnail": "https://static01.nyt.com/images/2020/09/16/arts/15deradoorian1/15deradoorian1-square640.jpg",
      "date": "September 15th, 2020",
      "rawDate": "2020-09-15",
      "url": "https://www.nytimes.com/2020/09/15/arts/music/angel-deradoorian-find-the-sun.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/08/world/middleeast/israel-coronavirus-ronni-gamzu-netanyahu.html",
      "headline": "Israel’s Virus Czar Was Making Headway. Then He Tangled With a Key Netanyahu Ally.",
      "thumbnail": "https://static01.nyt.com/images/2020/09/08/world/08virus-israel1/08virus-israel1-square640-v2.jpg",
      "date": "September 8th, 2020",
      "rawDate": "2020-09-08",
      "url": "https://www.nytimes.com/2020/09/08/world/middleeast/israel-coronavirus-ronni-gamzu-netanyahu.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2020/09/08/business/low-wage-workers-who-depend-on-office-based-businesses-stand-to-lose-the-most.html",
      "headline": "Low-wage workers who depend on office-based businesses stand to lose the most.",
      "thumbnail": "https://static01.nyt.com/images/2020/09/03/business/03virus-workers-01/00virus-workers-01-square640.jpg",
      "date": "September 8th, 2020",
      "rawDate": "2020-09-08",
      "url": "https://www.nytimes.com/2020/09/08/business/low-wage-workers-who-depend-on-office-based-businesses-stand-to-lose-the-most.html",
      "source": "nytimes"
    }
]