import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEllipsisH, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './styles/NavigationMenu.css'
import { Link } from "react-router-dom";
import { CONST } from "../const";

const NavagationItem = ({ children, cateId }) => {
  return (
    <Link to={{
      pathname: `/${CONST.CATE_ROUTE[cateId]}`,
      state: {
        name: children,
        cateId
      }
    }}
    >
      <div className='item-container item-container-title'> {children}</div>
    </Link>
  );
}

const MainList = ({ mainCateList, setShowMainList }) => {
  return (
    <Row className='align-items-center justify-content-between' style={{ height: 40 }}>
      <FontAwesomeIcon icon={faList} className='item-container' style={{ fontSize: 20 }} />
      {
        mainCateList && mainCateList.map((item, index) => (
          <NavagationItem cateId={item.cateId} key={index}>{item.name}</NavagationItem>
        ))
      }
      <FontAwesomeIcon icon={faEllipsisH} className='item-container' style={{ fontSize: 20 }} onClick={() => setShowMainList(false)} />
    </Row>
  );
}

const SubList = ({ subCateList, setShowMainList }) => {
  return (
    <Row className='align-items-center' style={{ height: 40 }}>
      <FontAwesomeIcon icon={faArrowLeft} className='item-container' style={{ fontSize: 20 }} onClick={() => setShowMainList(true)} />
      {
        subCateList && subCateList.map((item, index) => (
          <NavagationItem cateId={item.cateId} key={index}>{item.name}</NavagationItem>
        ))
      }
    </Row>
  )
}

const NavigationMenu = ({ mainCateList, subCateList }) => {

  const [showMainList, setShowMainList] = useState(true);

  return (
    <Container>
      {
        showMainList
          ? <MainList mainCateList={mainCateList} setShowMainList={setShowMainList} />
          : <SubList subCateList={subCateList} setShowMainList={setShowMainList} />
      }

    </Container >
  );
};

export default NavigationMenu;
