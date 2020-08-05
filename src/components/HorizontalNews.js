import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles/HorizontalNews.css'
import { customFunction } from '../utils';

export default function HorizontalNews({ item }) {
    return (
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
}
