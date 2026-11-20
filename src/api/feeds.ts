export const RSS_BASE = 'https://tienphong.vn/rss/'

export const FEEDS: Record<string, { title: string; file: string }> = {
    'xa-hoi': { title: 'Xã hội', file: 'xa-hoi-2.rss' },
    'chinh-tri': { title: 'Chính trị', file: 'chinh-tri-308.rss'},
    'tin-tuc':{title:'Tin tức', file:'xa-hoi-tin-tuc-104.rss'},
    'phong-su': {title:'Phóng sự', file:'xa-hoi-phong-su-13.rss'},
    'the-gioi': { title: 'Thế giới', file: 'the-gioi-5.rss' },
    'phan-tich':{title:'Phân tích - Bình luận',file:'the-gioi-phan-tich-binh-luan-31.rss'},
    'chuyen-la':{title:'Chuyện lạ',file:'chuyen-la-32.rss'},

    'kinh-te': { title: 'Kinh tế', file: 'kinh-te-3.rss' },
    'thi-truong':{title:'Thị trường', file:'kinh-te-thi-truong-24.rss'},
    'doanh-nghiep':{title:'Doanh nghiệp', file:'doanh-nghiep-22.rss'},
    'dau-tu':{title:'Đầu tư', file:'dau-tu-165.rss'},
    'taichinh-chungkhoan':{title:'Tài chính - Chứng khoán',file:'tai-chinh-chung-khoan-105.rss'},
    'giam-ngheo':{title:'Giảm nghèo bền vững',file:'giam-ngheo-ben-vung-413.rss'},

    'song-xanh':{title:'Sóng xanh',file:'song-xanh-441.rss'},
    'di-chuyen':{title:'Di chuyển xanh',file:'di-chuyen-xanh-442.rss'},
    'net-zero':{title:'Netzero',file:'netzero-443.rss'},
    'xanh-dau-tu':{title:'Đầu tư',file:'song-xanh-dau-tu-444.rss'},
    'lifestyle':{title:'Lifestyle',file:'lifestyle-445.rss'},
    'xanh-4-0':{title:'Xanh',file:'xanh-4-0-446.rss'},

    'dia-oc':{title:'Địa ốc',file:'dia-oc-166.rss'},
    'do-thi':{title:'Đô thị dự án',file:'do-thi-du-an-269.rss'},
    'thi-oc':{title:'Thị trường - Doanh nghiệp',file:'thi-truong-doanh-nghiep-270.rss'},
    'kien-truc':{title:'Nhà đẹp - Kiến trúc',file:'nha-dep-kien-truc-271.rss'},
    'chuyen-gia':{title:'Chuyên gia - Tư vấn',file:'chuyen-gia-tu-van-272.rss'},
    'media-dia-oc':{title:'Media địa ốc',file:'media-dia-oc-169.rss'},

    'giao-duc': { title: 'Giáo dục', file: 'giao-duc-71.rss' },
    'cong-truong':{title:'Cổng trường',file:'cong-truong-310.rss'},
    'tuyen-sinh':{title:'Tuyển sinh',file:'tuyen-sinh2011-163.rss'},
    'du-hoc':{title:'Du học',file:'giao-duc-du-hoc-40.rss'},

    'the-thao': { title: 'Thể thao', file: 'the-thao-11.rss' },
    'bong-da':{title:'Bóng đá',file:'the-thao-bong-da-49.rss'},
    'hau-truong':{title:'Hậu trường',file:'the-thao-hau-truong-111.rss'},
    'golf':{title:'Golf',file:'the-thao-golf-280.rss'},
    'highlight':{title:'Highlights',file:'video-the-thao-425.rss'},

    'giai-tri': { title: 'Giải trí', file: 'giai-tri.rss' },
    'phim-anh':{title:'Phim ảnh',file:'phim-anh-35.rss'},
    'hau-truong-sao':{title:'Hậu trường sao',file:'giai-tri-hau-truong-168.rss'},
    'am-nhac':{title:'Âm nhạc',file:'am-nhac-153.rss'},
    'thoi-trang':{title:'Thời trang - Làm đẹp',file:'thoi-trang-lam-dep-213.rss'},

    'suc-khoe': { title: 'Sức khỏe', file: 'suc-khoe.rss' },
    'y-khoa':{title:'Y khoa',file:'y-khoa-304.rss'},
    'thuoc-tot':{title:'Thuốc tốt',file:'thuoc-tot-305.rss'},
    'khoe-dep':{title:'Khỏe đẹp',file:'khoe-dep-306.rss'},
    'gioi-tinh':{title:'Giới tính',file:'suc-khoe-gioi-tinh-144.rss'},
    'me-be':{title:'Mẹ và bé',file:'me-va-be-447.rss'},
    'phong-chong':{title:'Phòng chống ung thư',file:'phong-chong-ung-thu-448.rss'},

    'gioi-tre':{title:'Giới trẻ',file:'gioi-tre-4.rss'},
    'nhip-song':{title:'Nhịp sống',file:'gioi-tre-nhip-song-27.rss'},
    'cong-dong-mang':{title:'Cộng đồng mạng',file:'cong-dong-mang-26.rss'},

    'phap-luat':{title:'Pháp luật',file:'phap-luat-12.rss'},
    'ban-tin':{title:'Bản tin 113',file:'ban-tin-113-231.rss'},
    'chuyen-toa':{title:'Pháp luật chuyện tòa',file:'phap-luat-chuyen-toa-173.rss'},

    'cong-nghe': { title: 'Công nghệ', file: 'cong-nghe.rss' },

    'nguoi-linh':{title:'Người lính',file:'hanh-trang-nguoi-linh-182.rss'},

    'xe':{title:'Xe',file:'xe-113.rss'},
    'thi-truong-xe':{title:'Thị trường xe',file:'thi-truong-xe-276.rss'},
    'danh-gia':{title:'Đánh giá xe',file:'danh-gia-xe-277.rss'},
    'cong-dong-xe':{title:'Cộng đồng xe',file:'cong-dong-xe-278.rss'},
    'tu-van':{title:'Tư vấn',file:'xe-tu-van-279.rss'},

    'van-hoa':{title:'Văn hóa',file:'van-hoa-7.rss'},
    'chuyen-van-hoa':{title:'Chuyển động văn hóa',file:'chuyen-dong-van-hoa-264.rss'},
    'sach':{title:'Sách',file:'sach-429.rss'},
    'goc-nhin':{title:'Góc nhìn',file:'goc-nhin-262.rss'},

    'khoa-hoc':{title:'Khoa học',file:'khoa-hoc-45.rss'},

    'hoa-hau':{title:'Hoa hậu',file:'hoa-hau-253.rss'},
    'tin-tuc-trong-nuoc':{title:'Tin tức trong nước',file:'hh-tin-tuc-trong-nuoc-255.rss'},
    'hoa-hau-vn':{title:'Hoa hậu Việt Nam',file:'hoa-hau-viet-nam-257.rss'},
    'quoc-te':{title:'Quốc tế',file:'quoc-te-265.rss'},

    'ban-doc':{title:'Bạn đọc',file:'ban-doc-15.rss'},
    'dieu-tra':{title:'Điều tra',file:'ban-doc-dieu-tra-300.rss'},
    'dien-dan':{title:'Diễn đàn',file:'ban-doc-dien-dan-301.rss'},
    'hoi-am':{title:'Hồi âm',file:'ban-doc-hoi-am-302.rss'},
    'nhan-ai':{title:'Nhân ái',file:'ban-doc-nhan-ai-303.rss'},

    'video':{title:'Video',file:'video-clip-115.rss'},

    'toi-nghi':{title:'Tôi nghĩ',file:'toi-nghi-273.rss'},

    'nhat-bao':{title:'Nhật báo',file:'nhat-bao-433.rss'},

    'hang-khong-du-lich':{title:'Hàng không du lịch',file:'hang-khong-du-lich-220.rss'},
    'hanh-trinh':{title:'Hành trình',file:'hanh-trinh-434.rss'},
    'vali':{title:'Mở vali',file:'mo-vali-435.rss'},
    'vivu':{title:'Vivu',file:'vi-vu-436.rss'},
    'khoanh-khac':{title:'Khoảnh khắc',file:'khoanh-khac-437.rss'},
    'doi-thoai':{title:'Đối thoại',file:'doi-thoai-438.rss'},

    'nhip-song-thu-do':{title:'Nhịp sống thủ đô',file:'nhip-song-thu-do-242.rss'},
    'doi-song':{title:'Đời sống',file:'nstd-doi-song-243.rss'},
    'nstd-giao-thong':{title:'Giao thông - Đô thị',file:'nstd-giao-thong-do-thi-244.rss'},
    'nstd-dau-tu':{title:'Đầu tư',file:'nstd-dau-tu-245.rss'},
    'moi-truong':{title:'Môi trường',file:'nstd-moi-truong-313.rss'},

    'nhip-song-phuong-nam':{title:'Nhịp sống phương nam',file:'nhip-song-phuong-nam-408.rss'},
    'chuyen-dong':{title:'Chuyển động 24h',file:'chuyen-dong-24h-409.rss'},
    'giao-thong':{title:'Giao thông - Đô thị',file:'giao-thong-do-thi-410.rss'},
    'kinh-te-thi-truong':{title:'Kinh tế - Thị trường',file:'kinh-te--thi-truong-411.rss'},
    'media':{title:'Media',file:'media-412.rss'},
    'tet-viet':{title:'Tết Việt',file:'tet-viet-416.rss'},
    'dinh-chinh':{title:'Đính chính',file:'dinh-chinh-476.rss'},
    'moi-nhat': { title: 'Mới nhất', file: 'home.rss'}
}