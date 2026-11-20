
import type { ComponentType } from "react";
import TrangChu from "../pages/TrangChu/TrangChu";
import ThoiSu from "../pages/ThoiSu/ThoiSu";
import TheGioi from "../pages/TheGioi/TheGioi";
import KinhTe from "../pages/KinhTe/KinhTe";
import GiaoDuc from "../pages/GiaoDuc/GiaoDuc";
import TheThao from "../pages/TheThao/TheThao";
import GiaiTri from "../pages/GiaiTri/GiaiTri";
import SucKhoe from "../pages/SucKhoe/SucKhoe";
import CongNghe from "../pages/CongNghe/CongNghe";

type TabType = {
    title: string,
    route: string,
    component: ComponentType
}

export interface SubMenu {
    title: string,
    route:string,
}

export interface MenuCategory{
    title: string,
    route: string,
    subCategory?:SubMenu[],
}
export const tabs: TabType[] = [
    { 
        title: "Trang chủ", 
        route: "/",
        component: TrangChu
    },
    { 
        title: "Thời sự", 
        route: "/thoi-su",
        component: ThoiSu
    },
    { 
        title: "Thế giới",
        route: "/the-gioi",
        component: TheGioi,
    },
    { 
        title: "Kinh tế", 
        route: "/kinh-te",
        component: KinhTe
    },
    { 
        title: "Giáo dục", 
        route: "/giao-duc",
        component: GiaoDuc
    },
    { 
        title: "Thể thao", 
        route: "/the-thao",
        component: TheThao 
    },
    { 
        title: "Giải trí", 
        route: "/giai-tri",
        component: GiaiTri,
    },
    { 
        title: "Sức khỏe", 
        route: "/suc-khoe",
        component: SucKhoe
    },
    { 
        title: "Công nghệ", 
        route: "/cong-nghe",
        component: CongNghe
    },
];

export const Categories: MenuCategory[] = [
    {title:'Mới nhất', route:'/moi-nhat'},
    {title:'Xã hội', route:'/xa-hoi', subCategory:[
            {title:'Chính trị',route:'/chinh-tri'},
            {title:'Tin tức',route:'/tin-tuc'},
            {title:'Phóng sự',route:'/phong-su'},
        ]},
    {title:'Kinh tế', route:'/kinh-te', subCategory:[
            {title:'Thị trường', route:'/thi-truong'},
            {title: 'Doanh nghiệp', route: '/doanh-nghiep' },
            {title: 'Đầu tư', route: '/dau-tu' },
            {title: 'Tài chính - Chứng khoán', route: '/taichinh-chungkhoan' },
            {title: 'Giảm nghèo bền vững', route: '/giam-ngheo' },
        ]},
    {
        title: 'Sóng xanh',
        route: '/song-xanh',
        subCategory: [
            { title: 'Di chuyển xanh', route: '/di-chuyen' },
            { title: 'Net zero', route: '/net-zero' },
            { title: 'Đầu tư', route: '/xanh-dau-tu' },
            { title: 'Lifestyle', route: '/lifestyle' },
            { title: 'Xanh 4.0', route: '/xanh-4-0' },
        ],
    },
    {title: 'Địa ốc', route: '/dia-oc', subCategory: [
            { title: 'Đô thị - Dự án', route: '/do-thi' },
            { title: 'Thị trường - Doanh nghiệp', route: '/thi-oc' },
            { title: 'Nhà đẹp - Kiến trúc', route: '/kien-truc' },
            { title: 'Chuyên gia - Tư vấn', route: '/chuyen-gia' },
            { title: 'Media Địa ốc', route: '/media-dia-oc' },
        ],
    },
    {
        title: 'Sức khỏe',
        route: '/suc-khoe',
        subCategory: [
            { title: 'Y khoa', route: '/y-khoa' },
            { title: 'Thuốc tốt', route: '/thuoc-tot' },
            { title: 'Khỏe đẹp', route: '/khoe-dep' },
            { title: 'Giới tính', route: '/gioi-tinh' },
            { title: 'Mẹ và bé', route: '/me-be' },
            { title: 'Phòng chống ung thư', route: '/phong-chong' },
        ],
    },
    {
        title: 'Thế giới',
        route: '/the-gioi',
        subCategory: [
            { title: 'Phân tích - Bình luận', route: '/phan-tich' },
            { title: 'Chuyện lạ', route: '/chuyen-la' },
        ],
    },
    {
        title: 'Giới trẻ',
        route: '/gioi-tre',
        subCategory: [
            { title: 'Nhịp sống', route: '/nhip-song' },
            { title: 'Cộng đồng mạng', route: '/cong-dong-mang' },
        ],
    },
    {
        title: 'Pháp luật',
        route: '/phap-luat',
        subCategory: [
            { title: 'Bản tin 113', route: '/ban-tin' },
            { title: 'Pháp đình', route: '/chuyen-toa' },
        ],
    },
    {
        title: 'Thể thao',
        route: '/the-thao',
        subCategory: [
            { title: 'Bóng đá', route: '/bong-da' },
            { title: 'Hậu trường thể thao', route: '/hau-truong' },
            { title: 'Golf', route: '/golf' },
            { title: 'HIGHLIGHTS', route: '/highlight' },
        ],
    },
    { title: 'Người lính', route: '/nguoi-linh' },
    {
        title: 'Xe',
        route: '/xe',
        subCategory: [
            { title: 'Thị trường xe', route: '/thi-truong-xe' },
            { title: 'Đánh giá xe', route: '/danh-gia' },
            { title: 'Cộng đồng xe', route: '/cong-dong-xe' },
            { title: 'Tư vấn', route: '/tu-van' },
        ],
    },
    {
        title: 'Văn hóa',
        route: '/van-hoa',
        subCategory: [
            { title: 'Chuyển động văn hóa', route: '/chuyen-van-hoa' },
            { title: 'Sách', route: '/sach' },
            { title: 'Góc nhìn', route: '/goc-nhin' },
        ],
    },
    {
        title: 'Giải trí',
        route: '/giai-tri',
        subCategory: [
            { title: 'Phim ảnh', route: '/phim-anh' },
            { title: 'Hậu trường sao', route: '/hau-truong-sao' },
            { title: 'Âm nhạc', route: '/am-nhac' },
            { title: 'Thời trang - Làm đẹp', route: '/thoi-trang' },
        ],
    },
    {
        title: 'Giáo dục',
        route: '/giao-duc',
        subCategory: [
            { title: 'Cổng trường', route: '/cong-truong' },
            { title: 'Tuyển sinh', route: '/tuyen-sinh' },
            { title: 'Du học', route: '/du-hoc' },
        ],
    },
    { title: 'Khoa học', route: '/khoa-hoc' },
    {
        title: 'Hoa hậu',
        route: '/hoa-hau',
        subCategory: [
            { title: 'Tin tức trong nước', route: '/tin-tuc-trong-nuoc' },
            { title: 'Hoa hậu Việt Nam', route: '/hoa-hau-vn' },
            { title: 'Quốc tế', route: '/quoc-te' },
        ],
    },
    { title: 'Video', route: '/video' },
];

