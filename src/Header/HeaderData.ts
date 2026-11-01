
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