import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './Login.css';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';

import { Input, Button, Form, Spin, Tooltip } from 'antd';

import Particular from '../components/Particular';
import TalkBear from '../components/TalkBear';

const FormItem = Form.Item

const Login = ({
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

{/* ↓ 中心窗口，以动画包裹 ↓ */}
		<QueueAnim className={styles.normal} animConfig={[
            { opacity: [1, 0], translateY: [0, 90] },
            { opacity: [1, 0], translateY: [0, -90] }
          ]} delay={160} duration={700}>
          {show ? [

		
    	<div className={styles.winContainer} key='1'>
{/* 一半渐变 + 粒子 radialGradient rgba(120, 100, 160, 0.88)*/}

			<div className={styles.left1}>
{/* 里面内容最外层是 position: absolute; 的话，route里必须先包一个div*/}
				
					<svg style = {{display:'block',width: '80px',height: '80px',margin:'40px 0 0 90px'}}>
					  <use xlinkHref="#icon-Forme2" fill= "#fff"></use>
					</svg>
					<svg style = {{width: '80px',height: '40px',margin:'0 0 0 90px'}}>
					  <use xlinkHref="#icon-rement" fill= "#fff"></use>
					</svg>
					<svg style = {{width: '340px',height: '280px',marginLeft:'-50px',marginTop:'-15px',bottom:'0px'}}>
					  <use xlinkHref="#icon-changjing"></use>
					</svg>


				
				
			</div>

{/* 另一半表单*/}
			<div className={styles.right1}>
				
				<TalkBear />
				
				<div className={styles.formGroup}>
					<p style={{marginTop:'12px',marginBottom:'4px',marginLeft:'11%'}}>
						username
					</p>
					<FormItem hasFeedback style={{width: '78%',marginLeft:'11%'}} >
					{getFieldDecorator('username', {
            			rules: [
              				{
                				required: true,
              				},
            			],
          			})(
		    		<Input size="default" onPressEnter={handleOk} placeholder=" " />
		    		)}</FormItem>
					
					<p style={{marginTop:'-10px',marginBottom:'4px',marginLeft:'11%'}}>
						password
					</p>
					<FormItem hasFeedback style={{marginTop:'0px',width: '78%',marginLeft:'11%'}}>
      				{getFieldDecorator('password', {
        				rules: [
          					{
            					required: false,
          					},
        				],
      				})(
		    		<Input size="default" type="password" onPressEnter={handleOk} placeholder=" " />
		    		)}</FormItem>

					<div className={styles.row}>
						<Button style={{marginTop:'0px',width: '22%',marginLeft:'11%',boxShadow:'0 0 10px rgba(190, 100, 110, 0.28)'}} size="default" type="primary" onClick={handleOk} loading={loginLoading} >Sign in</Button>
						<Tooltip title="On Building..." trigger="click">
						<svg style = {{width: '24px',height: '24px',marginLeft:'36%'}}>
					  		<use xlinkHref="#icon-github1" fill= "#999"></use>
						</svg>
						</Tooltip>
					</div>
		    		
				

		    		<hr style={{height:'1px',border:'none',borderTop:'1px dashed #eee',marginTop:'25px'}} />
		    		<div className={styles.row}>
		    			<p style={{marginTop:'12px',width:'50%',textAlign:'center',color:'#eee'}}>Username: guest</p>
		    			<p style={{marginTop:'12px',width:'50%',textAlign:'center',color:'#eee'}}>Password: guest</p>
		    		</div>
				</div>
			</div>
    	
    	</div>
    	]: null}
        </QueueAnim>
{/* ↓ 底部版权声明 ↓ */}
		<div>
			<p style={{color:'rgba(0, 0, 0, 0.68)',marginTop:'50',position:'fixed',bottom:'18',width:'100%',textAlign:'center'}}>
			@ 2017 David's Re-ment, hope U like here~!<a href="http://www.houseside.cn" style={{marginLeft:'16', fontWeight:'bloder'}}>&gt; Visit Home &lt;</a></p>
		</div>
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
