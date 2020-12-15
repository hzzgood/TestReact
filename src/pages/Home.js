import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import SideDrawer from '../components/SideDrawer';

const { Header, Content, Footer } = Layout;

export default function Home() {
    return (
        <Router>
             <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Discover</Menu.Item>
                    <Menu.Item key="3">My Profile</Menu.Item>
                </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div> */}
                <SideDrawer/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
       
}