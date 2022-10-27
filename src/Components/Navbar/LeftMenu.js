import React from 'react';
import { Menu, Grid} from 'antd';
const SubMenu = Menu.SubMenu;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { lg } = useBreakpoint()
  return (
    <Menu mode={lg ? "horizontal" : "inline"}>
      <SubMenu key="start" title={<h3>Start</h3>}>
          <Menu.Item key="start1">Start your business</Menu.Item>
          <Menu.Item key="start2">Branding</Menu.Item>
          <Menu.Item key="start3">Online presence</Menu.Item>
          <Menu.Item key="start4">Store set up</Menu.Item>
      </SubMenu>
      <SubMenu key="sell" title={<h3>Sell</h3>}>
        <Menu.Item key="sell1">Sell everywhere</Menu.Item>
        <Menu.Item key="sell2">Online Store</Menu.Item>
        <Menu.Item key="sell3">Point of Sale</Menu.Item>
        <Menu.Item key="sell4">Buy Button</Menu.Item>
        <Menu.Item key="sell5">Checkout</Menu.Item>
        <Menu.Item key="sell6">Sales channel</Menu.Item>
        <Menu.Item key="sell7">Wholesale marketplace</Menu.Item>
        <Menu.Item key="sell8">Custon storefront tools</Menu.Item>
        <Menu.Item key="sell9">International commerce</Menu.Item>
      </SubMenu>
      <SubMenu key="market" title={<h3>Market</h3>}>
        <Menu.Item key="market1">Market your business</Menu.Item>
        <Menu.Item key="market2">Email marketing</Menu.Item>
        <Menu.Item key="market3">Marketing automation</Menu.Item>
        <Menu.Item key="market4">Customer groups</Menu.Item>
        <Menu.Item key="market5">Business chat</Menu.Item>
        <Menu.Item key="market6">Facebook ads</Menu.Item>
      </SubMenu>
      <SubMenu key="manage" title={<h3>Manage</h3>}>
        <Menu.Item key="manage1">Manage everything</Menu.Item>
        <Menu.Item key="manage2">Balance</Menu.Item>
        <Menu.Item key="manage3">Capital</Menu.Item>
        <Menu.Item key="manage4">Shipping</Menu.Item>
        <Menu.Item key="manage5">Ecommerce automation</Menu.Item>
        <Menu.Item key="manage6">Fulfillment</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
