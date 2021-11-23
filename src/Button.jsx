import React, { Fragment, useState, useEffect, useRef }  from 'react'
import styles from './Button.module.css'
//import './Greeter.css'



export default  (props) => {


  const eventdispatch = event => {
 //   setEnteredinf(props.inputProp);
    props.getInformation(props.inputProp);
  };
 /*
  useEffect(function() {
    if (notInitialRender.current) {
      props.getInformation(enteredinf);
    } else {
      notInitialRender.current = true
    }
    
  }, [props.inputProp])
*/
    return (
    <Fragment >
        <button 
           className={styles.button}
            onClick={eventdispatch}>
                Add Goal

        </button>
                           
    </Fragment>

    )
}


