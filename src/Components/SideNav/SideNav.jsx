import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Image from "react-bootstrap/Image";

import "./SideNav.scss";
const SideNav = ({ collapsed }) => {
  const { Sider } = Layout;
  return (
    <div className="sideNav">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo mt-5">
          <Link to="/dashboard">
            <Image src="/images/GlobeAct.png" />
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className={"pl-1 overview"}
        >
          <Menu.Item key="11" icon={<Image src="/images/file.png" />}>
            Overview
          </Menu.Item>
        </Menu>
        <div className="px-4">
          <hr />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className={"pl-1 fund"}
        >
          <Menu.Item key="12">FUNDRAISING</Menu.Item>
        </Menu>
        {/* <h3 className='fund ml-4'>FUNDRAISING</h3> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className={"pl-1"}
        >
          <Menu.Item key="1" icon={<Image src="/images/projects.png" />}>
            Projects
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <Image
                src="/images/file1.png"
                style={{ marginRight: "15px", paddingLeft: "5px" }}
              />
            }
          >
            Forms
          </Menu.Item>
        </Menu>
        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <div className="px-4">
            <hr />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className={"pl-1 fund"}
          >
            <Menu.Item key="3">ADMIN settings</Menu.Item>
          </Menu>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className={"pl-1"}
          >
            <Menu.Item key="1" icon={<Image src="/images/cog.png" />}>
              Settings
            </Menu.Item>
          </Menu>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className={"pl-1"}
            style={{ marginTop: "60px" }}
          >
            <Menu.Item key="4" icon={<Image src="/images/close.png" />}>
              Log out
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </div>
  );
};
export default SideNav;
