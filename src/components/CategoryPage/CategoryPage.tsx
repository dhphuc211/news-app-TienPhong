import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CategoryPage.module.scss'
import { useNews } from '../../hooks/useNews'
import { FEEDS, RSS_BASE } from '../../api/feeds'

const STEP = 5

const relateSites = [
    { title: 'Tiền Phong Nhật báo', to: '' },
    { title: 'Sinh viên Việt Nam', to: '' },
    { title: 'Hoa Học trò', to: '' },
    { title: 'Tòa soạn', to: '' },
    { title: 'Quảng cáo', to: '' },
]

const CategoryPage = ({ slug }: { slug: string }) =>
{
    const feed = FEEDS[slug]
    const rssUrl = feed ? RSS_BASE + feed.file : ''

    const { news, loading, error } = useNews(rssUrl)
    const [visibleCount, setVisibleCount] = useState(STEP)

    if (!feed)
    {
        return <p>Không tìm thấy chuyên mục này.</p>
    }

    const today = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
    })

    const shown = news.slice(0, visibleCount)
    const hasMore = visibleCount < news.length

    return (
        <section className={style.category_page}>
            <div className={style.site_header}>
                <div className={style.top_wrapper}>
                    <div className={style.container}>
                        <span>{today}</span>
                        <div className={style.relate_website}>
                            <a href="tel:0865015015" className={style.hotline}>Hotline: 0865.015.015</a>
                            {relateSites.map((site) => (
                                <Link key={site.title} to={site.to} target="_blank" rel="noreferrer">
                                    {site.title}
                                </Link>
                            ))}
                        </div>
                        <div className={style.lang_social}>
                            <Link to="" target="_blank" rel="noreferrer" title="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to="" target="_blank" rel="noreferrer" title="YouTube">
                                <i className="fa-brands fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.site_body}>
                <div className={style.page_head}>
                    <h1>{feed.title}</h1>
                    <Link to={'/' + slug} className={style.badge}>Mới nhất</Link>
                </div>

                {loading && <p className={style.status}>Đang tải tin {feed.title}...</p>}
                {error && <p className={style.status}>{error}</p>}

                <ul className={style.list}>
                    {shown.map((item) => (
                        <li key={item.link} className={style.item}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className={style.thumb}>
                                {item.thumbnail && <img src={item.thumbnail} alt={item.title} loading="lazy" />}
                            </a>
                            <div className={style.info}>
                                <h2>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                </h2>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {hasMore && (
                    <button type="button" className={style.more} onClick={() => setVisibleCount(visibleCount + STEP)}>
                        Xem thêm
                    </button>
                )}
            </div>
        </section>
    )
}

export default CategoryPage