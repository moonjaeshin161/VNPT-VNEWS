import React from 'react'
import { Row } from 'react-bootstrap'
import { customFunction } from '../utils';

export default function DetailsTitle({ news }) {
    let { cateName, title, sourceName } = news;
    return (
        <>
            {
                console.log(news)
            }
            <div style={{ color: 'gray', fontSize: 25, fontWeight: 'bolder' }}>{cateName ? Object.values(cateName)[0] : ''}</div>
            <div style={{ fontSize: 35, fontWeight: 'bolder' }}>{title ? title : ''}</div>
            <Row className="ml-0 mb-3">
                <div style={{ color: 'gray', fontSize: 15, marginRight: 10 }}>{sourceName}</div>
                <div style={{ color: 'gray', fontSize: 15 }}>
                    {
                        news && customFunction.countDaysBetweenNow(news.createTime)
                    }
                </div>
            </Row>
        </>
    )
}
