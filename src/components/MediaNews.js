import React from 'react';
import Title from './Title';
import { customFunction } from '../utils';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ReactHlsPlayer from 'react-hls-player';

import './styles/MediaNews.css'

const VideoNews = ({ item }) => (
    <div style={{ borderBottom: '1px solid black', marginBottom: 15 }}>
        <ReactHlsPlayer
            url={item.content}
            autoplay={false}
            controls={true}
            width='100%'
            height={200}
            className="player-item"
        />
        <div style={{ fontWeight: 'bold', fontSize: 15 }}>{item.title}</div>
        <Row className='ml-0 mr-0 mb-2'>
            <div >{item.sourceName ? item.sourceName : ''}</div>
            <div className='ml-5'>
                {
                    item.createTime && customFunction.countDaysBetweenNow(item.createTime)
                }</div>
            <Row className="align-items-center" style={{ position: 'absolute', right: 10 }}>
                <div>0</div>
                <FontAwesomeIcon icon={faThumbsUp} className="news-icon" />
                <div>0</div>
                <FontAwesomeIcon icon={faCommentDots} className="news-icon" />
            </Row>
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

