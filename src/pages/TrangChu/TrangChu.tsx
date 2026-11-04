import style from './TrangChu.module.scss';
import {Link} from "react-router-dom";


const TrangChu = ()=>
{
    const today = new Date();
    const formattedDate = today.toLocaleDateString('vi-VN',{
        weekday: 'long',day: '2-digit', month: '2-digit', year: 'numeric'
    });
    const navCategories = ['Mới nhất', 'Xã hội', 'Kinh tế', 'Sóng xanh', 'Địa ốc',
        'Sức khỏe', 'Thế giới', 'Giới trẻ', 'Pháp luật', 'Thể thao',
        'Người lính', 'Xe', 'Văn hóa', 'Giải trí', 'Giáo dục',
        'Khoa học', 'Hoa hậu', 'Video'];

    return(
        <>
            <h1>Trang Chủ</h1>
                <section className={style.homepage}>
                    <div className={style.site_header}>
                        <div className={style.top_wrapper}>
                            <div className={style.container}>
                                <span>{formattedDate}</span>
                                <div className={style.relate_website}>
                                    <Link to={'/'} style={null}>Hotline: 0865.015.015</Link>
                                    <Link to={'/'}>Tiền Phong Nhật báo</Link>
                                    <Link to={'/'}>Sinh viên Việt Nam</Link>
                                    <Link to={'/'}>Hoa Học trò</Link>
                                    <Link to={'/'}>Tòa soạn</Link>
                                    <Link to={'/'}>Quảng cáo</Link>
                                </div>
                                <div className={style.lang_social}>

                                </div>
                            </div>
                        </div>
                        <div className={style.main_wrapper}>
                            <img src="../../public/assets/imgs/tienphong_logo.webp" alt="tienphong_logo" loading='lazy'/>
                            <p>CƠ QUAN TRUNG ƯƠNG CỦA ĐOÀN TNCS HỒ CHÍ MINH</p>
                        </div>
                        <div className={style.navigation_wrapper}>
                            <div className={style.container}>
                                <ul className={style.navigation_list}>
                                    <li className={style.homepage} title={'Trang chủ'}>
                                        <Link to={'/'}>Trang chủ</Link>
                                    </li>
                                    {/*reder ra danh sách các trang có thể link đến sử dụng map*/}
                                    {navCategories.map((category, index) => (
                                        <li key={index} className={style.text} title={category}>
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                                <div className={style.mega_menu} title={'Xem thêm'}>
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.site_body}>

                    </div>
                    <div className={style.site_footer}>

                    </div>
                </section>

        </>
    )
}

export default TrangChu;