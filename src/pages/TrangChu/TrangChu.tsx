
import NewsFeed from "../../components/NewsFeed/NewsFeed.tsx";
import style from "./TrangChu.module.scss";


const TrangChu = ()=>
{
    

    return(
        <>



            <main className={style.site_body}>
                <div className={style.container}>
                    <NewsFeed
                        categoryName="Tin Tức Mới Nhất"
                        rssUrl="https://tienphong.vn/rss/home.rss"
                    />

                </div>
            </main>
        </>
    )
}

export default TrangChu;