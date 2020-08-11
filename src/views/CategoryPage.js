import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/Title';
import { httpService } from '../services/httpService';
import { Row, Col } from 'react-bootstrap';
import { customFunction } from '../utils';

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

                <Col lg={4}>
                    <img src={news[1] ? news[1].img1 : ''} width='400' height='300' alt='news' />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{news[1] ? news[1].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{news[1] ? news[1].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{news[1] && customFunction.countDaysBetweenNow(news[1].createTime)}</div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col lg={4}>
                    <img src={news[2] ? news[2].img1 : ''} width='400' height='300' alt='news' />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{news[2] ? news[2].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{news[2] ? news[2].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{news[2] && customFunction.countDaysBetweenNow(news[2].createTime)}</div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <img src={news[3] ? news[3].img1 : ''} width='400' height='300' alt='news' />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{news[3] ? news[3].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{news[3] ? news[3].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{news[3] && customFunction.countDaysBetweenNow(news[3].createTime)}</div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <img src={news[4] ? news[4].img1 : ''} width='400' height='300' alt='news' />
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{news[4] ? news[4].title : ''}</div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ color: '#C0C0C0' }}>{news[4] ? news[4].sourceName : ''}</div>
                            <div className='ml-3' style={{ color: '#C0C0C0' }}>{news[4] && customFunction.countDaysBetweenNow(news[4].createTime)}</div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}
