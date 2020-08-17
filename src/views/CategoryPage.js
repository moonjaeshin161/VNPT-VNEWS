import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import Title from '../components/Title';
import HorizontalArticle from '../components/HorizontalArticle';

import { httpService } from '../services/httpService';
import { customFunction } from '../utils';
import Pagination from '../components/Pagination';
import BigThumbArticle from '../components/BigThumbArticle';



export default function CategoryPage() {
    let location = useLocation();
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsByCate();
    }, [location.state.cateId])

    const getNewsByCate = async () => {
        let params = `page=1&pageSize=10&orderType=0&cateId=${location.state.cateId}`;
        const response = await httpService.getNewsByCate(location.state.cateId, params);
        console.log(response.data);
        await setNews(response.data);
    }

    return (
        <div>
            <Title title={location.state.name} />

            <Row>
                <Col lg={8} style={{ position: 'relative', paddingRight: 0 }}>
                    <img src={news[0] ? news[0].img1 : ''} width='750' height='500' alt='news' />
                    <div style={{ position: 'absolute', bottom: 20, left: 50 }}>
                        <div style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{news[0] ? news[0].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{news[0] ? news[0].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{news[0] && customFunction.countDaysBetweenNow(news[0].createTime)}</div>
                        </div>
                    </div>
                </Col>

                <BigThumbArticle item={news[1]} />

            </Row>

            <Row className='mt-3'>
                {
                    news && news.map((item, index) => {
                        if (index >= 2 && index <= 4) {
                            return (
                                <BigThumbArticle item={item} />
                            );
                        }
                        else {
                            return '';
                        }
                    })
                }
            </Row>

            {
                news && news.map((item, index) => {
                    if (index > 4) {
                        return (
                            <HorizontalArticle item={item} />
                        );
                    }
                    else {
                        return '';
                    }
                })
            }

            <Pagination />
        </div>
    )
}
