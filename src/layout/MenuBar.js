import React from 'react';
import 'antd/dist/antd.css';
import FeatherIcon from "feather-icons-react";
import { Button, Menu } from 'antd';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard','1',<FeatherIcon icon="home"/>),
  getItem('Project Details','2',<FeatherIcon icon="home"/>),
  getItem('RFP Tracker','3',<FeatherIcon icon="home"/>),
  getItem('Years','sub1',<FeatherIcon icon="home"/>),
  // [
  //   getItem('2022','4'),
  //   getItem('2021','5'),
  //   getItem('2020','6 '),
  // ],
  getItem('Department','sub2'),
  // ,[
  //   getItem('CMI','7'),
  //   getItem('DCCI','8'),
  //   getItem('PCC','9'),
  //   getItem('CMSS','10'),
  //   getItem('NAP','11'),
  // ]),
  getItem('Project Status','sub3'),
  // [
  //   getItem('CURRENT','13'),
  //   getItem('Closed','14'),
  //   getItem('Cancled','15'),

  // ]),
];

console.log(items,'items')

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  

  return (
    <div>
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
       {collapsed ? <FeatherIcon icon='align-left' /> : <FeatherIcon icon='align-right'  />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Navbar;