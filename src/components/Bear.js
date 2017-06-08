import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Bear.css';
import BearStare from '../assets/BearStare';
import {TweenMax} from "gsap";

class Bear extends React.Component {
  componentDidMount() {

    let select = function(s) {
    return document.querySelector(s);
  },
  // selectAll = function(s) {
  //   return document.querySelectorAll(s);
  // },
  container = select('.bearContainer'),
  // dogSVG = select('.dogSVG'),
  // dogSVG = select('#mouseRange'),
  // mouseRange = select('#root'),
  eyeSpinL = select('#eyeSpinL'),
  eyeSpinR = select('#eyeSpinR'),
    stageWidth =  600,
    stageHeight = stageWidth,
    mousePos = {x:0,y:0}

TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set([nose, '.eye'], {
  transformOrigin:'50% 50%'
})
TweenMax.set([eyeSpinL,eyeSpinR], {
  transformOrigin:'65% 50%'
})

// var tl = new TimelineMax();
let eyeMaxX = 1;
let eyeMaxY = 1;
let browMaxX = 2;
let browMaxY = 2;
let browMaxRot = 0;
let snoutMinX = 2;
let snoutMinY = 2;
let snoutMaxX = 12;
let snoutMaxY = 12;
let noseMaxX = 12;
let noseMaxY = 12;

//鼠标轨迹
window.onmousemove = function(e){
  
  // mousePos.x = ((stageWidth/2) - e.offsetX) * -1;   e.clientX
  // mousePos.y = ((stageHeight/2) - e.offsetY) * -1;
  
  mousePos.x = ((document.body.clientWidth/2) - e.pageX) * -1 + 20;   
  mousePos.y = ((document.body.clientHeight/2) - e.pageY) * -1 - 60;
  
  TweenMax.to('#eyeGroup',1,{
    x:((mousePos.x/20) > (eyeMaxX + 20)) ? (eyeMaxX + 20) : mousePos.x/20
  ,
    y:((mousePos.y/26) > eyeMaxY) ? eyeMaxY : mousePos.y/26
  })  
  
  TweenMax.to('#snout',1,{
    x:mousePos.x/30,
    y:((mousePos.y/60) < snoutMinY) ? snoutMinY : mousePos.y/60
  })  

  TweenMax.to('#nose',1,{
    x:mousePos.x/12,
    y:((mousePos.y/15) > noseMaxY) ? noseMaxY : mousePos.y/15
  })
    
    TweenMax.to('#earL',1, {
      x:-(mousePos.x/80),
      y:-(mousePos.y/80)
    })
    TweenMax.to('#earR',1, {
      x:-(mousePos.x/80),
      y:-(mousePos.y/80)
    })
    TweenMax.to('#dogGroup',1, {
      x:(mousePos.x/43),
      y:(mousePos.y/46)
    })
}


function blink(){
  
  TweenMax.to('.eye', 0.1,{
    scaleY:0.2,
    repeat:1,
    yoyo:true,
    onComplete:blink,
    delay:9 + Math.random()*9
  })
  
}

function sniff(){
  
 TweenMax.to('#nose', 0.1,{
    scaleX:1.1,
    repeat:1,
    yoyo:true,
    onComplete:sniff,
    delay:Math.random() + 1
  })  
}


container.addEventListener('click', function(e){
  TweenMax.to([eyeSpinL, eyeSpinR], 1, {
    rotation:'+=720',
    onUpdate:function(){
      TweenMax.set('.eye', {
        rotation:-eyeSpinL._gsTransform.rotation
      })
    }
  })
  
})
blink();
sniff();
window.onmousemove({offsetX:300, offsetY:60 })
  }

  render() {
    return (
      <div className="bearContainer" styles={{width: '100%',height: '100%',position: 'absolute',overflow: 'hidden'}}>
        <svg className="dogSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          
          <defs>
            <clipPath id="mainMask">
              <circle id="bg" cx="200" cy="200" r="160" fill="#F88A4F"/>
            </clipPath>
          </defs>
  
          <use xlinkHref="#bg"/>
        
          <g id="dogGroup">
            <rect id="earL" x="100" y="100" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="earR" x="245" y="100" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="head" x="90" y="105" width="220" height="300" rx="96" ry="110" fill="#9B7D64"/>
            <rect id="snout" x="139" y="194" width="121" height="84.98" rx="42" ry="42" fill="#F1F4E4"/>

            <g id="nose" >
              <rect x="176" y="225" width="46" height="23" rx="11" ry="11" fill="#443F43"/>
              <path id="noseShine" fill="none" stroke="#AAABAF" strokeWidth="4" strokeLinecap="round" d="M182.1,237.7L182.1,237.7c0-4.2,3.4-7.6,7.6-7.6h20.4c4.2,0,7.6,3.4,7.6,7.6l0,0"/>      
            </g>
    
            <g id="eyeGroup" fill="#443F43">
              <g id="eyeSpinL">
                <ellipse id="eyeL" className="eye" cx="170" cy="175" rx="7" ry="7" />
              </g>
              <g id="eyeSpinR">
                <ellipse id="eyeR" className="eye" cx="229" cy="175" rx="7" ry="7" />
              </g>
            </g>
          </g>
          <circle id="rd" cx="200" cy="200" r="200" stroke="#fff" strokeWidth="80" fill="none"/>
        </svg>
      </div>
    )
  }
}

export default Bear;