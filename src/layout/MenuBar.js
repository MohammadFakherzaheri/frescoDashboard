import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';



const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, events }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events;
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <Menu.Item 
        icon={
          !topMenu && (
            <NavLink className="menuItem-iocn active" to={`${path}`}>
              <FeatherIcon icon="home"/>
            </NavLink>
          )
        }
        key="dashboard"
      >
        <NavLink onClick={toggleCollapsed} to={`${path}`} className='active'>
          Dashboard
        </NavLink>
      </Menu.Item>
      <SubMenu key="Trends" icon={!topMenu && <FeatherIcon icon="trending-up" />} title="Trends">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/trends/add-trend`}>
            Add Trend
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/trends/all-trend`}>
            All Trend
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Categories" icon={!topMenu && <FeatherIcon icon="list" />} title="Categories">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/category/add-category`}>
            Add New
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/category/view-all`}>
            View All
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="SubCategories" icon={!topMenu && <FeatherIcon icon="list" />} title="SubCategories">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/subcategories/view-all`}>
          View All
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Lifestyle" icon={!topMenu && <FeatherIcon icon="activity" />} title="Lifestyle">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/lifestyle/add-new`}>
          Add New
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/lifestyle/view-all`}>
          View All
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="PopCulture" icon={!topMenu && <FeatherIcon icon="activity" />} title="PopCulture">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/popculture/add-new`}>
          Add New
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/popculture/view-all`}>
          View All
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Event" icon={!topMenu && <FeatherIcon icon="calendar" />} title="Event">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/event/add-new/week`}>
          Add New
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/event/event-list/month`}>
          Event List
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Culture Warriors" icon={!topMenu && <FeatherIcon icon="activity" />} title="Culture Warriors">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/cultureWarriors/add-warriors`}>
          Add Warriors
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/cultureWarriors/warriors-list`}>
          Warriors List
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/cultureWarriors/leader-board`}>
          Leader Board
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Settings" icon={!topMenu && <FeatherIcon icon="settings" />} title="Settings">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/settings`}>
          General Setting
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/portal-setting`}>
          Portal Settings
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="Reports" icon={!topMenu && <FeatherIcon icon="file-text" />} title="Reports">
        <Menu.Item key="" className="submenumargin">
          <NavLink onClick={toggleCollapsed} to={`${path}/report/create-analytics-report`}>
          Create Analytics Report
          </NavLink>
        </Menu.Item>
        <Menu.Item key="" className="submenumargin">
          <NavLink onClick={toggleCollapsed} to={`${path}/report/view-analytics-report`} className="submenumargin">
          View Analytics Reports
          </NavLink>
        </Menu.Item>
        <Menu.Item key="" className="submenumargin">
          <NavLink onClick={toggleCollapsed} to={`${path}/report/create-AI-reports`}>
          Create AI Report
          </NavLink>
        </Menu.Item>
      </SubMenu>
   
      <Menu.Item icon={!topMenu && <FeatherIcon icon="message-circle" />} key="Enquiries">
        <NavLink onClick={toggleCollapsed} to={`${path}/enquiries`}>
        Enquiries
        </NavLink>
      </Menu.Item>
     
      <Menu.Item icon={!topMenu && <FeatherIcon icon="bar-chart" />} key="Traffics">
        <NavLink onClick={toggleCollapsed} to={`${path}/traffics`}>
        Traffics
        </NavLink>
      </Menu.Item>
      
      <SubMenu key="Pricing" icon={!topMenu && <FeatherIcon icon="dollar-sign" />} title="Pricing">
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/pricing/add-price`}>
          Add Price
          </NavLink>
        </Menu.Item>
        <Menu.Item key="">
          <NavLink onClick={toggleCollapsed} to={`${path}/pricing/pricing-details`} className="submenumargin">
          Pricing Details
          </NavLink>
        </Menu.Item>
      </SubMenu>
     
      <Menu.Item icon={!topMenu && <FeatherIcon icon="repeat" />} key="Transactions">
        <NavLink onClick={toggleCollapsed} to={`${path}/transactions`}>
        Transactions
        </NavLink>
      </Menu.Item>
      
      <Menu.Item icon={!topMenu && <FeatherIcon icon="user-check" />} key="Subscriber">
        <NavLink onClick={toggleCollapsed} to={`${path}/subscribers`}>
        Subscribers
        </NavLink>
      </Menu.Item>
      <Menu.Item icon={!topMenu && <FeatherIcon icon="bell"/>} key="Help">
        <NavLink onClick={toggleCollapsed} to={`${path}/faq`}>
        Help Center
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
