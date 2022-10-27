import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import PageContent from './Components/Content/PageContent'
import './App.css';
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ 
          position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
      }}
      >
        <Navbar />
      </ Header>
      <Content>
        <PageContent />
      </Content>
      <Footer>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    );
  }
}

export default App;
