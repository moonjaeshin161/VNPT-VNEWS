import React from 'react';
import Title from './Title';
import { customFunction } from '../utils';
import { Row } from 'react-bootstrap';

const VideoNews = ({ item }) => (
    <div style={{ borderBottom: '1px solid black', marginBottom: 15 }}>
        <img
            style={{ borderRadius: 20 }}
            src={item.img1}
            width='100%'
            height='200'
            alt='news' />
        <div style={{ fontWeight: 'bold', fontSize: 15 }}>{item.title}</div>
        <Row className='ml-0 mr-0 mb-2'>
            <div >{item.sourceName ? item.sourceName : ''}</div>
            <div className='ml-5'>
                {
                    item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                }</div>
            <div style={{ position: 'absolute', right: 15 }}>icon</div>
        </Row>
    </div>
)

const ImageNews = ({ item }) => (
    <div className='mb-2'>
        <img src={item.img1} width='100%' height='200' alt='news' />
    </div>
)


export const MediaNews = ({ type, news, title }) => (
    <>
        <Title title={title} />
        {
            news && news.map((item, index) => (
                (type === 'video') ? <VideoNews key={index} item={item} /> : <ImageNews key={index} item={item} />
            ))
        }
    </>
)

