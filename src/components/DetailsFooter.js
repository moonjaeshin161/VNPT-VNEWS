import React from 'react'
import { Row } from 'react-bootstrap';

import './styles/DetailsFooter.css'
import CommentSection from './CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';

const Tag = ({ tag }) => (
    <div className="tag-item">{tag}</div>
)

export default function DetailsFooter({ tags }) {
    return (
        <div className="mt-4">
            <Row className="ml-0" style={{ position: 'relative' }}>
                <Row className="ml-0 align-items-center">
                    <FontAwesomeIcon icon={faBookmark} style={{ fontSize: 20, color: 'gray', marginRight: 10 }} />
                    <div style={{ fontSize: 20 }}>Lưu bài viết</div>
                </Row>
                <div style={{ position: 'absolute', right: 20, fontWeight: 'bold' }}>
                    Chia sẻ
                    <FontAwesomeIcon icon={faShare} style={{ fontSize: 20, color: 'gray', marginLeft: 10 }} />
                </div>
            </Row>
            <hr />
            {
                tags ?
                    <Row className="ml-0 mb-3">
                        {
                            tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))

                        }
                    </Row>
                    : ''
            }
            <hr />
            <CommentSection />

        </div>
    )
}
