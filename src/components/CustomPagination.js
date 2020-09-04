import React from 'react';
import { Pagination } from 'antd';

export default function CustomPagination({ totalNews, newsPerPage, paginate, cateName, onShowSizeChange }) {

    return (
        <>
            <Pagination defaultCurrent={1} total={totalNews} defaultPageSize={10} pageSize={newsPerPage} onShowSizeChange={onShowSizeChange} />
        </>
    )
}
