import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Sider, Footer, Content, Header } = Layout;

const SiderBar = ({ children } : { children: React.ReactElement}) => {
  const history = useNavigate();
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider collapsible width="15vw" style={{ background: '#ffffff', color: 'black' }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100vh'}}>
          <Menu.Item onClick={() => history('/')} key="1" icon={<UserOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item onClick={() => history('/plan')} key="2" icon={<VideoCameraOutlined />}>
            计划表
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: 20 }}>
        {children}
      </Content>
    </Layout>
  )
}

export default SiderBar;