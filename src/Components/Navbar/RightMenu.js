import React from 'react';
import { Menu, Grid, Button, Row } from 'antd';
const SubMenu = Menu.SubMenu;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { lg } = useBreakpoint();
  return (<>
    <Row type={"flex"} align={"middle"}>
      <Menu mode={lg ? "horizontal" : "inline"}>
        <SubMenu key="pricing" title={<h3>Pricing</h3>}></SubMenu>
        <SubMenu key="learn" title={<h3>Learn</h3>}>
          <Menu.Item key="setting1">Help center</Menu.Item>
          <Menu.Item key="setting2">Blog</Menu.Item>
          <Menu.Item key="setting3">Business courses</Menu.Item>
          <Menu.Item key="setting4">Guides</Menu.Item>
          <Menu.Item key="setting5">Shopify community</Menu.Item>
          <Menu.Item key="setting6">Free tools</Menu.Item>
          <Menu.Item key="setting7">Podcasts</Menu.Item>
          <Menu.Item key="setting8">Business encyclopedia</Menu.Item>
          <Menu.Item key="setting9">Community events</Menu.Item>
          <Menu.Item key="setting10">Research</Menu.Item>
          <Menu.Item key="setting11">Editions</Menu.Item>
        </SubMenu>
        <SubMenu key="login" title={<h3>Login</h3>}></SubMenu>
      </Menu>
      <Button
        size={'large'}
        style={{
          backgroundColor: '#008060',
          color: '#ffffff',
          borderColor: '#008060',
          borderRadius: '4px'
        }}
        >Start free trial</Button>
    </Row>
    </>
  );
}

export default RightMenu;
