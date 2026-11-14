import { useNews } from '../../hooks/useNews';
import style from './NewsFeed.module.scss';

interface NewsFeedProps {
    rssUrl: string;
    categoryName: string;
}
const NewsFeed = ({rssUrl, categoryName }: NewsFeedProps) => {
    // gọi hook để lấy dữ liệu, đợi dữ liệu load lên, hiển thị lỗi nếu có
    const {news,loading,error} = useNews(rssUrl);
    if(loading){
        return <div className={style.loading}>
            Đang tải tin tức {categoryName}...
        </div>;
    }
    if(error){
        return <div className={style.error}>
            {error}
        </div>;

    }
    return(
        <>
            <section className={style.news_section}>
                <div className={style.section_header}>
                    <h2>{categoryName}</h2>
                </div>
                <div className={style.news_grid}>
                    {/*dùng map để lấy hết ra rồi hiện thông tin dựa theo phần rss của tiền phong*/}
                    {news.map((item, index) => (
                        <article key={index} className={style.news_card}>
                            {item.thumbnail&&(<div className={style.thumb_wrapper}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.thumbnail} alt={item.title} loading="lazy"/>
                                </a>
                            </div>)}
                            <div className={style.content}>
                                <h3 className={style.title}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h3>
                                <div className={style.meta}>

                                    <span>
                                        {new Date(item.pubDate).toLocaleDateString('vi-VN')}
                                    </span>
                                </div>
                                <p className={style.descrip}>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

            </section>
        </>
    )

}

export default NewsFeed;