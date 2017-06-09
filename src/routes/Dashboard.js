import React from 'react';
import { connect } from 'dva';
import styles from './Dashboard.css';
import Bear from '../components/Bear';
import Rating from '../components/Rating';
import QueueAnim from 'rc-queue-anim';

function Dashboard() {

  return (
    <div className={styles.normal}>
	    <QueueAnim className={styles.normal} animConfig={[
            { opacity: [1, 0], translateY: [0, 90] },
            { opacity: [1, 0], translateY: [0, -90] }
          ]} delay={60} duration={700}>
          {true ? [

		<Rating key='1'/>
		
		]: null}
        </QueueAnim>
    </div>
  );
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Dashboard);
