import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Rating.css';
import { TweenMax, TimelineMax } from "gsap";
import { Button, Input } from 'antd';
import QueueAnim from 'rc-queue-anim';



class Rating extends React.Component {
  componentDidMount() {
    let select = function(s) {
    return document.querySelector(s);
  },
  list_obj = document.getElementsByName("hahastar"),
  list_spark = document.getElementsByName("hahaspark"),
  rateWin = select('#rateWin'),
  s01 = select('#s01'),
  s02 = select('#s02'),
  s03 = select('#s03'),
  s04 = select('#s04'),
  s05 = select('#s05'),
  s11 = select('#s11'),
  s12 = select('#s12'),
  s13 = select('#s13'),
  s14 = select('#s14'),
  s15 = select('#s15'),
  ipt = select('#ipt'),
  ipt1 = select('#ipt1')
//——飞入！！！！
  for (let i = 0; i <= list_obj.length; i++) {
    
    let st1 = new TimelineMax({delay:( 1 + 0.1 * i )});          //TimelineMax 一定要传输组
    st1.from([list_obj[i]], 0.5, {opacity:0,scale:0.2,top:"-18px",rotation:"-420deg",left:"-20px",ease:"Circ.easeOut"})
    .to([list_obj[i]], 0.2, {scale:1.2,fill:"#FDDD9B"} )
    .to([list_obj[i]], 0.1, {scale:1.0,fill:"#eee"} );
  }
//——飞入！！！！
//——————————————————————————————————————————————————

//——将 list_obj 从对象集合转为数组，并测试
  list_obj = Array.prototype.slice.call(list_obj); 
  list_spark = Array.prototype.slice.call(list_spark);

  let sparkPath = [];
  for (let i = 0; i <= 4; i++) {
    sparkPath[i] = list_spark[i].childNodes
    sparkPath[i] = Array.prototype.slice.call(sparkPath[i]);
  }
//——将 list_obj 从对象集合转为数组，并测试
//——————————————————————————————————————————————————

//——搞 hover 效果 + 点击效果
  let c =1;

  const overstar = (e) => {               //hover 上
          // console.log(e.path[1])
      e.cancelBubble=true;
      e.stopPropagation();
      e.bubble=false;
      // console.log(e)
      // console.log(e.target.id)
    if(e.target.tagName == "use"){        //鼠标指向svg中的use时，算是出了svg，所以这里用hover use来触发hover；确定 hover 到 use 上了。
      // let obj = e.path[1]
      // console.log(e.target.id)
      let zifu = e.target.id

      let j =zifu.substring(2)  //得到 hover 的第几个
      // list_onStar = list_obj.slice(0, j++)     //取到需要变化的星星
      // TweenMax.to(list_onStar, 0.1, { scale:1.3, fill:"#FDDD9B"}) //实施变化
      for (let i = 0; i < j; i++) {
        TweenMax.to(list_obj[i], 0.5, { fill:"#FDDD9B"})
      }  
    }
  }
  const outstar = (e) => {                //hover out
    if(e.target.tagName == "use"){  
      let zifu = e.target.id
      let j =zifu.substring(2)
      for (let i = 0; i < j; i++) {
        TweenMax.to(list_obj[i], 0.1, { scale:1, fill:"#eee"})
      }
    }
  }

  const overaction = (e) =>{               //循环解除事件绑定#FF5500
    let h = 4;
    sta();
    if(e.target.tagName == "use"){        //鼠标指向svg中的use时，算是出了svg，所以这里用hover use来触发hover；确定 hover 到 use 上了。
        let zifu = e.target.id;            //取出use 的 id
        let q =zifu.substring(2);          //id换成 第几个
        q = parseInt(q);
        let h = q - 1;
            for (let j = 0; j <= 3; j++) {           // 放射
                let segment = new Segment(sparkPath[h][j]);
                let st4 = new TimelineMax();

                st4.to([sparkPath[h][j]], 0, { opacity:1 })
                .fromTo([sparkPath[h][j]], 0.5, { stroke: '#FF5500',strokeDasharray: segment.strokeDasharray(0, 10) }, { stroke: '#FFEEE6',strokeDasharray: segment.strokeDasharray(100, 100) })
                .to([sparkPath[h][j]], 0.07, { opacity:0 })
            };

      let st5 = new TimelineMax();                    //点击的星星 high
      st5.to([list_obj[h]], 0.07, { scale:1.5, fill:"#FFEEE6",rotation:"0deg"})
      .to([list_obj[h]], 0.07, { fill:"#FF5500"})
      .to([list_obj[h]], 0.8, { scale:1.3,rotation:"288deg", fill:"#FDDD9B",ease:"Circ.easeOut"});

            if(c){
                c=0;
                for (let j = 0; j < h; j++)  {
                    TweenMax.to(list_obj[j], 0, { scale:1.3, fill:"#FDDD9B"})
                }

                for (let i = 0; i <= 4; i++) {
                  if(list_obj[i]){
                      list_obj[i].removeEventListener('mouseover', overstar,true)
                      list_obj[i].removeEventListener('mouseout', outstar,true)
                  }
                }
            }else{
              for (let i = 0; i <= 4; i++) {
                if(list_obj[i]){
                  TweenMax.to(list_obj[i], 0, { scale:1, fill:"#eee"})
                }
              }
              for (let i = 0; i <= h; i++) {
                if(list_obj[i]){
                  TweenMax.to(list_obj[i], 0, { scale:1.3, fill:"#FDDD9B"})
                }
              }
            }
      }
    }
  const overactiont = (e) =>{               //循环解除事件绑定#FF5500

    e.preventDefault();
    let h = 4;

    if(e.target.tagName == "use"){        //鼠标指向svg中的use时，算是出了svg，所以这里用hover use来触发hover；确定 hover 到 use 上了。
        let zifu = e.target.id;            //取出use 的 id
        let q =zifu.substring(2);          //id换成 第几个
        q = parseInt(q);
        let h = q - 1;
            for (let j = 0; j <= 3; j++) {           // 放射
                let segment = new Segment(sparkPath[h][j]);
                let st4 = new TimelineMax();

                st4.to([sparkPath[h][j]], 0, { opacity:1 })
                .fromTo([sparkPath[h][j]], 0.5, { stroke: '#FF5500',strokeDasharray: segment.strokeDasharray(0, 10) }, { stroke: '#FFEEE6',strokeDasharray: segment.strokeDasharray(100, 100) })
                .to([sparkPath[h][j]], 0.07, { opacity:0 })
            };

      let st5 = new TimelineMax();                    //点击的星星 high
      st5.to([list_obj[h]], 0.07, { scale:1.5, fill:"#FFEEE6",rotation:"0deg"})
      .to([list_obj[h]], 0.07, { fill:"#FF5500"})
      .to([list_obj[h]], 0.8, { scale:1.3,rotation:"288deg", fill:"#FDDD9B",ease:"Circ.easeOut"});

            if(c){
                c=0;
                for (let j = 0; j < h; j++)  {
                    TweenMax.to(list_obj[j], 0, { scale:1.3, fill:"#FDDD9B"})
                }

                for (let i = 0; i <= 4; i++) {
                  if(list_obj[i]){
                      list_obj[i].removeEventListener('mouseover', overstar,true)
                      list_obj[i].removeEventListener('mouseout', outstar,true)
                  }
                }
            }else{
              for (let i = 0; i <= 4; i++) {
                if(list_obj[i]){
                  TweenMax.to(list_obj[i], 0, { scale:1, fill:"#eee"})
                }
              }
              for (let i = 0; i <= h; i++) {
                if(list_obj[i]){
                  TweenMax.to(list_obj[i], 0, { scale:1.3, fill:"#FDDD9B"})
                }
              }
            }
      }
    }
  for (let i = 0; i < list_obj.length; i++) {
    if(list_obj[i]){
      list_obj[i].addEventListener('mouseover', overstar,true)
      list_obj[i].addEventListener('mouseout', outstar,true)
      list_obj[i].addEventListener('click', overaction,true)
      list_obj[i].addEventListener('touchend', overactiont,true)
// TweenMax.to(list_obj[4], 0, { scale:1.3, fill:"#000"}).delay(6) 
      // c=1
    }
  }
//——搞 hover 效果 + 点击效果
//——————————————————————————————————————————————————

//第一版—————————————————————————————无法解除事件绑定———————————
  // let j =1;

  // const bindaction = () =>{
  //   for (let i = 0; i < list_obj.length; i++) {
  //     // arr[i]=list_obj[i]; 
  //     let list_onStar = list_obj.slice(0, j++)
  //     // console.log(list_onStar)
  //     const overstar = (e) => {
  //         if(e.target.tagName == "use"){
  //           TweenMax.to(list_onStar, 0.1, { scale:1.3, fill:"#FDDD9B"});
  //           console.log(e+"in")
  //           // e.stopPropagation();
  //         }
  //       }
  //     const outstar = (e) => {
  //         if(e.target.tagName == "use"){
  //           TweenMax.to(list_onStar, 0.1, { scale:1, fill:"#eee"});
  //           console.log(e+"out")
  //           // e.stopPropagation();
  //         }
  //       }

  //     if(list_obj[i]){
  //       list_obj[i].addEventListener('mouseover', overstar,true);
  //       console.log(list_obj[i])
  //       list_obj[i].addEventListener('mouseout', outstar,true);
  //       // list_obj[i].addEventListener('mousedown', rmstar,true);
  //     }
  //   }
  // }
  // bindaction();
//第一版————————————————————————————————————————
  // TweenMax.set(ipt, {opacity:0})
  // TweenMax.set(ipt1, {opacity:0})
  function sta(){
    console.log("123")
    TweenMax.to(rateWin, 1.4, { height: '380px' }).delay(1.5)
    TweenMax.to(rateWin, 1, { height: '380px' })
  }
  
  // TweenMax.from(ipt, 2, { opacity:0 }).delay(4)
  // TweenMax.from(ipt1, 2, { opacity:0 }).delay(3)
  }

