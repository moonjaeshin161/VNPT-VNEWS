import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'react-bootstrap';

import './styles/SearchBar.css'

export default function SearchBar() {
    return (
        <Row className='search-bar-container justify-content-center align-items-center' style={{}}>
            <Row className='input-container'>
                <input className='search-input' placeholder='Tìm kiếm' />
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: 20, color: 'gray' }} />
            </Row>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: 25, marginLeft: 30, color: 'gray' }} />
        </Row >
    )
}
