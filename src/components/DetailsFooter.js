import React from 'react'
import { Row } from 'react-bootstrap';

import './styles/DetailsFooter.css'
import CommentSection from './CommentSection';

const Tag = ({ tag }) => (
    <div className="tag-item">{tag}</div>
)

export default function DetailsFooter({ tags }) {
    return (
        <div className="mt-4">
            <Row className="ml-0">
                <div>Lưu bài viết</div>
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
