import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles/NewsItem.css'
import { customFunction } from '../utils';

const HorizontalNews = ({ item }) => (
    <Row className='mb-3 news-container'>
        <img alt='Anh' src={item.img1} className='news-img' />
        <Col>
            <Row>
                <div className='mr-3'>{item.sourceName ? item.sourceName : ''}</div>
                <div>
                    {
                        item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                    }
                </div>
            </Row>
            <Row>
                {item.title ? item.title : ''}
            </Row>
            <Row>
                Icon
                </Row>
        </Col>
    </Row>
)

const VerticalNews = ({ item }) => (
    <Row className='mb-3 news-container'>
        <Row>
            <img alt='Anh' src={item.img1} className='news-img' />
        </Row>
        <Row>
            {item.title ? item.title : ''}
        </Row>
        <Row>

            <div className='mr-3'>{item.sourceName ? item.sourceName : ''}</div>
            <div className='mr-3'>
                {
                    item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                }
            </div>
            <div>ICON</div>

        </Row>
    </Row>
)

export const NewsItem = ({ item, direction }) => (
    <>
        {
            (direction === 'vertical') ? <VerticalNews item={item} /> : <HorizontalNews item={item} />
        }
    </>
)




