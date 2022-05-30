import React from 'react';
import {Col,Row} from 'antd';
import {Footer} from './style'

const FooterPage = () => {


return(
 
        <Footer className="admin-footer" >
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">2022 © Fresco Digital Marketing</span>
                      </Col>
                      <Col md={12} xs={24}>
                      </Col>
                    </Row>
        </Footer>
)
}

export default FooterPage;