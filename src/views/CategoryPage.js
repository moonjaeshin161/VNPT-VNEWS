import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import Title from '../components/Title';
import { ArticleItem } from '../components/ArticleItem';

import { httpService } from '../services/httpService';
import CustomPagination from '../components/CustomPagination';

export default function CategoryPage() {
    let location = useLocation();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(10);
    const [totalNews, setTotalNews] = useState(0);

    useEffect(() => {
        getNewsByCate();
    }, []);

    useEffect(() => {
        getPageInfo();
    }, []);



    const getPageInfo = async () => {
        let params = `pageSize=1&cateId=${location.state.cateId}`;
        const response = await httpService.getNewsByCate(location.state.cateId, params);
        setTotalNews(response.pageInfo.totalItem);
    }

    const getNewsByCate = async () => {
        let params = `page=${currentPage}&pageSize=${newsPerPage}&orderType=0&cateId=${location.state.cateId}`;
        const response = await httpService.getNewsByCate(location.state.cateId, params);
        console.log(response);
        await setNews(response.data);
        console.log('News: ', news)
    }

    //change page
    const onShowSizeChange = (current, size) => {
        setNewsPerPage(size);
    }

    const onChange = (page, pageSize) => {
        setCurrentPage(page);
        getNewsByCate();
        console.log('Page: ', page, 'Page size: ', pageSize);
    }

    return (
        <div>
            <Title title={location.state.name} />

            <Row>
                <ArticleItem item={news[0]} />
                <ArticleItem item={news[1]} direction='vertical' />
            </Row>

            <Row className='mt-3'>
                <ArticleItem item={news[2]} direction='vertical' />
                <ArticleItem item={news[3]} direction='vertical' />
                <ArticleItem item={news[4]} direction='vertical' />
            </Row>

            <ArticleItem item={news[5]} direction='horizontal' />
            <ArticleItem item={news[6]} direction='horizontal' />
            <ArticleItem item={news[7]} direction='horizontal' />
            <ArticleItem item={news[8]} direction='horizontal' />
            <ArticleItem item={news[9]} direction='horizontal' />

            <CustomPagination totalNews={totalNews} newsPerPage={newsPerPage} onShowSizeChange={onShowSizeChange} onChange={onChange} />
        </div>
    )
}
