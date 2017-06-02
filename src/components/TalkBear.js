import React from 'react';
import ReactDOM from 'react-dom';
import styles from './TalkBear.css';
// import TweenOne from 'rc-tween-one';
import {TweenMax} from "gsap";

import Bear from './Bear'
import Bobo from './Bobo'

class TalkBear extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.animation = { scale: 0, repeat: -1, delay:500, duration: 400 };
  // }
  componentDidMount() {
    let select = function(s) {
      return document.querySelector(s);
    },
      bearSit = select('#bearSit')

      // console.log("haha333")

    function startb(){
      TweenMax.set([bearSit], {
        scale:0
      })

      TweenMax.to([bearSit],0.3,{
      scale:1.2
      }).delay(1)
      // TweenMax.to([bearSit],0.15,{
      // scale:0.8
      // })
      // TweenMax.to([bearSit],0.1,{
      // scale:1
      // })
    }
  startb();

  }
  
  render() {

    return (
      <div className={styles.row}>


          <div id="bearSit" className={styles.bearSit}>
            <Bear />
          </div>

          <div className={styles.boboSit}>          
            <Bobo />
          </div>

      </div>
    )
  }
}

export default TalkBear;
