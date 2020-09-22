import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles/NewsItem.css';
import { customFunction } from '../utils';
import { Link } from 'react-router-dom';
import { faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HorizontalArticle = ({ item, url }) => (
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
                <Link to={`${url}/${item ? item.newsId : ''}`} style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }} className='news-title'>
                    {
                        item && item.title
                    }
                </Link>
            </Row>
            <Row className="align-items-center" style={{ position: 'absolute', bottom: 10 }}>
                <div>0</div>
                <FontAwesomeIcon icon={faThumbsUp} className="news-icon" />
                <div>0</div>
                <FontAwesomeIcon icon={faCommentDots} className="news-icon" />
            </Row>
        </Col>
    </Row>
)


const VerticalArticle = ({ item, url }) => (
    <Col lg={4}>
        <img src={item ? item.img1 : ''} width='100%' height='250' alt='news' style={{ borderRadius: 10 }} />
        <div>
            <Link to={`${url}/${item ? item.newsId : ''}`} style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }} className='news-title'>
                {
                    item && item.title
                }
            </Link>
            <div style={{ display: 'flex' }}>
                <div style={{ color: '#C0C0C0' }}>{item ? item.sourceName : ''}</div>
                <div className='ml-3' style={{ color: '#C0C0C0' }}>{item && customFunction.countDaysBetweenNow(item.createTime)}</div>
            </div>
        </div>
    </Col>

)

const BigArticle = ({ item, url }) => (
    <Col lg={8} style={{ position: 'relative', paddingRight: 0 }}>
        <img src={item ? item.img1 : ''} width='750' height='500' alt='news' style={{ borderRadius: 10 }} />
        <div style={{ position: 'absolute', bottom: 20, left: 50 }}>
            <Link to={`${url}/${item ? item.newsId : ''}`} style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }} className='news-title'>
                {
                    item && item.title
                }
            </Link>
            <div style={{ display: 'flex' }}>
                <div style={{ color: '#C0C0C0' }}>{item ? item.sourceName : ''}</div>
                <div className='ml-3' style={{ color: '#C0C0C0' }}>{item && customFunction.countDaysBetweenNow(item.createTime)}</div>
            </div>
        </div>
    </Col>
)

export const ArticleItem = ({ direction, item, url }) => (
    <>
        {
            (direction === 'vertical') ? <VerticalArticle item={item} url={url} />

                : (direction === 'horizontal') ? <HorizontalArticle item={item} url={url} /> : <BigArticle item={item} />
        }
    </>
);

