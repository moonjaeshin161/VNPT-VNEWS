import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles/NewsItem.css';
import { customFunction } from '../utils';

const HorizontalArticle = ({ item }) => (
    <Row className='mt-3 mb-3 pb-3' style={{ borderBottom: '1px solid black' }}>

        <img
            alt='bai bao'
            src={item && item.img1}
            height='200'
            width='300'
            style={{ borderRadius: 10 }}
        />


        <Col lg={8} className='ml-3'>
            <Row>
                <div className='mr-3'>
                    {
                        item && item.sourceName
                    }
                </div>
                <div>
                    {
                        item && customFunction.countDaysBetweenNow(item.createTime)
                    }
                </div>
            </Row>
            <Row>
                <div className='news-title'>
                    {
                        item && item.title
                    }
                </div>
            </Row>
            <Row style={{ position: 'absolute', bottom: 10 }}>
                <div>ICON</div>
            </Row>
        </Col>
    </Row>
)


const VerticalArticle = ({ item }) => (
    <Col lg={4}>
        <img src={item ? item.img1 : ''} width='100%' height='250' alt='news' style={{ borderRadius: 10 }} />
        <div>
            <div style={{ fontWeight: 'bold', fontSize: 20 }}>{item ? item.title : ''}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ color: '#C0C0C0' }}>{item ? item.sourceName : ''}</div>
                <div className='ml-3' style={{ color: '#C0C0C0' }}>{item && customFunction.countDaysBetweenNow(item.createTime)}</div>
            </div>
        </div>
    </Col>

)

const BigArticle = ({ item }) => (
    <Col lg={8} style={{ position: 'relative', paddingRight: 0 }}>
        <img src={item ? item.img1 : ''} width='750' height='500' alt='news' style={{ borderRadius: 10 }} />
        <div style={{ position: 'absolute', bottom: 20, left: 50 }}>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{item ? item.title : ''}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ color: '#C0C0C0' }}>{item ? item.sourceName : ''}</div>
                <div className='ml-3' style={{ color: '#C0C0C0' }}>{item && customFunction.countDaysBetweenNow(item.createTime)}</div>
            </div>
        </div>
    </Col>
)

export const ArticleItem = ({ direction, item }) => (
    <>
        {
            (direction === 'vertical') ? <VerticalArticle item={item} />

                : (direction === 'horizontal') ? <HorizontalArticle item={item} /> : <BigArticle item={item} />
        }
    </>
);

