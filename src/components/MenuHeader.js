import React from 'react';
import styles from './MenuHeader.css';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import Logo from '../components/Logo';

const SubMenu = Menu.SubMenu;

// const MenuHeader = ({                      //两种写法
//     mode,
// }) => {

function MenuHeader({mode,selectedKey,dispatch}) {        //两种写法

  // console.log([location]);
  // function selectedKeys({ item, key, selectedKeys }){
  //   console.log(key)
  //   // dispatch({ type: 'dashboard/selectedKeys', payload: key });
  // }

  return (
    <div >
          
    
          <Menu className={styles.normal}
            // selectedKeys={selectedKey}
            mode={mode}
            theme="light"
            defaultSelectedKeys={['dashboard']}


          >
            
            <Logo style={{left:'-14px',margin:'0 0 36px 0'}}><Link to="/dashboard" /></Logo>

            <Menu.Item key="dashboard">
              <Link to="/dashboard">
              <span>
                <Icon type="file" />
                <span className={styles.navText}>Dashboard</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="viscera" style={{width:'140px',height:'50px'}}>
              <Link to="/viscera"><Icon type="tags-o" />LV.1 Viscera</Link>
            </Menu.Item>

            <Menu.Item key="behavior" style={{width:'140px',height:'50px'}}>
              <Link to="/behavior"><Icon type="tags-o" />LV.2 Behavior</Link>
            </Menu.Item>

            <Menu.Item key="reflective" style={{width:'140px',height:'50px'}}>
              <Link to="/reflective"><Icon type="tags-o" />LV.3 Reflective</Link>
            </Menu.Item>

            <Menu.Item key="skilltrees" style={{width:'140px',height:'50px'}}>
              <Link to="/skilltrees"><Icon type="fork" />Skill Trees</Link>
            </Menu.Item>

            <Menu.Item key="about" style={{width:'140px',height:'50px'}}>
              <a href="http://www.houseside.cn/about-me/"><Icon type="meh" />About David</a>
            </Menu.Item>
      	  
      	  <Menu.Item key="login" style={{width:'140px',alignSelf: 'stretch',flexGrow:'1'}}>
              <Link to="/login"><Icon type="disconnect" />Log Out</Link>
            </Menu.Item>
            
          </Menu>

    </div>
  );
}


export default MenuHeader;
