import React, { useEffect } from 'react'

function App() {
  let [count, setCount] = React.useState(0);
  function fetchToDo(){
    //code to fetch data from API
    console.log('fetching data from API')
  }
  function handleClick(){
    setCount(count + 1);
  }

  function runOnCountChange(){
    console.log('count changed')
  }
  //fetchToDo();

  useEffect(() => {
    fetchToDo();
  }, [])

  useEffect(() => {
    runOnCountChange();
  }, [count])
  return (
    <div>
      <h1>useEffect</h1>
     <button onClick={handleClick}>Count: {count}</button>
    </div>
  )
}

export default App