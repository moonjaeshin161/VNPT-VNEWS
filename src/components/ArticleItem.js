import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { customFunction } from '../utils';

const HorizontalArticle = ({ item }) => (
    <Row className='mt-3 mb-3 pb-3' style={{ borderBottom: '1px solid black' }}>
        <Col lg={4}>
            <img
                alt='bai bao'
                src={item.img1}
                height='200'
                width='300'
                style={{ borderRadius: 20 }}
            />
        </Col>
        <Col lg={8}>
            <Row>
                <div className='mr-3'>
                    {
                        item.sourceName && item.sourceName
                    }
                </div>
                <div>
                    {
                        item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                    }
                </div>
            </Row>
            <Row>
                <div>
                    {
                        item.title && item.title
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

export const ArticleItem = ({ direction, item }) => (
    <>
        {
            (direction === 'vertical') ? <VerticalArticle item={item} /> : <HorizontalArticle item={item} />
        }
    </>
);

