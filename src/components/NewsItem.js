import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles/NewsItem.css'
import { customFunction } from '../utils';
import Title from './Title';

const HorizontalNews = ({ item }) => (
    <Row className='mb-3 news-container ml-0'>
        <img alt='Anh' src={item.img1} className='news-img' />
        <Col>
            <Row>
                <div className='mr-3'>{item.sourceName ? item.sourceName : ''}</div>
                <div>
                    {
                        item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                    }
                </div>
            </Row >
            <Row className='news-title'>
                {item.title ? item.title : ''}
            </Row>
            <Row >
                Icon
            </Row>
        </Col >
    </Row >
)

const VerticalNews = ({ item }) => (
    <div style={{ borderBottom: '1px solid black', marginBottom: 5 }}>
        <img alt='Anh' src={item.img1} width='100%' height='200' style={{ borderRadius: 20, marginBottom: 10 }} />
        <div className='news-title'>{item.title ? item.title : ''}</div>
        <Row className='ml-0 mr-0 mb-2 mt-4'>
            <div >{item.sourceName ? item.sourceName : ''}</div>
            <div className='ml-5'>
                {
                    item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                }</div>
            <div style={{ position: 'absolute', right: 15 }}>icon</div>
        </Row>
    </div>
)

export const NewsItem = ({ news, direction, title }) => (
    <>
        <Title title={title} />
        {
            news && news.map((item, index) => (
                (direction === 'vertical')
                    ? ((index === 0) ? <VerticalNews item={item} key={index} /> : <HorizontalNews item={item} key={index} />)
                    : <HorizontalNews item={item} key={index} />
            ))
        }
    </>
)




