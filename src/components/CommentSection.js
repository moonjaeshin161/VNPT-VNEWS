import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './styles/CommentSection.css';

export default function CommentSection() {
    return (
        <div className='mb-5' style={{ position: 'relative' }}>
            <div className='comment-container'>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: 25 }} />
                <input className='comment-input ml-2' placeholder="Bình luận của bạn" />
            </div>
            <div style={{
                padding: '5px 25px',
                color: 'white',
                backgroundColor: 'blue',
                position: 'absolute',
                bottom: -40,
                right: 320,
                borderRadius: 15
            }} >Gửi</div>
        </div>
    )
}