  componentWillUnmount() {

  }
  
  render() {


    return (
      <div id="rateWin" className={styles.rateWin}>
          <div>
            <p style={{color:'rgba(0, 0, 0, 0.68)',margin:'30px 0 30px 0',fontSize:'1.2em',fontWeight: '400px',width:'100%',textAlign:'center'}}>请对服务做出评价哦~</p>
          </div>

            <div className={styles.sparks}>

            <div id="iconWrapper" className={styles.iconWrapper}>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s01' name="hahaspark">
                <path d="M266 527 L62 428"/>
                <path d="M359 1189 L83 1441"/>
                <path d="M1330 1130 L1538 1293"/>
                <path d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s02' name="hahaspark">
                <path d="M266 527 L62 428"/>
                <path d="M359 1189 L83 1441"/>
                <path d="M1330 1130 L1538 1293"/>
                <path d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s03' name="hahaspark">
                <path d="M266 527 L62 428"/>
                <path d="M359 1189 L83 1441"/>
                <path d="M1330 1130 L1538 1293"/>
                <path d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s04' name="hahaspark">
                <path d="M266 527 L62 428"/>
                <path d="M359 1189 L83 1441"/>
                <path d="M1330 1130 L1538 1293"/>
                <path d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s05' name="hahaspark">
                <path d="M266 527 L62 428"/>
                <path d="M359 1189 L83 1441"/>
                <path d="M1330 1130 L1538 1293"/>
                <path d="M1204 391 L1453 130"/>
              </svg>
            </div>
            
          </div>

          <div className={styles.stars}>
              
              <div id='hoverstars' className={styles.hoverstars}>
                  <svg className={styles.hoverstar} id='s11' name="hahastar">
                    <use xlinkHref="#icon-star" id='u11'></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s12' name="hahastar">
                    <use xlinkHref="#icon-star" id='u12'></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s13' name="hahastar">
                    <use xlinkHref="#icon-star" id='u13'></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s14' name="hahastar">
                    <use xlinkHref="#icon-star" id='u14'></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s15' name="hahastar">
                    <use xlinkHref="#icon-star" id='u15'></use>
                  </svg>
              </div>

          </div>

          <QueueAnim className={styles.normal} animConfig={[
              { opacity: [1, 0], translateY: [0, 90] },
              { opacity: [1, 0], translateY: [0, -90] }
            ]} delay={1160} duration={700}>
            {true ? [ 

          <div className={styles.ipt} key='1'>
            {/* <div className={styles.cover} id='cover'></div> */}
            

            <Input id='ipt' type="textarea" autosize={{ minRows: 5, maxRows: 5 }}></Input>

          
            <Button id='ipt1' style={{marginTop:'35px',width: '100%'}} size="large" type="primary" >
            Submit</Button>
            

          </div>

            ]: null}
          </QueueAnim>
          
          
      </div>
    )
  }
}

export default Rating;
