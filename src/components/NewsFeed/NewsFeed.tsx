import { useNews } from '../../hooks/useNews';
import NewsCard from '../NewsCard/NewsCard';
import style from './NewsFeed.module.scss';

interface NewsFeedProps 
{
    rssUrl: string;
    categoryName: string;
}
const NewsFeed = ({rssUrl, categoryName }: NewsFeedProps) => 
{
    // gọi hook để lấy dữ liệu, đợi dữ liệu load lên, hiển thị lỗi nếu có
    const {news,loading,error} = useNews(rssUrl);
    if(loading)
    {
        return <div className={style.loading}>Đang tải tin tức {categoryName}...</div>;
    }
    if(error)
    {
        return <div className={style.error}>{error}</div>;

    }


    return(
        <>
            <section className={style.news_section}>

                <header>
                    <h2>{categoryName}</h2> <p>Mới nhất</p>
                </header>

                <div className={style.news_grid}>
                    
                    {
                        news.map((item, ) => (
                            <NewsCard key={item.title} link={item.link} description={item.description} published={item.pubDate} thumbnail={item.thumbnail} title={item.title}/>
                        ))
                    }
                </div>

            </section>
        </>
    )

}

/*



*/

export default NewsFeed;