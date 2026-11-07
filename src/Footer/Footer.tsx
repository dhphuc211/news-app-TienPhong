import scss from './Footer.module.scss'


const Footer = ()=>
{
    return (
        <footer className={scss.footer}>
            <div className={scss.footer_header}>
                <div className={scss.img_container}>
                    <img src="../../public/assets/imgs/tienphong_logo.webp" alt="" />
                </div>
                <h3>cơ quan trung ương của đoàn tncs Hồ Chí Minh</h3>
            </div>
            <div className={scss.footer_body1}>
                <div className={scss.box}>
                    <h4>video</h4>
                    <ul>
                        <li>Xã hội</li>
                        <li>Xe</li>
                        <li>Nhịp sống thủ đô</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4>Nhật báo</h4>
                    <ul>
                        <li>Kinh tế</li>
                        <li>Văn hóa</li>
                        <li>Nhịp sống phương nam</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4>Ảnh</h4>
                    <ul>
                        <li>Địa ốc</li>
                        <li>Giải trí</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4>Vodcast</h4>
                    <ul>
                        <li>Sóng xanh</li>
                        <li>Giáo dục</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4>Longform</h4>
                    <ul>
                        <li>Sức khỏe</li>
                        <li>Khoa học</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4>infographics</h4>
                    <ul>
                        <li>Giới trẻ</li>
                        <li>Hoa hậu</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4></h4>
                    <ul>
                        <li>Pháp luật</li>
                        <li>Bạn đọc</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4></h4>
                    <ul>
                        <li>Thể thao</li>
                        <li>Hàng không - du lịch</li>
                    </ul>
                </div>
                <div className={scss.box}>
                    <h4></h4>
                    <ul>
                        <li>Người lính</li>
                        <li>Thế giới</li>
                    </ul>
                </div>
            </div>
            <div className={scss.footer_body2}>
                <div className={scss.box2}>
                    <h4>tòa soạn</h4>
                    <ul>
                        <li><i className="fa-solid fa-location-dot"></i> D29, Phạm Văn Bạch, P.Cầu Giấy, Hà Nội</li>
                        <li className={scss.phone}><i className="fa-solid fa-phone"></i> 024.39431250</li>
                    </ul>
                </div>  
                <div className={scss.box2}>
                    <h4>liên hệ quảng cáo</h4>
                    <ul>
                        <li className={scss.phone}><i className="fa-solid fa-phone"></i> 0909.55.99.88 (Zalo)</li>
                        <li><i className="fa-solid fa-envelope"></i> booking@baotienphong.com.vn</li>
                    </ul>
                </div>  
                <div className={scss.box2}>
                    <h4>đặt mua báo in</h4>
                    <ul>
                        <li className={scss.phone}><i className="fa-solid fa-phone"></i> 0903.444.897</li>
                    </ul>
                </div>  
                <div className={scss.box2}>
                    <h4>theo dõi báo tiền phong trên</h4>
                    <ul className={scss.socials}>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                        <li><i className="fa-brands fa-tiktok"></i></li>
                        <li><i className="fa-solid fa-newspaper"></i></li>
                    </ul>
                </div>  
                <div className={`${scss.box2} ${scss.last}`}>
                    <h4>Chính sách bảo mật</h4>
                    <ul>
                        
                    </ul>
                </div>  
            </div>
            <div className={scss.footer_footer}>
                <div className={scss.box3}>
                    <ul>
                        <li>Cơ quan chủ quản: <strong>Trung ương Đoàn TNCS Hồ Chí Minh</strong></li>
                        <li>Tổng Biên tập: <strong>PHÙNG CÔNG SƯỞNG</strong></li>
                        <li className={scss.button}><i className="fa-solid fa-paper-plane"></i>bạn đọc làm báo</li>
                    </ul>
                </div>
                <div className={`${scss.box3} ${scss.info}`}>
                    <ul>
                        <li>Giấy phép số <strong>76/GP-BTTTT</strong>, cấp ngày <strong>26/02/2020.</strong></li>
                        <li>© Bản quyền thuộc báo <strong>Tiền Phong</strong></li>
                        <li>Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản</li>
                        <li>Thiết kế và phát triển bởi <strong>Hemera Media</strong></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer