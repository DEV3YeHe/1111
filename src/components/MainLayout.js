import React from 'react';
import styles from './MainLayout.css';
import MenuHeader from './MenuHeader';
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Rating from '../components/Rating';




// const MainLayout = ({
//     show,
//     location,
// }) => {
// 	const coll = {
//     collapsed: false,
//     mode: 'inline',
//   };
//   onCollapse = (collapsed) => {
//     console.log(collapsed);
//     this.setState({
//       collapsed,
//       mode: collapsed ? 'vertical' : 'inline',
//     });
//   }
//   return (
//   	<Layout>
//         <Sider
//  			collapsible
//           collapsed={this.state.collapsed}
//           onCollapse={this.onCollapse}
//         >
// 			<MenuHeader location={location} />
//         </Sider>

// 		<Content>
// 		    <QueueAnim animConfig={[
//               { opacity: [1, 0], translateY: [0, 90] },
//               { opacity: [1, 0], translateY: [0, -90] }
//             ]} delay={60} duration={700}>
//             {{show} ? [                       //AntMotion 要使用{ }（对象）做参数；

//     		<Rating key='1' />
    		
//         		]: null}
        
//         </QueueAnim>
// 		</Content>
// 	</Layout>
//   );
// }

// export default MainLayout;
