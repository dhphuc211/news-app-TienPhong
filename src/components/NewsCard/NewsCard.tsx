import scss from './NewsCard.module.scss'

type NewsCardType = {
    link: string,
    thumbnail: string,
    title: string,
    published: string,
    description: string
}


const NewsCard = (props: NewsCardType)=>
{
    return (
        <article className={scss.card} onClick={()=>
        {
            window.location.href = props.link
        }}>

            <div className={scss.img_container}>
                <img src={props.thumbnail} alt={props.title} loading='lazy'/>
            </div>

            <div className={scss.sub_title}>
                <p>{(new Date(props.published).toLocaleDateString("vi-VN"))}</p>
            </div>

            <div className={scss.content}>
                <h3>
                    <a href={props.link}>{props.title}</a>
                </h3>
                <p>{props.description}</p>
            </div>
            <a className={scss.read_more} href={props.link}>Đọc thêm</a>
        </article>
    )
}

export default NewsCard