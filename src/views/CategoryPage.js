import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

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

    //get current news
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);


    useEffect(() => {
        getNewsByCate();
    });

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
        await setNews(response.data);
    }

    //change page
    const onShowSizeChange = (current, size) => {
        setNewsPerPage(size);
    }

    return (
        <div>
            <Title title={location.state.name} />

            <Row>
                <ArticleItem item={currentNews[0]} />
                <ArticleItem item={currentNews[1]} direction='vertical' />
            </Row>

            <Row className='mt-3'>
                <ArticleItem item={currentNews[2]} direction='vertical' />
                <ArticleItem item={currentNews[3]} direction='vertical' />
                <ArticleItem item={currentNews[4]} direction='vertical' />
            </Row>

            <ArticleItem item={currentNews[5]} direction='horizontal' />
            <ArticleItem item={currentNews[6]} direction='horizontal' />
            <ArticleItem item={currentNews[7]} direction='horizontal' />
            <ArticleItem item={currentNews[8]} direction='horizontal' />
            <ArticleItem item={currentNews[9]} direction='horizontal' />

            <CustomPagination totalNews={totalNews} newsPerPage={newsPerPage} onShowSizeChange={onShowSizeChange} />
        </div>
    )
}
