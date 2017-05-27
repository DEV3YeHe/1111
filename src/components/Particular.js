import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Particular.css';
import Starry from '../assets/Starry';

class Particular extends React.Component {
  componentDidMount() {
    var cx = document.getElementById('canvas');
    var ctx = cx.getContext('2d');
    var St = new Starry(cx, ctx);
    St.step();
    window.onresize = function () {
      St.cx.width = St.cx.clientWidth;
      St.cx.height = St.cx.clientHeight;
      if (St.dots.length == 0) {
        St.construct();
      }
      St.render();
    };
    // console.log(document.body.clientWidth)
    cx.onmousemove = function (e) {
    	
    	St.mousePos[0] = e.clientX - (document.body.clientWidth*0.5-320);

    	St.mousePos[1] = e.clientY - (document.body.clientHeight*0.5-160);
      // St.mousePos[0] = e.clientX - cx.offsetLeft - 160;
      // St.mousePos[1] = e.clientY - cx.offsetTop - 160;
    }
    window.onresize();
  }
  render() {
    return (
      <div>
            <canvas id='canvas' style={{width:'320', height:'320', position:'absolute'}}></canvas>
      </div>
    )
  }
}

export default Particular;
