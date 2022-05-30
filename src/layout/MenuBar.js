import React from "react";
import "antd/dist/antd.css";
import FeatherIcon from "feather-icons-react";
import { Button, Menu } from "antd";
import { useState } from "react";
import { Div } from "./style";
import { NavLink } from "react-router-dom";
import logo from '../static/images/logo.png';
const { SubMenu } = Menu;
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Div>
      <div className="logo">
        <div className="img">
          <img src={logo} />
        </div>
      </div>
      <div className="menuSidbar">
        <Menu>
          <Menu.Item
            key="dashboard"
            icon={<FeatherIcon icon="home" size={26} />}
          >
            <NavLink to={"#"} className="active">
              Main Dashboard
            </NavLink>
          </Menu.Item>
          <SubMenu
            key="ProjectDetails"
            icon={<FeatherIcon icon="trending-up" />}
            title="Project Deatils"
          >
            <Menu.Item key="ProjectDetail">
              <NavLink to={`#`}>Project Details</NavLink>
            </Menu.Item>
            <Menu.Item key="SingleProject">
              <NavLink to={`#`}>Single Project</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="RFPTracker"
            icon={<FeatherIcon icon="list" />}
            title="RFP Tracker"
          >
            <Menu.Item key="ViewDeatils">
              <NavLink to={`#`}>View Deatils</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="Years" icon={<FeatherIcon icon="list" />} title="Years">
            <Menu.Item key="2022">
              <NavLink to={`#`}>2022</NavLink>
            </Menu.Item>
            <Menu.Item key="2021">
              <NavLink to={`#`}>2021</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="department"
            icon={<FeatherIcon icon="list" />}
            title="department "
          >
            <Menu.Item key="WbDesD">
              <NavLink to={`#`}>Web Designer Department</NavLink>
            </Menu.Item>
            <Menu.Item key="WDevD">
              <NavLink to={`#`}>Web Developer Department</NavLink>
            </Menu.Item>
            <Menu.Item key="BackD">
              <NavLink to={`#`}>Backend Department</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Div>
  );
};

export default Navbar;
