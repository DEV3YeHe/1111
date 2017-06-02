import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Bobo.css';

class Bobo extends React.Component {
  componentDidMount() {
     var str = 'Hello Hello Hello Hello Hello Hello Hello Hello ';
     var i = 0;

      if(true) {
        this.timer = setInterval(
          () => {
            divTyping.innerHTML = str.slice(0, i++) + ' _';
              if (i > str.length) {
                divTyping.innerHTML = str;
                clearInterval(this.timer);
                this.timer = undefined;
              }  
            },
            20
        );
      }

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
