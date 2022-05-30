import React from "react";
import { Row, Col, Input, Space, Avatar, Image,Badge } from "antd";
import { TopMenuBarDesin } from "./style";
import avater from "../static/images/avater.png";
import FeatherIcon from 'feather-icons-react'
const { Search } = Input;
const TopMenuBar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <TopMenuBarDesin>
      <Row gutter={24}>
        <Col lg={14} md={12} xs={12}>
          <div className="Searchbar">
            <Space direction="vertical">
              <Search placeholder="input search text" onSearch={onSearch} />
            </Space>
          </div>
        </Col>
        <Col lg={10} md={12} xs={12}>
          <div className="topMenu">
            <div className="updateDashboard">
              <span>Update Dashboard</span>
            </div>
            <div className="Notifications">
            <Badge count={1}>
        <Avatar shape="square" icon={<FeatherIcon icon="bell" />} />
      </Badge>
            </div>
            <div className="Profile">
              <Avatar
                src={
                  <Image
                    src={avater}
                  />
                }
              />
            </div>
          </div>
        </Col>
      </Row>
    </TopMenuBarDesin>
  );
};
export default TopMenuBar;
