import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { customFunction } from '../utils';

export default function HorizontalArticle({ item }) {
    const { img1, sourceName, createTime, title } = item;
    return (
        <Row className='mt-3 mb-3 pb-3' style={{ borderBottom: '1px solid black' }}>
            <Col lg={4}>
                <img
                    alt='bai bao'
                    src={img1}
                    height='200'
                    width='300'
                    style={{ borderRadius: 20 }}
                />
            </Col>
            <Col lg={8}>
                <Row>
                    <div className='mr-3'>
                        {
                            sourceName && sourceName
                        }
                    </div>
                    <div>
                        {
                            createTime && customFunction.countDaysBetweenNow(createTime)
                        }
                    </div>
                </Row>
                <Row>
                    <div>
                        {
                            title && title
                        }
                    </div>
                </Row>
                <Row style={{ position: 'absolute', bottom: 10 }}>
                    <div>ICON</div>
                </Row>
            </Col>
        </Row>
    )
}
