
import { FEEDS, RSS_BASE } from "./feeds";


export interface NewsItem{
    title: string;
    link: string;
    pubDate: string;
    description: string;
    thumbnail: string;
    category: string;
}


const convertItemToVariables = (item)=>
{
    // lấy information cơ bản, domparser xử lí CDATA, lấy thumbnail, xử lí description, đẩy dữ liệu lên
    const title = item.querySelector('title')?.textContent?.trim() || '';
    const link = item.querySelector('guid')?.textContent?.trim() || ''; //lấy link bài viết gốc từ guid

    const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
    const description = item.querySelector('description')?.textContent?.trim() || '';
    let thumbnail = item.querySelector('thumbnail')?.textContent?.trim() || item.querySelector('image')?.textContent?.trim() || '';
    let cleanDesciption ='';
    const category = item.querySelector('category')?.textContent?.trim() || '';

    if(description){
        // tạo Dom để phần tích html trong mô tả, nội dung tóm tắt chính
        const htmlParser = new DOMParser();
        const htmlDoc = htmlParser.parseFromString(description,'text/html');
        const p = htmlDoc.querySelector('p');
        if(p){
            cleanDesciption = p.textContent ||'';
        }else{
            cleanDesciption = htmlDoc.body.textContent || '';
        }
        if(!thumbnail){
            const img = htmlDoc.querySelector('img');
            if(img){
                thumbnail = img.getAttribute('src')||'';
            }
        }
    }
    
    return {title, link, pubDate, description:cleanDesciption.trim(), thumbnail,category}
}


export const fetchRss = async (rssUrl:string):Promise<NewsItem[]> => {
     // sử dụng localUrl dùng api-rss để tránh CORS
    const local  = rssUrl.replace('https://tienphong.vn', '/api-rss');
    const response = await fetch(local);
    if(!response.ok){
        throw new Error('Không lấy được rss');
    }
    const xmlString = await response.text();
    const parser = new DOMParser(); // domparser để phần tích xml
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    const parsedItems: NewsItem[] = [];
    items.forEach((item) => {
        //đẩy dữ liệu lên
        parsedItems.push(convertItemToVariables(item));
    });


    return parsedItems;
}


export const fetchAllRss = async (): Promise<NewsItem[]> =>
{
    const promise = Object.values(FEEDS).map(async (value: {title: string, file: string})=>
    {
        const full_rss: string = RSS_BASE + value.file
        return await fetchRss(full_rss)
    })

    const res: NewsItem[][] = await Promise.all(promise)
    return res.flat()
}

