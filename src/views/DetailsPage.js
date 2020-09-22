import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { httpService } from '../services/httpService';

import DetailsTitle from '../components/DetailsTitle';
import DetailsFooter from '../components/DetailsFooter';

export default function DetailsPage() {
    let { newsId } = useParams();
    let cateId = '';
    let tags = '';
    const [news, setNews] = useState('');

    useEffect(() => {
        // eslint-disable-next-line
        let didCancel = false;
        async function getNews() {
            try {
                console.log('ID: ', newsId)
                const response = await httpService.getNewsById(newsId);
                const data = await response.data[0];
                setNews(data);
                cateId = data.cateId;
                tags = data.tags;

            }
            catch (error) {
                console.log('Error: ', error)
            }
            finally {
                getRelatedList();
            }
        }
        getNews();
        return () => { didCancel = true }
    }, [cateId]);

    function createMarkup(content) {
        return { __html: content };
    }

    const getRelatedList = async () => {
        const response = await httpService.getRelatedList(newsId, cateId, tags);
        console.log(response);
    }

    return (
        <div>
            <DetailsTitle news={news} />
            <div dangerouslySetInnerHTML={createMarkup(news.content)} />
            <DetailsFooter tags={news.tags} />
        </div>
    )
}
