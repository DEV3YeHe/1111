import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Bear.css';
import BearStare from '../assets/BearStare';
import {TweenMax} from "gsap";

class Bear extends React.Component {
  componentDidMount() {
    var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.bearContainer'),
  // dogSVG = select('.dogSVG'),
  dogSVG = select('#mouseRange'),
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

var tl = new TimelineMax();
var eyeMaxX = 1;
var eyeMaxY = 1;
var browMaxX = 2;
var browMaxY = 2;
var browMaxRot = 0;
var snoutMinX = 2;
var snoutMinY = 2;
var snoutMaxX = 12;
var snoutMaxY = 12;
var noseMaxX = 12;
var noseMaxY = 12;

window.onmousemove = function(e){
  
  // mousePos.x = ((stageWidth/2) - e.offsetX) * -1;   e.clientX
  // mousePos.y = ((stageHeight/2) - e.offsetY) * -1;
  
  mousePos.x = ((document.body.clientWidth/2) - e.pageX) * -1 + 320;   
  mousePos.y = ((document.body.clientHeight/2) - e.pageY) * -1 - 160;
  
  TweenMax.to('#eyeGroup',1,{
    x:((mousePos.x/20) > eyeMaxX) ? eyeMaxX : mousePos.x/20
  ,
    y:((mousePos.y/26) > eyeMaxY) ? eyeMaxY : mousePos.y/26
  })  
  
  
  TweenMax.to('#snout',1,{
    x:((mousePos.x/30) < snoutMinX) ? snoutMinX : mousePos.x/30,
    y:((mousePos.y/40) < snoutMinY) ? snoutMinY : mousePos.y/40
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
    attr:{
      ry:0
    },
    repeat:1,
    yoyo:true,
    onComplete:blink,
    delay:2 + Math.random()*5
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
window.onmousemove()
  }

  render() {
    return (
      <div className="bearContainer">
        <svg className="dogSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
          <defs>
            <clipPath id="mainMask">
              <circle id="bg" cx="300" cy="300" r="160" stroke="#2C374F" strokeWidth="16" fill="#F88A4F"/>
            </clipPath>
          </defs>
  
          <use xlinkHref="#bg"/>
        
          <g id="dogGroup">
            <rect id="earL" x="200" y="200" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="earR" x="345" y="200" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="head" x="201" y="205" width="200" height="400" rx="86" ry="114" fill="#9B7D64"/>
            <rect id="earLTOP" x="200" y="200" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="earRTOP" x="345" y="200" width="51" height="57" rx="25" ry="25" fill="#8E694F"/>
            <rect id="snout" x="239" y="294" width="121" height="84.98" rx="42" ry="42" fill="#F1F4E4"/>

            <g id="nose" >
              <rect x="276" y="325" width="46" height="23" rx="11" ry="11" fill="#443F43"/>
              <path id="noseShine" fill="none" stroke="#AAABAF" strokeWidth="4" strokeLinecap="round" d="M282.1,337.7L282.1,337.7c0-4.2,3.4-7.6,7.6-7.6h20.4c4.2,0,7.6,3.4,7.6,7.6l0,0"/>      
            </g>
    
            <g id="eyeGroup" fill="#443F43">
              <g id="eyeSpinL">
                <ellipse id="eyeL" className="eye" cx="270" cy="275" rx="7" ry="7" />
              </g>
              <g id="eyeSpinR">
                <ellipse id="eyeR" className="eye" cx="329" cy="275" rx="7" ry="7" />
              </g>
            </g>
          </g>

          <circle id="rd" cx="300" cy="300" r="160" stroke="#2C374F" strokeWidth="16" fill="none" />
        </svg>
      </div>
    )
  }
}

export default Bear;