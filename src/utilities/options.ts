export const options = ['nytimes', 'guardian', 'newsapi', 'newsdata']
export const optionToText = {
  nytimes: 'New York Times',
  guardian: 'The Guardian',
  newsapi: 'News API',
  newsdata: 'NewsData.io',
}

export const sourceTagStyles = {
    nytimes: {
        bgColor: 'bg-[#000]',
        text: 'NY Times',
        textColor: 'text-[#fff]'
    },
    guardian: {
        bgColor: 'bg-[#052962]',
        text: 'The Guardian',
        textColor: 'text-[#fff]'
    },
    newsapi: {
        bgColor: 'bg-[#1a73e8]',
        text: 'NewsAPI',
        textColor: 'text-[#fff]'
    },
    newsdata: {
        bgColor: 'bg-[#ff6600]',
        text: 'NewsData.io',
        textColor: 'text-[#fff]'
    }
}