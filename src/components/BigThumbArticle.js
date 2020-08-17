import React from 'react'
import { Col } from 'react-bootstrap'
import { customFunction } from '../utils'

export default function BigThumbArticle({ item }) {
    return (

        <Col lg={4}>
            <img src={item ? item.img1 : ''} width='400' height='300' alt='news' />
            <div>
                <div style={{ fontWeight: 'bold', fontSize: 20 }}>{item ? item.title : ''}</div>
                <div style={{ display: 'flex' }}>
                    <div style={{ color: '#C0C0C0' }}>{item ? item.sourceName : ''}</div>
                    <div className='ml-3' style={{ color: '#C0C0C0' }}>{item && customFunction.countDaysBetweenNow(item.createTime)}</div>
                </div>
            </div>
        </Col>

    )
}
