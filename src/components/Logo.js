import React from 'react';
import styles from './Logo.css';

function Logo() {
  return (
    <div className={styles.normal}><a href="http://localhost:8000/#/dashboard">
	    <svg style = {{width: '20px',height: '20px',margin:'22px 0 22px 14px'}}>
		  <use xlinkHref="#icon-Forme2" fill= "#333"></use>
		</svg>
		<svg style = {{width: '70px',height: '20px',margin:'22px 0 22px 4px'}}>
		  <use xlinkHref="#icon-rement" fill= "#333"></use>
		</svg></a>
    </div>
  );
}

export default Logo;
