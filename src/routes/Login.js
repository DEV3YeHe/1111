import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './Login.css';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';

import { Input, Button, Form, Spin } from 'antd';

import Particular from '../components/Particular';
import Bear from '../components/Bear';

const FormItem = Form.Item

const Login = ({
	// login,				//取到模型
	dispatch,
	show,
  	loginLoading,			//取到 dispatch 方法
	form: {				//form 的方法
    	getFieldDecorator,
    	validateFields,
    },
}) => {

	// const { show, loginLoading } = login    //【好像是】在下面 mapStateToProps 里取值~

	function handleOk () {
    validateFields((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/begin', payload: values });
      // console.log('数据从路由组件传出')
      // console.log({payload: values})
    })
  }


	// const {show} = login;

  return (
    <div className={styles.normal}>
    	
{/* ↓ 背景粒子 ↓ */}
		<div className={styles.bg}> 
			<Particular />		
		</div>
{/* ↓ 底部版权声明 ↓ */}
		<div>
			<p style={{color:'rgba(0, 0, 0, 0.68)',marginTop:'50',position:'fixed',bottom:'25',width:'100%',textAlign:'center'}}>
			@ 2017 David's Re-ment, hope U like here~!
			<a href="http://www.houseside.cn" style={{marginLeft:'14',fontWeight:'blod'}}>&gt; Visite Home &lt;</a></p>
		</div>
{/* ↓ 中心窗口，以动画包裹 ↓ */}
		<QueueAnim className={styles.normal} animConfig={[
            { opacity: [1, 0], translateY: [0, 90] },
            { opacity: [1, 0], translateY: [0, -90] }
          ]} delay={160} duration={700}>
          {show ? [

		<div className={styles.center} key='1'>
	    	<div className={styles.winContainer}>
	{/* 一半渐变 + 粒子 radialGradient rgba(120, 100, 160, 0.88)*/}

				<div className={styles.left1}  id='mouseRange'>
					<Bear />
				</div>

	{/* 另一半表单*/}
				<div className={styles.right1}>
					<div className={styles.row}>
						<svg style = {{width: '50px',height: '50px',marginRight:'20px',marginLeft:'20px'}}>
						  <use xlinkHref="#icon-Forme2" fill= "black"></use>
						</svg>

						<svg style = {{width: '120px',height: '50px'}}>
						  <use xlinkHref="#icon-rement"></use>
						</svg>
					</div>
					
					
						<FormItem hasFeedback style={{marginTop:'26px'}} >
						{getFieldDecorator('username', {
	            			rules: [
	              				{
	                				required: true,
	              				},
	            			],
	          			})(
			    		<Input style={{marginTop:'0px'}} size="large" onPressEnter={handleOk} placeholder="Enter Username" />
			    		)}</FormItem>

						<FormItem hasFeedback>
	      				{getFieldDecorator('password', {
	        				rules: [
	          					{
	            					required: false,
	          					},
	        				],
	      				})(
			    		<Input style={{marginTop:'0px'}} size="large" type="password" onPressEnter={handleOk} placeholder="Enter Password" />
			    		)}</FormItem>

			    		<Button style={{marginTop:'0px',boxShadow:'0 0 20px rgba(90, 0, 10, 0.28)'}} size="large" type="primary" onClick={handleOk} loading={loginLoading} >Sign in</Button>
					

			    		<hr style={{height:'1px',border:'none',borderTop:'1px dashed #eee',marginTop:'25px'}} />
			    		<div className={styles.row}>
			    			<p style={{marginTop:'12px',marginLeft:'16px',color:'#eee'}}>Username: guest</p>
			    			<p style={{marginTop:'12px',marginLeft:'25px',color:'#eee'}}>Password: guest</p>
			    		</div>

				</div>
	    	</div>
    	</div>
    	]: null}
        </QueueAnim>

    </div>
  );
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps(state) {
	const {show, loginLoading} = state.login;
  return {
  	show,
  	loginLoading,
  };
}

export default connect(mapStateToProps)(Form.create()(Login));
