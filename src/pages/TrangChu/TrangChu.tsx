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

                <section className={style.homepage}>
                    <div className={style.site_header}>
                        <div className={style.top_wrapper}>
                            <div className={style.container}>
                                <span>{formattedDate}</span>
                                <div className={style.relate_website}>
                                    <Link to={'/'} className={style.list}>Hotline: 0865.015.015</Link>
                                    <Link to={'/'} className={style.list}>Tiền Phong Nhật báo</Link>
                                    <Link to={'/'} className={style.list}>Sinh viên Việt Nam</Link>
                                    <Link to={'/'} className={style.list}>Hoa Học trò</Link>
                                    <Link to={'/'} className={style.list}>Tòa soạn</Link>
                                    <Link to={'/'} className={style.list}>Quảng cáo</Link>
                                </div>
                                <div className={style.lang_social}>

                                    <a href="https://www.facebook.com/www.tienphong.vn/" target="_blank" rel="noopener noreferrer" title="Facebook">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a className={style.faYoutube} href="https://www.youtube.com/@baotienphong" target="_blank" rel="noopener noreferrer" title="Youtube">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.main_wrapper}>

                            <a href="/">
                                <h1>Tiềnphong</h1>
                                <p>CƠ QUAN TRUNG ƯƠNG CỦA ĐOÀN TNCS HỒ CHÍ MINH</p>
                            </a>

                        </div>
                        <div className={style.navigation_wrapper}>
                            <div className={style.container}>
                                <ul className={style.navigation_list}>
                                    <li className={style.homepage} title={'Trang chủ'}>
                                        <Link to={'/'}><i className="fa-solid fa-house"></i></Link>
                                    </li>
                                    {/*reder ra danh sách các trang có thể link đến sử dụng map*/}
                                    {navCategories.map((category, index) => (
                                        <li key={index} className={style.text} title={category}>
                                            {/*chuyển mảnh về đường dẫn bằng cách / chuyển chữ thường, tách tiếng việt, thay dấu thành rỗng, thay khoảng trắng thành "-" => ta sẽ có được đường dẫn /xa-hoi */}
                                            <Link to={`/${category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}>
                                                {category}
                                            </Link>
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