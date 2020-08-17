import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Pagination({ totalNews, newsPerPage, paginate, cateName }) {

    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <Nav>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href={cateName} className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </Nav>
    )
}
