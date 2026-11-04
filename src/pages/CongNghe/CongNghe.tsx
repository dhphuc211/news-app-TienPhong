import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './CongNghe.module.scss'

type Post = {
    id: number
    title: string
    desc: string
}

type NavItem = {
    title: string
    to: string
}

const PAGE_SIZE = 5

const relateSites: NavItem[] = [
    { title: 'Tiền Phong Nhật báo', to: '' },
    { title: 'Sinh viên Việt Nam', to: '' },
    { title: 'Hoa Học trò', to: '' },
    { title: 'Tòa soạn', to: '' },
    { title: 'Quảng cáo', to: '' },
]

const posts: Post[] = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    title: `Tiêu đề ${i + 1}`,
    desc: 'Đoạn mô tả ngắn.',
}))

const postLink = (_p: Post): string => '/cong-nghe'

const CongNghe = () =>
{
    const [visible, setVisible] = useState<number>(PAGE_SIZE)

    const formattedDate = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric'
    })

    const shown = posts.slice(0, visible)
    const hasMore = visible < posts.length

    return (
        <section className={style.cong_nghe}>
            <div className={style.site_header}>

                <div className={style.top_wrapper}>
                    <div className={style.container}>
                        <span>{formattedDate}</span>
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
                    <h1>Công nghệ</h1>
                    <Link to="/cong-nghe" className={style.badge}>Mới nhất</Link>
                </div>

                <ul className={style.list}>
                    {shown.map((p) => (
                        <li key={p.id} className={style.item}>
                            <Link to={postLink(p)} className={style.thumb} aria-label={p.title}></Link>
                            <div className={style.info}>
                                <h2><Link to={postLink(p)}>{p.title}</Link></h2>
                                <p>{p.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                {hasMore && (
                    <button type="button" className={style.more} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                        Xem thêm
                    </button>
                )}
            </div>
        </section>
    )
}

export default CongNghe
