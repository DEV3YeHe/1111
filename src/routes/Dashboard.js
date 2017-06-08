import React from 'react';
import { connect } from 'dva';
import styles from './Dashboard.css';
import Bear from '../components/Bear';
import Rating from '../components/Rating';

function Dashboard() {
  return (
    <div className={styles.normal}>
	    
		<Rating/>

    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Dashboard);
