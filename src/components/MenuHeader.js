import React from 'react';
import styles from './MenuHeader.css';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import Logo from '../components/Logo';

// const SubMenu = Menu.SubMenu;

function MenuHeader({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="vertical"
      theme="light"
    >
      <Menu.Item key="/dashboardI" style={{position:'relative',left:'-14px',margin:'8px 0 36px 0'}}>
        <Logo />
      </Menu.Item>

      <Menu.Item key="/dashboard" style={{width:'140px',height:'50px'}}>
        <Link to="/dashboard"><Icon type="api" />Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="/viscera" style={{width:'140px',height:'50px'}}>
        <Link to="/viscera"><Icon type="tags-o" />LV.1 Viscera</Link>
      </Menu.Item>

      <Menu.Item key="/behavior" style={{width:'140px',height:'50px'}}>
        <Link to="/behavior"><Icon type="tags-o" />LV.2 Behavior</Link>
      </Menu.Item>

      <Menu.Item key="/reflective" style={{width:'140px',height:'50px'}}>
        <Link to="/reflective"><Icon type="tags-o" />LV.3 Reflective</Link>
      </Menu.Item>

      <Menu.Item key="/skilltrees" style={{width:'140px',height:'50px'}}>
        <Link to="/skilltrees"><Icon type="fork" />Skill Trees</Link>
      </Menu.Item>

      <Menu.Item key="/about" style={{width:'140px',height:'50px'}}>
        <a href="http://www.houseside.cn/about-me/"><Icon type="meh" />About David</a>
      </Menu.Item>
	  
	  <Menu.Item key="/login" style={{width:'140px',height:'50px'}}>
        <Link to="/login"><Icon type="disconnect" />Log Out</Link>
      </Menu.Item>
      
    </Menu>
  );
}

export default MenuHeader;
