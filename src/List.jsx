import styles from './List.module.css'

import Lines from './Lines'

export default  (props) => {

  return (
    < div className={styles.list}  >
      {props.adviceInf &&  (<p>No goals found. Maybe add one?</p>)}
      {props.items.map((unit)=> (
        <Lines  key={unit.id} id={unit.id} title={unit.title} deleteInformation={props.deleteInformation} />
      ))}

    </div >
  );
}