import { query as guardianQuery } from './the-guardian'
import { query as nytQuery } from './new-york-times'
import { query as newsApiQuery } from './news-api'
import { QueryParamsAndFilters } from '../../types/BaseTypes'
// each should filter
// each should transform

// export const composer = async ({ search, page }: QueryParamsAndFilters) => {
//     console.log('search', search)
//     console.log('page',page)
//     const guardian = await guardianQuery({ search, page })
    // const nyt = await nytQuery({ search, page })
    // const newsApi = await newsApiQuery({ search, page })
    // return guardian

// }

// export const composer = async ({ search, page }: QueryParamsAndFilters) => {
//     console.log('search', search)
//     console.log('page',page)
//     const guardian = await guardianQuery({ search, page })
//     const nyt = await nytQuery({ search, page })
//     const newsApi = await newsApiQuery({ search, page })

//     return [...guardian, ...nyt, ...newsApi]
// }

export const composer = async ({ search, page }: QueryParamsAndFilters) => {
    console.log('search', search)
    console.log('page',page)
    const guardian = await guardianQuery({ search, page })
    const nyt = await nytQuery({ search, page })
    const newsApi = await newsApiQuery({ search, page })

    return data
}
const data = [
    {
      "id": "football/live/2023/nov/25/manchester-city-v-liverpool-premier-league-live",
      "headline": "Manchester City v Liverpool: Premier League – live ",
      "thumbnail": "https://www.theguardian.com/football/live/2023/nov/25/manchester-city-v-liverpool-premier-league-live",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "world/live/2023/nov/25/israel-hamas-war-live-hamas-set-to-release-fresh-wave-of-hostages-reports-say-as-ceasefire-continues",
      "headline": "Israel-Hamas war live: 14 Israeli hostages to be released in exchange for 42 Palestinian prisoners",
      "thumbnail": "https://www.theguardian.com/world/live/2023/nov/25/israel-hamas-war-live-hamas-set-to-release-fresh-wave-of-hostages-reports-say-as-ceasefire-continues",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "world/live/2023/nov/25/russia-ukraine-war-kyiv-drone-attack-putin-zelenskiy-latest-news",
      "headline": "Russia-Ukraine war live: Kremlin declares former Russian PM a ‘foreign agent’",
      "thumbnail": "https://www.theguardian.com/world/live/2023/nov/25/russia-ukraine-war-kyiv-drone-attack-putin-zelenskiy-latest-news",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "media/2023/nov/25/uae-backed-bid-for-telegraph-raises-fears-of-gulf-newswashing",
      "headline": "UAE-backed bid for Telegraph raises fears of Gulf ‘newswashing’",
      "thumbnail": "https://www.theguardian.com/media/2023/nov/25/uae-backed-bid-for-telegraph-raises-fears-of-gulf-newswashing",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "books/2023/nov/25/ottessa-moshfegh-everyone-asked-me-why-i-had-written-such-a-disgusting-female-character",
      "headline": "Ottessa Moshfegh: ‘Everyone asked me why I had written such a disgusting female character’",
      "thumbnail": "https://www.theguardian.com/books/2023/nov/25/ottessa-moshfegh-everyone-asked-me-why-i-had-written-such-a-disgusting-female-character",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "lifeandstyle/2023/nov/25/in-the-dog-house-why-are-so-many-of-britains-dogs-behaving-badly",
      "headline": "In the dog house: why are so many of Britain’s dogs behaving badly?",
      "thumbnail": "https://www.theguardian.com/lifeandstyle/2023/nov/25/in-the-dog-house-why-are-so-many-of-britains-dogs-behaving-badly",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "media/2023/nov/25/lachlan-rupert-murdoch-fox-news",
      "headline": "Headaches at Fox as Lachlan Murdoch takes reins from father Rupert",
      "thumbnail": "https://www.theguardian.com/media/2023/nov/25/lachlan-rupert-murdoch-fox-news",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "culture/2023/nov/25/cultural-vandalism-row-as-kew-gardens-and-natural-history-museum-plan-to-move-collections-out-of-london",
      "headline": "‘Cultural vandalism’: row as Kew Gardens and Natural History Museum plan to move collections out of London",
      "thumbnail": "https://www.theguardian.com/culture/2023/nov/25/cultural-vandalism-row-as-kew-gardens-and-natural-history-museum-plan-to-move-collections-out-of-london",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "politics/2023/nov/25/james-cleverly-frustrated-with-fixation-government-rwanda-immigration-policy",
      "headline": "James Cleverly ‘frustrated’ with fixation on government’s Rwanda policy",
      "thumbnail": "https://www.theguardian.com/politics/2023/nov/25/james-cleverly-frustrated-with-fixation-government-rwanda-immigration-policy",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "environment/2023/nov/25/rock-climbing-damage-cliff-ecosystems-aoe",
      "headline": "Rock climbers like to connect with nature – but are they also destroying it?",
      "thumbnail": "https://www.theguardian.com/environment/2023/nov/25/rock-climbing-damage-cliff-ecosystems-aoe",
      "date": "November 25th, 2023",
      "source": "guardian"
    },
    {
      "id": "https://www.nytimes.com/interactive/2023/11/01/us/hawaii-maui-fire-timeline.html",
      "headline": "Inside the Deadly Maui Inferno, Hour by Hour",
      "thumbnail": "https://static01.nyt.com/images/2023/10/31/multimedia/2023-09-06-hawaii-3dtile-cesium-index/2023-09-06-hawaii-3dtile-cesium-index-square640-v3.jpg",
      "date": "November 1st, 2023",
      "url": "https://www.nytimes.com/interactive/2023/11/01/us/hawaii-maui-fire-timeline.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/10/28/opinion/marc-andreessen-manifesto-techno-optimism.html",
      "headline": "A Tech Overlord’s Horrifying, Silly Vision for Who Should Rule the World",
      "thumbnail": "https://static01.nyt.com/images/2023/10/28/opinion/28spiers/28spiers-square640.png",
      "date": "October 28th, 2023",
      "url": "https://www.nytimes.com/2023/10/28/opinion/marc-andreessen-manifesto-techno-optimism.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/10/20/style/modern-love-google-search-results-end-relationship.html",
      "headline": "When Your Search History Says What You Can’t",
      "thumbnail": "https://static01.nyt.com/images/2023/10/22/fashion/22MODERN-OSET/22MODERN-OSET-square640.jpg",
      "date": "October 20th, 2023",
      "url": "https://www.nytimes.com/2023/10/20/style/modern-love-google-search-results-end-relationship.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/interactive/2023/10/13/us/gag-order-trump-response.html",
      "headline": "Read Trump’s Response to a Gag Order Request",
      "thumbnail": "https://static01.nyt.com/images/2023/10/13/doc-1430400-gov-uscourts-dcd--promo/doc-1430400-gov-uscourts-dcd--promo-square640.png",
      "date": "October 13th, 2023",
      "url": "https://www.nytimes.com/interactive/2023/10/13/us/gag-order-trump-response.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/10/13/books/review/dialogue-with-a-somnambulist-chloe-aridjis-dearborn-ghassan-zeineddine-every-drop-is-a-mans-nightmare-megan-kamalei-kakimoto.html",
      "headline": "Story Collections That Are Also Inventories of Catastrophes",
      "thumbnail": "https://static01.nyt.com/images/2023/10/15/books/review/15Shortlist-BLACKBURN/15Shortlist-BLACKBURN-square640.jpg",
      "date": "October 13th, 2023",
      "url": "https://www.nytimes.com/2023/10/13/books/review/dialogue-with-a-somnambulist-chloe-aridjis-dearborn-ghassan-zeineddine-every-drop-is-a-mans-nightmare-megan-kamalei-kakimoto.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/10/11/arts/television/frasier-reboot-review.html",
      "headline": "Review: ‘Frasier’ Returns, Tossed, Scrambled and Eggscruciating",
      "thumbnail": "https://static01.nyt.com/images/2023/10/12/multimedia/11frasier-review-qtwj/11frasier-review-qtwj-square640.jpg",
      "date": "October 11th, 2023",
      "url": "https://www.nytimes.com/2023/10/11/arts/television/frasier-reboot-review.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/interactive/2023/09/30/us/politics/senate-shutdown-vote-live.html",
      "headline": "How Each Member Voted on the Senate Stopgap Spending Measure",
      "thumbnail": "https://static01.nyt.com/images/2023/09/30/multimedia/senate-shutdown-live-vote-0930-promo/senate-shutdown-live-vote-0930-promo-square640.jpg",
      "date": "October 1st, 2023",
      "url": "https://www.nytimes.com/interactive/2023/09/30/us/politics/senate-shutdown-vote-live.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/09/26/us/politics/trump-jan-6-gag-order.html",
      "headline": "Trump Lawyers Assail Gag Order Request in Election Case",
      "thumbnail": "https://static01.nyt.com/images/2023/09/25/multimedia/25dc-trump-filing-fqmj/25dc-trump-filing-fqmj-square640.jpg",
      "date": "September 26th, 2023",
      "url": "https://www.nytimes.com/2023/09/26/us/politics/trump-jan-6-gag-order.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/09/05/t-magazine/artists-designers-legacy.html",
      "headline": "The Burden of Inheritance",
      "thumbnail": "https://static01.nyt.com/images/2023/09/05/t-magazine/05tmag-vaccarello-slide-4VRO-copy-copy/05tmag-vaccarello-slide-4VRO-copy-copy-square640.jpg",
      "date": "September 5th, 2023",
      "url": "https://www.nytimes.com/2023/09/05/t-magazine/artists-designers-legacy.html",
      "source": "nytimes"
    },
    {
      "id": "https://www.nytimes.com/2023/08/27/opinion/trump-prosecution-jury-courts.html",
      "headline": "Trump’s Fate Belongs in the Hands of 12 Ordinary Citizens",
      "thumbnail": "https://static01.nyt.com/images/2023/08/27/multimedia/27wegman-photo-qzpb/27wegman-photo-qzpb-square640.jpg",
      "date": "August 27th, 2023",
      "url": "https://www.nytimes.com/2023/08/27/opinion/trump-prosecution-jury-courts.html",
      "source": "nytimes"
    }
  ]