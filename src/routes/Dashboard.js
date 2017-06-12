import React from 'react';
import { connect } from 'dva';
import styles from './Dashboard.css';
// import Bear from '../components/Bear';
import Rating from '../components/Rating';
import QueueAnim from 'rc-queue-anim';
// import PropTypes from 'prop-types';
import MainLayout from '../components/MainLayout';

function Dashboard({dashboard}) {

const {                                     //取出监听到的 state 里面的东西；
    show,

    } = dashboard;
// const dashs = { show };
  return (
    <div className={styles.normal}>

      <MainLayout location={location}>

  	    <QueueAnim animConfig={[
              { opacity: [1, 0], translateY: [0, 90] },
              { opacity: [1, 0], translateY: [0, -90] }
            ]} delay={60} duration={700}>
            {{show} ? [                       //AntMotion 要使用{ }（对象）做参数；

    		<Rating key='1' />
    		
        		]: null}
        
        </QueueAnim>

      </MainLayout>

    </div>
  );
}

function mapStateToProps({dashboard}) {     //直接传入 model 的所有 state（相当于添加监听）；
  return {dashboard};
}

export default connect(mapStateToProps)(Dashboard);
