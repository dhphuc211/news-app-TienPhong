import { Route, Routes } from 'react-router-dom'
import { tabs } from '../Header/HeaderData.ts'

const MainContent = ()=>
{
    return (
        <>
            <Routes>
                {
                    tabs.map((tab)=>
                    (
                        <Route path={tab.route} element={<tab.component/>}/>
                    ))
                }
            </Routes>
        </>
    )
}

export default MainContent