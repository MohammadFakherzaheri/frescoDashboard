import React,{useEffect, useState} from "react";
import { Layout, Button, Row, Col,Input,Breadcrumb } from "antd";
import { ThemeProvider } from "styled-components";
import Navbar from "./MenuBar";
import { Div } from "./style.js";
// import {GrUpdate} from 'react-icons/gr';
import FeatherIcon from 'feather-icons-react'
// import Admin from '../Routes/index';
import MainDashboard from '../pages/Dashboard'



const { Header, Footer, Sider, Content } = Layout;
const { darkTheme,lightTheme } = require("../theme/themeVariables");

const PageLayout = (WrappedComponent) => {
const [date, setDate] = useState(new Date().toLocaleString());
const UpdateTime = (e)=>{
    e.preventDefault();
    setDate(new Date().toLocaleString())
}
const pathname = window.location.pathname;

  const footerStyle = {
    padding: "20px 30px 18px",
    color: "rgba(0, 0, 0, 0.65)",
    fontSize: "14px",
    background: "rgba(255, 255, 255, .90)",
    width: "100%",
    boxShadow: "0 -5px 10px rgba(146,153,184, 0.05)",
  };

  const SideBarStyle = {
    margin: "63px 0 0 0",
    padding: "15px 15px 55px 15px",
    overflowY: "auto",
    height: "100vh",
    position: "fixed",
    zIndex: 998,
    background:"rgba(255, 255, 255, .90)"
  };




 
  return (
    <Div>
      <Layout className="layout">
        <Header
            style={{
                position:'fixed',
                width:'100%',
                top:0
            }}
        >
          <Row>
            <Col lg={3} md={6} xs={8}>
              <Button type="link" className="imglogo">
                <img
                  src={require("../static/images/logo.png")}
                  alt="MnueLogo"
                  
                />
              </Button>
            </Col>
            <Col lg={15} md={8} xm={8} >
                <Input type="search" />
            </Col>
            <Col lg={6} md={10} xm={8} >
                <div className="top-Header-Info">
                <FeatherIcon  size={26} icon="refresh-ccw" className="updateIcon" onClick={UpdateTime}/>
                <p>{date}</p>
                </div>
            </Col>
          </Row>
        </Header>

        <Layout className="layout">
                <ThemeProvider theme={darkTheme}>
                <Sider width={230} style={SideBarStyle}>
                  <p className="sidebar-nav-title">MAIN MENU</p>
                  <Navbar />
                </Sider>
              </ThemeProvider>
          <Layout className="atbd-main-layout">
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >   
              <MainDashboard />
            </div>
          </Content>

              <Footer className="admin-footer" style={footerStyle}>
                <Row>
                  <Col md={12} xs={24}>
                    <span className="admin-footer__copyright">
                      2022 © Fresco Web Services <sup>  &#x2712; Mohammad Fakher Zaheri</sup>
                    </span>
                  </Col>
                  <Col md={12} xs={24}></Col>
                </Row>
              </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Div>
  );
};

export default PageLayout;
