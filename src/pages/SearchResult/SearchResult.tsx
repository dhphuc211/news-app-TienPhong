
import { useSelector } from 'react-redux'
import type { NewsItem } from '../../api/rssService'
import scss from './SearchResult.module.scss'
import NewsCard from '../../components/NewsCard/NewsCard'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

const SearchResult = ()=>
{
    const news: NewsItem[] = useSelector(state => state.news.news)
    const isLoading: boolean = useSelector(state => state.news.isLoading)
    
    const { keyword = '' } = useParams()
    
    const filter_news = useMemo(()=>
    {
        return news.filter((item: NewsItem)=>
        {
            return item.title.toLowerCase().trim().includes(keyword) || item.description.toLowerCase().trim().includes(keyword)
        })
    }, [news, keyword])


    return (
        <>
            {
                isLoading ? 
                <p>Đang tải dữ liệu...</p>:
                (
                    <main className={scss.site_body}>
                        <header>
                            <h2>Các bài viết liên quan đến: <span>"{keyword}"</span></h2>
                        </header>
                        {
                            filter_news.length > 0 ?
                            <div className={scss.news_grid}>
                                {
                                    filter_news.map((item, ) => (
                                        <NewsCard key={item.link} link={item.link} description={item.description} published={item.pubDate} thumbnail={item.thumbnail} title={item.title}/>
                                    ))
                                }
                            </div> :
                            <div className={scss.not_found_title}>Không tìm thấy bài viết</div>
                        }
                    </main>
                )
            }
        </>
    )
}

export default SearchResult
