import React, { useState, useEffect } from 'react';
import './App.css';
import Screen from './Screen'
import List from './List'

const data = [
  {
    id: "e1",
    title: 'Toilet Paper',

  },
  {
    id: "e2",
    title: 'Toilet Paper2',
  },

];



function App() {
  const [data2, setdata2] = useState(data);
  const [advice, setadvice] = useState(false);

  const getInformation = (inf) => {
    setdata2((previnf) => {
      return [inf, ...previnf];
    });
  };

  const deleteInformation = (infId) => {

    setdata2(prevInfs => {
      const updatedInf = prevInfs.filter(prevInf => prevInf.id !== infId);
      return updatedInf;
    });
  };

  useEffect(() => {
  //  infHandle()
      if (data2.length == 0 ) {
        
        setadvice(true);
        console.log("foi")
      }else {
        setadvice(false);
      }
  }
, [data2]); 
/*
const infHandle = useCallback(() => {

  if (data2.length == 0 ) {
    clearTimeout(logoutTimer);
  }
}, []);
*/
  return (
    <div className="App">
      <Screen getInformation={getInformation} ></Screen>
      <List items={data2} deleteInformation={deleteInformation} adviceInf={advice} ></List>
    </div>
  );
}

export default App;
