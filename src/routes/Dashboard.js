import React from 'react';
import { connect } from 'dva';
import styles from './Dashboard.css';

function Dashboard() {
  return (
    <div className={styles.normal}>
      目前只有 login 的登录验证和跳转，剩下的还没做
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Dashboard);
