import React from 'react';
import styles from './MainLayout.css';
import MenuHeader from './MenuHeader';
// import Logo from '../components/Logo';

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
	    <div className={styles.bar}>
	        <MenuHeader location={location} />
	    </div>

	    <div className={styles.content}>
	        {children}
	    </div>
    </div> 
  );
}

export default MainLayout;
