declare module 'newsapi' {
  export default class {
    constructor(apiKey: string)
    v2: {
        topHeadlines: (options: {
            sources?: string
            q?: string
            category?: string
            language?: string
            page: number
            country?: string
        }) => Promise<{
            status: string,
            totalResults: number,
            articles: {
                source: {
                    id: string,
                    name: string
                    author: string
                    title: string
                    description: string
                    url: string
                    urlToImage: string
                    publishedAt: string
                    content: string
                }
            }
            }>
        }
    }
}