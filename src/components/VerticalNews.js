import React from 'react';
import { Row } from 'react-bootstrap';

import './styles/VerticalNews.css'
import { customFunction } from '../utils';

export default function VerticalNews({ item }) {
    return (
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
}
