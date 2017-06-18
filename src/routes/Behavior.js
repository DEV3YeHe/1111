import React from 'react';
import { connect } from 'dva';
import styles from './Behavior.css';
import { Link } from 'dva/router';

import { Layout, Icon, Menu } from 'antd';
import QueueAnim from 'rc-queue-anim';


const { Header, Content, Footer, Sider } = Layout;

function Behavior({dashboard,dispatch}) {

  function modeSwitch (collapsed) {
      dispatch({ type: 'dashboard/modeSwitch', collapsed });
  }

  const {                                     //取出监听到的 state 里面的东西；
    show,
    mode,
    collapsed,
  } = dashboard;

  // const menuHeaderProps = {
  //   location,
  //   mode,
  // };

  return (
    <div className={styles.normal}>
      

    <Layout className={styles.layout}>
      <Sider width='150' collapsible collapsed={collapsed} onCollapse={modeSwitch} style = {{backgroundColor:'#fff',borderRight: '1px solid #e9e9e9' }}>
            <div style = {{backgroundColor:'#fff', height:'60px'}}>
              <Link to="/dashboard">
              <span style = {{backgroundColor:'#fff',width: '100%',height: '100%'}}>
                <svg className="nav-logo" style = {{width: '20px',height: '20px', margin:'18px 0 0 20px' }}>
                  <use xlinkHref="#icon-Forme2" fill= "#333"></use>
                </svg>
                <svg className="nav-text" style = {{width: '70px',height: '20px',margin:'18px 0 0 0' }}>
                  <use xlinkHref="#icon-rement" fill= "#333"></use>
                </svg>
              </span>
              </Link>
            </div>
            
            <Menu 
            mode={mode}
            theme="light"
            defaultSelectedKeys={['behavior']}
            inlineIndent="18px"
            style = {{borderRight: '0px solid #e9e9e9' }}
            >

            <Menu.Item key="dashboard" style={{}}>
              <Link to="/dashboard">
              <span>
                <Icon type="api" className="nav-big"/>
                <span className="nav-text">Dashboard</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="viscera" style={{}}>
              <Link to="/viscera">
              <span>
                <Icon type="tags-o" className="nav-big"/>
                <span className="nav-text">LV.1 Viscera</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="behavior" style={{}}>
              <Link to="/behavior">
              <span>
                <Icon type="tags-o" className="nav-big"/>
                <span className="nav-text">LV.2 Behavior</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="reflective" style={{}}>
              <Link to="/reflective">
              <span>
                <Icon type="tags-o" className="nav-big"/>
                <span className="nav-text">LV.3 Reflective</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="skilltrees" style={{}}>
              <Link to="/skilltrees">
              <span>
                <Icon type="fork" className="nav-big"/>
                <span className="nav-text">Skill Trees</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="about" style={{}}>
              <Link href="http://www.houseside.cn/about-me/">
              <span>
                <Icon type="meh" className="nav-big"/>
                <span className="nav-text">About David</span>
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="login" style={{ }}>
              <Link to="/login">
              <span>
                <Icon type="disconnect" className="nav-big"/>
                <span className="nav-text">Log Out</span>
              </span>
              </Link>
            </Menu.Item>
 
          </Menu>
      </Sider>
      <Content>

      </Content>
    </Layout>

    </div>
  );
}

function mapStateToProps({dashboard}) {     //直接传入 model 的所有 state（相当于添加监听）；
  return {dashboard};
}

export default connect(mapStateToProps)(Behavior);

