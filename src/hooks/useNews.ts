import {useState,useEffect} from 'react';
import {fetchRss, type NewsItem} from "../api/rssService.ts";

export const useNews = (rssUrl: string)=>{
    //các trạng thái có là loading data error để chúng ta không cần phải gọi fetch thủ công
    const [news,setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error,setError] = useState<string|null>(null);

    useEffect(() =>{
       const loadNews = async ()=>{
           setLoading(true);
           try{
               const data = await fetchRss(rssUrl);
               setNews(data);
               setError(null);
           }catch (err){
               console.log(err);
               setError('lỗi');
           }finally {
               setLoading(false);
           }
       }
       if(rssUrl){
           loadNews();
       }
    }, [rssUrl]);


    return {news, loading, error};
}
