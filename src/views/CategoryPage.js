import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import Title from '../components/Title';
import { ArticleItem } from '../components/ArticleItem';

import { httpService } from '../services/httpService';
import CustomPagination from '../components/CustomPagination';

import { CONST } from '../const';

export default function CategoryPage() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(10);
    const [totalNews, setTotalNews] = useState(0);
    let { url } = useRouteMatch();
    const cateName = url.split('/')[1];
    const cateId = Object.keys(CONST.CATE_ROUTE).find(key => CONST.CATE_ROUTE[key] === cateName);


    useEffect(() => {
        getNewsByCate();
    });

    useEffect(() => {
        getPageInfo();
    }, []);



    const getPageInfo = async () => {
        let params = `pageSize=1&cateId=${cateId}`;
        const response = await httpService.getNewsByCate(cateId, params);
        setTotalNews(response.pageInfo.totalItem);
    }

    const getNewsByCate = async () => {
        let params = `page=${currentPage}&pageSize=${newsPerPage}&orderType=0&cateId=${cateId}`;
        const response = await httpService.getNewsByCate(cateId, params);
        await setNews(response.data);
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
            <Title title={CONST.CATE_NAME[cateName]} />

            <Row>
                <ArticleItem item={news[0]} url={url} />
                <ArticleItem item={news[1]} direction='vertical' url={url} />
            </Row>

            <Row className='mt-3'>
                <ArticleItem item={news[2]} direction='vertical' url={url} />
                <ArticleItem item={news[3]} direction='vertical' url={url} />
                <ArticleItem item={news[4]} direction='vertical' url={url} />
            </Row>

            <ArticleItem item={news[5]} direction='horizontal' url={url} />
            <ArticleItem item={news[6]} direction='horizontal' url={url} />
            <ArticleItem item={news[7]} direction='horizontal' url={url} />
            <ArticleItem item={news[8]} direction='horizontal' url={url} />
            <ArticleItem item={news[9]} direction='horizontal' url={url} />

            <CustomPagination totalNews={totalNews} newsPerPage={newsPerPage} onShowSizeChange={onShowSizeChange} onChange={onChange} />
        </div>
    )
}
