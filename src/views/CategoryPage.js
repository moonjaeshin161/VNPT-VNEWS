import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Title from '../components/Title';
import { ArticleItem } from '../components/ArticleItem';

import { httpService } from '../services/httpService';
import { customFunction } from '../utils';
import Pagination from '../components/Pagination';
import { CONST } from '../const';

export default function CategoryPage() {
    let location = useLocation();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(10);
    const [totalNews, setTotalNews] = useState(0);

    //get current news
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);


    useEffect(() => {
        getNewsByCate();
    }, [location.state.cateId]);

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
    const paginate = async (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Title title={location.state.name} />

            <Row>
                <Col lg={8} style={{ position: 'relative', paddingRight: 0 }}>
                    <img src={currentNews[0] ? currentNews[0].img1 : ''} width='750' height='500' alt='news' />
                    <div style={{ position: 'absolute', bottom: 20, left: 50 }}>
                        <div style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{currentNews[0] ? currentNews[0].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{currentNews[0] ? currentNews[0].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{currentNews[0] && customFunction.countDaysBetweenNow(currentNews[0].createTime)}</div>
                        </div>
                    </div>
                </Col>

                <ArticleItem item={currentNews[1]} direction='vertical' />

            </Row>

            <Row className='mt-3'>
                {
                    currentNews && currentNews.map((item, index) => {
                        if (index >= 2 && index <= 4) {
                            return (
                                <ArticleItem item={item} direction='vertical' key={index} />
                            );
                        }
                        else {
                            return '';
                        }
                    })
                }
            </Row>

            {
                currentNews && currentNews.map((item, index) => {
                    if (index > 4) {
                        return (
                            <ArticleItem item={item} direction='horizontal' key={index} />
                        );
                    }
                    else {
                        return '';
                    }
                })
            }

            <Pagination totalNews={totalNews} newsPerPage={newsPerPage} paginate={paginate} cateName={CONST.CATE_ROUTE[location.state.cateId]} />
        </div>
    )
}