export const Mega_Categories: MenuCategory[] = [
    {
        title: 'Bạn đọc',
        route: '/ban-doc',
        subCategory: [
            { title: 'Điều tra', route: '/dieu-tra' },
            { title: 'Diễn đàn', route: '/dien-dan' },
            { title: 'Hồi âm', route: '/hoi-am' },
            { title: 'Nhân ái', route: '/nhan-ai' },
        ],
    },
    {
        title: 'Hàng không - Du lịch',
        route: '/hang-khong-du-lich',
        subCategory: [
            { title: 'Hành trình', route: '/hanh-trinh' },
            { title: 'Mở vali', route: '/vali' },
            { title: 'Vivu', route: '/vivu' },
            { title: 'Khoảnh khắc', route: '/khoanh-khac' },
            { title: 'Đối thoại', route: '/doi-thoai' },
        ],
    },
    {
        title: 'Nhịp sống Thủ đô',
        route: '/nhip-song-thu-do',
        subCategory: [
            { title: 'Đời sống', route: '/doi-song' },
            { title: 'Giao thông - Đô thị', route: '/nstd-giao-thong' },
            { title: 'Đầu tư', route: '/nstd-dau-tu' },
            { title: 'Môi trường', route: '/moi-truong' },
        ],
    },
    {
        title: 'Nhịp sống phương Nam',
        route: '/nhip-song-phuong-nam',
        subCategory: [
            { title: 'Chuyển động 24h', route: '/chuyen-dong' },
            { title: 'Giao thông - Đô thị', route: '/giao-thong' },
            { title: 'Kinh tế - Thị trường', route: '/kinh-te-thi-truong' },
            { title: 'Media', route: '/media' },
        ],
    },
    { title: 'Công nghệ', route: '/cong-nghe' },
    { title: 'Tôi nghĩ', route: '/toi-nghi' },
    { title: 'Nhật báo', route: '/nhat-bao' },
    { title: 'Tết Việt', route: '/tet-viet' },
    { title: 'Đính chính', route: '/dinh-chinh' },
]