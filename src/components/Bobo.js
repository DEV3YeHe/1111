import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Bobo.css';
import {TweenMax} from "gsap";

class Bobo extends React.Component {
  componentDidMount() {
     let str = 'Bonjour,  Come an\' in, my dear friend.';
     let i = 0;
    let _this = this;
    function textTyping(){
      if(true) {
        _this.timer = setInterval(
          () => {
            divTyping.innerHTML = str.slice(0, i++) + ' _';
              if (i > str.length) {
                divTyping.innerHTML = str;
                clearInterval(_this.timer);
                _this.timer = undefined;
              }  
            },
            20
        );
      }
    }
    setTimeout(textTyping, 1400);
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
  
  render() {

    return (
      <div>
          
            <svg id='svgBobo' className={styles.svgBobo} >
              <use xlinkHref="#icon-b" fill= "#00C6CC"></use>
            </svg>

            <p id='divTyping' className={styles.divTyping}>
            
            </p>
          
          
      </div>
    )
  }
}

export default Bobo;
