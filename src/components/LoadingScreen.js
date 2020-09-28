import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoadingScreen() {
    return (
        <Loader
            className='d-flex justify-content-center align-items-center'
            style={{ position: 'fixed', left: '0', top: '0', width: '100%', height: '100%', zIndex: '9999999999', overflow: 'hidden', background: '#fff' }}
            type="Puff"
            color="#00BFFF"
            height='30%'
            width='30%'
            timeout={3000} //3 secs

        />

    )
}
