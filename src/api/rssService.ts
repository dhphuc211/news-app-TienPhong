
export interface NewsItem{
    title: string;
    link: string;
    pubDate: string;
    description: string;
    thumbnail: string;
}

export const fetchRss = async (rssUrl:string):Promise<NewsItem[]> => {
    const proxy = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`; // sử dụng allorigins proxxy để tránh CORS
    const response = await fetch(proxy);
    if(!response.ok){
        throw new Error('Không lấy được rss');
    }
    const xmlString = await response.text();
    const parser = new DOMParser(); // domparser để phần tích xml
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    const parsedItems: NewsItem[] = [];
    items.forEach((item) => {
        // lấy information cơ bản, domparser xử lí CDATA, lấy thumbnail, xử lí description, đẩy dữ liệu lên
        const title = item.querySelector('title')?.textContent?.trim() || '';
        const link = item.querySelector('link')?.textContent?.trim() || '';
        const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
        const description = item.querySelector('description')?.textContent?.trim() || '';
        let thumbnail = item.querySelector('thumbnail')?.textContent?.trim() || item.textContent?.trim() || '';
        let cleanDesciption ='';

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
                    thumbnail = img.src;
                }
            }
        }
        //đẩy dữ liệu lên
        parsedItems.push({title, link, pubDate, description:cleanDesciption.trim(), thumbnail
        });
    });


    return parsedItems;
}