
import React, { useState }  from 'react'
import styles from './Screen.module.css'
import Button from './Button'
export default  (props) => {

  const [input2, setinput2] = useState('')

  const [isValid, setisValid] = useState(false)


  const handlechange = (event) => {
    setinput2(event.target.value)  
    if (event.target.value == '') {
      
     }else {
      setisValid(false)
      }
 }


 const getInformation = (enteredInput) => {
   if (enteredInput.trim().length === 0) {
    
      setisValid(true)
   }else {
      const expenseData = {
        title: enteredInput,
        id: Math.random().toString(),
      };
      props.getInformation(expenseData);
    }
}

  return (
    <div className={styles.screen}>
     <b className={`${isValid ? styles.titleStyle : ''}`} >Course goal</b> 
      <div >
        <input  type="text" className={`${styles.input} ${isValid ? styles.inputStyle : ''}`} value={input2} onChange={handlechange} />
      </div>
      <Button inputProp={input2} getInformation={getInformation} />
    </div>
  );
}


