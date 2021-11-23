import styles from './List.module.css'

export default  (props) => {

  const handlechange = (event) => {
    
    props.deleteInformation(props.id)
 }

  return (
    <div onClick={handlechange} className={styles.unique}  >
      {props.title}
    </div>
  );
}