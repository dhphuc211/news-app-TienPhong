import { createBrowserRouter } from "react-router-dom";
import MainContent from "../ContentContainer/ContentContainer";
import TrangChu from "../pages/TrangChu/TrangChu";
import Error from "../Error/Error";
import { tabs } from "../Header/HeaderData";
import SearchResult from "../pages/SearchResult/SearchResult";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainContent />,
        errorElement: <Error />,
        children:[
            {
                index: true,
                element: <TrangChu/>
            },
            ...tabs
                .filter(tab => tab.route !== '/')
                .map((tab) => (
                {
                    path: tab.route,
                    element: <tab.component/>
                }
            )),
            {
                path: '/search-news/:keyword',
                element: <SearchResult/>
            }            
        ]
    }
])