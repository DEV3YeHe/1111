import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';

import QueueAnim from 'rc-queue-anim';

import { Input, Button,  } from 'antd';

import Particular from '../components/Particular';


function Login({show}) {

	const loginShow = {show:true,};

  return (
    <div className={styles.normal}>
{/* ↓ 先整体包 1 块 ↓ */}
		
		<div className={styles.bg}>
		    		<svg style = {{width: '100%',height: '100%'}}>
					 <defs>
					  <linearGradient id="svg_c2" x1="0%" y1="66%" x2="100%" y2="0%">
					   <stop offset="0%" stopColor="#232349"/>
					   
					   <stop offset="100%" stopColor="#3997E6"/>
					  </linearGradient>
					 </defs>
					 <g>
					 	<title>WeLcome2Re-ment~!</title>
					 	<rect id="svg_s2" height="100%" width="100%" y="0" x="0" fill="url(#svg_c2)"/>
					 </g>
					</svg>
		</div>

		<div className={styles.middle}>
			<p style={{color:'rgba(255, 255, 255, 0.28)',marginTop:'50',position:'fixed',bottom:'25'}}>@ 2017 David's Re-ment, hope U like here~!</p>
		</div>
		
		<QueueAnim animConfig={[
            { opacity: [1, 0], translateY: [0, 90] },
            { opacity: [1, 0], translateY: [0, -90] }
          ]} delay={200} duration={750}>
          {loginShow.show ? [

    	<div className={styles.login1} key="a">
{/* 一半渐变 + 粒子 radialGradient rgba(120, 100, 160, 0.88)*/}
			<div className={styles.left1}>
				<div className={styles.login2}>
		    		<svg style = {{width: '320px',height: '320px'}}>
					 <defs>
					  <linearGradient id="svg_c1" x1="0%" y1="66%" x2="100%" y2="0%">
					   <stop offset="0%" stopColor="#F64AA4"/>
					   <stop offset="100%" stopColor="#49BFF7"/>
					  </linearGradient>
					 </defs>
					 <g>
					 	<rect id="svg_s1" height="320" width="320" y="0" x="0" rx="4" ry="4" fill="url(#svg_c1)"/>
					 </g>
					</svg>
				</div>
				<div className={styles.login3}> 
					<Particular />
				</div>
			</div>
{/* 另一半表单*/}
			<div className={styles.right1}>
				<div className={styles.row}>
					<svg style = {{width: '50px',height: '50px',marginRight:'20px',marginLeft:'20px'}}>
					  <use xlinkHref="#icon-Forme2" fill= "black"></use>
					</svg>

					<svg style = {{width: '120px',height: '50px'}}>
					  <use xlinkHref="#icon-rement" fill= "url(#svg_c3)"></use>
					  <defs>
					  <linearGradient id="svg_c3" x1="0%" y1="10%" x2="100%" y2="0%">
					   <stop offset="20%" stopColor="#2F7FC6"/>
					   <stop offset="100%" stopColor="#7B2AC7"/>
					  </linearGradient>
					 </defs>
					</svg>
				</div>
				
	    		<Input style={{marginTop:'30px'}} size="large" placeholder="Enter Username" />
	    		<Input style={{marginTop:'14px'}} size="large" placeholder="Enter Password" />
	    		<Button style={{marginTop:'14px',boxShadow:'0 0 20px rgba(90, 0, 10, 0.28)'}} size="large" type="primary">LOG IN</Button>

	    		<hr style={{height:'1px',border:'none',borderTop:'1px dashed #eee',marginTop:'25px'}} />
	    		<div className={styles.row}>
	    			<p style={{marginTop:'15px',marginLeft:'20px',color:'#999'}}>Username: guest</p>
	    			<p style={{marginTop:'15px',marginLeft:'25px',color:'#999'}}>Password: guest</p>
	    		</div>
			</div>
    	</div>
    	]: null}
        </QueueAnim>
    </div>
  );
}

function mapStateToProps(state) {
	const {show} = state.login;
  return {show};
}

export default connect(mapStateToProps)(Login);
