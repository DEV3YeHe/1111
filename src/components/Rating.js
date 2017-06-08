import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Rating.css';
import { TweenMax, TimelineMax } from "gsap";

class Rating extends React.Component {
  componentDidMount() {
    let select = function(s) {
    return document.querySelector(s);
  },
  list_obj = document.getElementsByName("hahastar"),
  list_spark = document.getElementsByName("hahaspark"),
  // list_path = document.getElementsByTagName("path"),
  s01 = select('#s01'),
  s02 = select('#s02'),
  s03 = select('#s03'),
  s04 = select('#s04'),
  s05 = select('#s05'),
  s11 = select('#s11'),
  s12 = select('#s12'),
  s13 = select('#s13'),
  s14 = select('#s14'),
  s15 = select('#s15')

//——飞入！！！！
  for (let i = 0; i <= list_obj.length; i++) {
    
    let st1 = new TimelineMax({delay:( 1 + 0.1 * i )});          //TimelineMax 一定要传输组
    st1.from([list_obj[i]], 0.5, {opacity:0,scale:0.2,top:"-18px",rotation:"-420deg",left:"-20px",ease:"Circ.easeOut"})
    .to([list_obj[i]], 0.2, {scale:1.2} )
    .to([list_obj[i]], 0.1, {scale:1.0} );
  }
//——飞入！！！！
//——————————————————————————————————————————————————

//——将 list_obj 从对象集合转为数组，并测试
  // alert(list_obj) 
  list_obj = Array.prototype.slice.call(list_obj); 
  list_spark = Array.prototype.slice.call(list_spark);
  // alert(list_obj instanceof Array); 
  // alert(list_obj) 
  console.log(list_path)
//——将 list_obj 从对象集合转为数组，并测试
//——————————————————————————————————————————————————

//——搞 hover 效果 + 点击效果
  
  // let j =0;   //储存出发时间的是第几个星星
  // let h =0;   //点击的是第几个
  // let list_onStar = [];   //空数组 用于存可变的星星数
  let c =0;

  const overstar = (e) => {               //hover 上
    if(e.target.tagName == "use"){        //鼠标指向svg中的use时，算是出了svg，所以这里用hover use来触发hover；确定 hover 到 use 上了。
      let j =list_obj.indexOf(event.path[1])  //得到 hover 的第几个
      // list_onStar = list_obj.slice(0, j++)     //取到需要变化的星星
      // TweenMax.to(list_onStar, 0.1, { scale:1.3, fill:"#FDDD9B"}) //实施变化
      for (let i = 0; i <= j; i++) {
        TweenMax.to(list_obj[i], 0.1, { scale:1.3, fill:"#FDDD9B"})
      }  
    }
  }
  const outstar = (e) => {                //hover out
    if(e.target.tagName == "use"){  
      let j =list_obj.indexOf(event.path[1]) 
      for (let i = 0; i <= j; i++) {
        TweenMax.to(list_obj[i], 0.1, { scale:1, fill:"#eee"})
      }
    }
  }
  const overaction = (e) =>{               //循环解除事件绑定#FF5500
    let h = 4;
    if(e.target.tagName == "use"){        //鼠标指向svg中的use时，算是出了svg，所以这里用hover use来触发hover；确定 hover 到 use 上了。
      h =list_obj.indexOf(event.path[1])

      // let col = `rgb(${(155 * 0.2 * (h+1)) + 100},100,100)`    //变化颜色
      // console.log(col)
      // console.log(h)
      let st2 = new TimelineMax();
      st2.to([list_obj[h]], 0.07, { scale:0.8,rotation:"-72deg", fill:"#FFEEE6"})
      .to([list_obj[h]], 0.07, { scale:1.4, fill:"#FF5500"})
      .to([list_obj[h]], 0.8, { scale:1.3,rotation:"288deg", fill:"#FDDD9B",ease:"Circ.easeOut"})

      if(c){
        c=0
        for (let i = 0; i <= 4; i++) {
          if(list_obj[i]){
              list_obj[i].removeEventListener('mouseover', overstar,true)
              list_obj[i].removeEventListener('mouseout', outstar,true)
              // console.log('remove'+'   '+i+'   '+c)
          }
        }
      }else{
        // c=1
        // console.log(h)
        for (let i = 0; i <= 4; i++) {
          if(list_obj[i]){
            // list_obj[i].addEventListener('mouseover', overstar,true)
            // list_obj[i].addEventListener('mouseout', outstar,true)
            TweenMax.to(list_obj[i], 0, { scale:1, fill:"#eee"})
          }
        }
        for (let i = 0; i <= h; i++) {
          if(list_obj[i]){
            // list_obj[i].addEventListener('mouseover', overstar,true)
            // list_obj[i].addEventListener('mouseout', outstar,true)
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
      list_obj[i].addEventListener('click', overaction,false)
      c=1
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

  }

  componentWillUnmount() {

  }
  
  render() {

    return (
      <div id="rateWin" className={styles.rateWin}>
          <div>
            <p style={{color:'rgba(0, 0, 0, 0.68)',margin:'30px 0 30px 0',fontSize:'1.17em',fontWeight: '400px',width:'100%',textAlign:'center'}}>请对我的服务做出评价</p>
          </div>

                    <div className={styles.sparks}>

            <div id="iconWrapper" className={styles.iconWrapper}>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s01' name="hahaspark">
                <path id="pathA" d="M266 527 L62 428"/>
                <path id="pathB" d="M359 1189 L83 1441"/>
                <path id="pathC" d="M1330 1130 L1538 1293"/>
                <path id="pathD" d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s02' name="hahaspark">
                <path id="pathA" d="M266 527 L62 428"/>
                <path id="pathB" d="M359 1189 L83 1441"/>
                <path id="pathC" d="M1330 1130 L1538 1293"/>
                <path id="pathD" d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s03' name="hahaspark">
                <path id="pathA" d="M266 527 L62 428"/>
                <path id="pathB" d="M359 1189 L83 1441"/>
                <path id="pathC" d="M1330 1130 L1538 1293"/>
                <path id="pathD" d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s04' name="hahaspark">
                <path id="pathA" d="M266 527 L62 428"/>
                <path id="pathB" d="M359 1189 L83 1441"/>
                <path id="pathC" d="M1330 1130 L1538 1293"/>
                <path id="pathD" d="M1204 391 L1453 130"/>
              </svg>
              <svg className={styles.sparkSvg} viewBox="0 0 1600 1600" id='s05' name="hahaspark">
                <path id="pathA" d="M266 527 L62 428"/>
                <path id="pathB" d="M359 1189 L83 1441"/>
                <path id="pathC" d="M1330 1130 L1538 1293"/>
                <path id="pathD" d="M1204 391 L1453 130"/>
              </svg>
            </div>
            
          </div>

          <div className={styles.stars}>
              
              <div id='hoverstars' className={styles.hoverstars}>
                  <svg className={styles.hoverstar} id='s11' name="hahastar">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s12' name="hahastar">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s13' name="hahastar">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s14' name="hahastar">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className={styles.hoverstar} id='s15' name="hahastar">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
              </div>

          </div>

          
      </div>
    )
  }
}

export default Rating;
