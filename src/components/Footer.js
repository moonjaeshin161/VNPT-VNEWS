import React from 'react';
import { Container } from 'react-bootstrap';

import './styles/Footer.css'

export default function Footer() {
    return (
        <Container fluid className='footer-container'>
            <div className='footer-text pt-10'>TẬP ĐOÀN BƯU CHÍNH VIỄN THÔNG VIỆT NAM (VNPT)</div>
            <div className='footer-text'>Trụ sở: Tòa nhà VNPT, số 57 Phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</div>
            <div className='footer-text'>Giấy chứng nhận ĐKKD số: 0100684378 do Sở Kế hoạch và Đầu tư TP.Hà Nội cấp lần đầu ngày 17/8/2010. Đăng ký thay đổi lần 4 ngày 20/03/2017.</div>
            <div className='footer-text'>Điện thoại: 024.37741091 - Fax: 024.37741093 - Email: vanphong@vnpt.vn</div>
            <div className='footer-text'>Chịu trách nhiệm nội dung: Ông Phạm Đức Long – Chủ tịch Tập đoàn VNPT</div>
            <div className='footer-text'>© Bản Quyền thuộc Tập đoàn Bưu chính Viễn thông Việt Nam</div>
        </Container>
    )
}
