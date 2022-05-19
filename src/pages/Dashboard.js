import React, { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import {Row, Col,Progress, Skeleton} from 'antd';
import { SubHeaders } from "../components/headers/headers";
import { Main } from "./mainStyled";
import { DashboardBaseStyleWrap } from "./styled";
import FeatherIcon from 'feather-icons-react';
import {FaMoneyBillAlt,FaFileInvoiceDollar} from 'react-icons/fa'
import {MdArrowDropDown} from 'react-icons/md'
import {Cards} from '../components/CardsLayourt/cartFrames'




const LOISattus = lazy(()=> import('../components/Dashboard/LOIIssue'));
const MarketingStatusChart = lazy(()=> import('../components/Dashboard/MarketingStatus'));
const MonthlyTargetChart = lazy(()=> import('../components/Dashboard/MonthlyTarget'))
const GPA_1 = lazy(()=> import('../components/Dashboard/Gpa1'));
const GPA_2 = lazy(()=> import('../components/Dashboard/Gpa2'));
const GPA_3 = lazy(()=> import('../components/Dashboard/Gpa3'));
const GPA_4 = lazy(()=> import('../components/Dashboard/Gpa4'));

const MainDashboard = props =>{
    const {percentcolor} = props;

    
    // const [percent, setPercent] = useState(55);
    // console.log(percent,'precent')
    // const [bgColor, setBgColor] = useState('orange');
    // const runOnce = useRef(false);
    // console.log(runOnce,'run once');
    // useEffect(()=>{
    //     if(runOnce.current === false){
    //         runOnce.current = true;
    //         setPercent(55)
    //         if(percent >= 50){
    //             setBgColor('green')
    //         }
    //     }
    // })
    
    
    
    
    
    
    return(
        <>
            <SubHeaders
            ghost
            title = "Main Dashboard"
        />
            <Main className="site-layout-background">
                <Row gutter={25}>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24} >
                        <DashboardBaseStyleWrap>
                        <Cards title="Total Project's" >
                            <div className="totalproject">
                                <h2>24<sub>PO</sub></h2> 
                                <FeatherIcon icon="settings" size={24} />
                            </div>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                        <DashboardBaseStyleWrap>
                        <Cards title="LOI Issued">  
                        <div className="totalproject">
                            <h2>197,114,975</h2> 
                            <FaMoneyBillAlt size={24}/>
                        </div>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                        <DashboardBaseStyleWrap>
                        <Cards title="Monthly">  
                        <div className="totalproject">
                            <h2>121,555,590</h2> 
                            <FeatherIcon icon="trending-up" size={24}/>
                        </div>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                        <DashboardBaseStyleWrap>
                        <Cards title="Invoice">  
                        <div className="totalproject">
                            <h2>120,795,716</h2> 
                            <FeatherIcon icon="file-text" size={24}/>
                        </div>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                        <DashboardBaseStyleWrap>
                        <Cards title="Saving">  
                        <div className="totalproject">
                            <h2>120,795,716</h2> 
                            <div className="totalproject">
                                <sup><MdArrowDropDown color="green" size={24}/></sup>
                                <h3>0%</h3>
                                <FaFileInvoiceDollar size={24}/>
                            </div>
                        </div>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                    <Col xxl={4} xl={4} lg={8} md={8} sm={12} xs={24}>
                        <DashboardBaseStyleWrap>
                        <Cards title="P&L">  
                 
                            <h2>120,795,716</h2> 
                            <Progress percent={52} percentcolor={percentcolor}/>
                            </Cards>
                        </DashboardBaseStyleWrap>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                        <Suspense 
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                        <MarketingStatusChart />
                        </Suspense>
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                        <LOISattus />
                        <MonthlyTargetChart />

                        </Suspense>
                    </Col>
                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24}>
                            <Suspense 
                                fallback={
                                    <Cards headless>
                                        <Skeleton active />
                                    </Cards>
                                }
                            >
                                <Cards>
                                    <Row>
                                        <Col  xxl={12} lg={12} ms={12} xs={24} >
                                    <GPA_1 />
                                        </Col>
                                        <Col xxl={12} lg={12} ms={12} xs={24}>
                                    <GPA_2 />
                                        </Col>
                                        <Col xxl={12} lg={12} ms={12} xs={24}>
                                    <GPA_3 />
                                        </Col>
                                        <Col xxl={12} lg={12} ms={12} xs={24} >
                                            
                                    <GPA_4 />
                                        </Col>
                                        <Col></Col>
                                    </Row>

                                </Cards>
                            </Suspense>
                    </Col>
                </Row>
            </Main>

        </>
    )
}

export default MainDashboard;