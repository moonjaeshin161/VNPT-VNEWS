import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEllipsisH, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './styles/NavigationMenu.css'

const NavagationItem = ({ children }) => {
  return (
    <div className='item-container item-container-title'> {children}</div>
  );
}

const MainList = ({ mainCateList, setShowMainList }) => {
  return (
    <Row className='align-items-center justify-content-between' style={{ height: 40 }}>
      <FontAwesomeIcon icon={faList} className='item-container' style={{ fontSize: 20 }} />
      {
        mainCateList && mainCateList.map((item, index) => (
          <NavagationItem key={index}>{item.name}</NavagationItem>
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
          <NavagationItem key={index}>{item.name}</NavagationItem>
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