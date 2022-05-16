import React from "react";
import { IconContext } from "react-icons";
import { Menu } from "antd";
import { NavLink, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {TopNav} from './style'
const { SubMenu } = Menu;
function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <TopNav>
          <Link to="#" className="menu-bars"></Link>
        </TopNav>
        <Menu className="sidemenu" >
          <Menu.Item key={"Dashboard"} icon={<FeatherIcon icon='grid' size={26}/>} >
            <NavLink to={"#"} title="Dashboard">
              Dashboard
            </NavLink>
          </Menu.Item>

          <Menu.Item key="ProjectDetails" title="Project Details">
            <NavLink to={"#"} >
              Project Details
            </NavLink>
          </Menu.Item>
          <Menu.Item key="Tracker" title="RFP Tracker">
            <NavLink to={"#"} >
              RFP Tracker
            </NavLink>
          </Menu.Item>
          <SubMenu key='years' title="Years">
            <Menu.Item key='2022' title={'2022'}>
                <NavLink to={'#'} >
                  2022
                </NavLink>
            </Menu.Item>
            <Menu.Item key='2021' title={'2021'}>
                <NavLink to={'#'} >
                  2022
                </NavLink>
            </Menu.Item>
            <Menu.Item key='2020' title={'2020'}>
                <NavLink to={'#'} >
                  2022
                </NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'Department'} title="Department">
            <Menu.Item key={'CMI'} title='CMI'>
                <NavLink to={'#'}>
                  CMI
                </NavLink>
            </Menu.Item>
            <Menu.Item key={'DCCI'} title="DCCI">
              <NavLink to={'#'}>
                DCCI
              </NavLink>
            </Menu.Item>
            <Menu.Item key={'PCC'} title="PCC">
              <NavLink to={'#'}>
                PCC
              </NavLink>
            </Menu.Item>
            <Menu.Item key={'CMSS'} title="CMSS">
              <NavLink to={'#'}>
                CMSS
              </NavLink>
            </Menu.Item>
            <Menu.Item key={'NAP'} title='NAP'>
              <NavLink to={'#'}>
                NAP
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key={'projectStatus'} title="Project Status">
            <Menu.Item key={'CURRENT'} title="CURRENT">
              <NavLink to={'#'}>
                CURRENT
              </NavLink>
            </Menu.Item>
            <Menu.Item key={'closed'} title="Closed">
              <NavLink to={'#'}>
                Closed
              </NavLink>
            </Menu.Item>
            <Menu.Item key={'cancelled'} title="Cancelled">
              <NavLink to={'#'}>
                Cancelled
              </NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
