// import React from 'react'
// import { useState } from 'react'
// function App() {
//  // let count=0;
//   //state variable-->react keeps track of state variable but not regular variable
//   let [count,setCount]=React.useState(0);
//   function increase(){
//     count++;
//     //console.log(count);
//     setCount(count);
//   }
//   return (
//     <div>
//       <h1>State Variable</h1>
//       <h4>count : {count}</h4>
//       <button onClick={increase}>Click</button>

//     </div>
//   )
// }

// export default App

import React from 'react'

export default function App() {
  return (
    <div>
      <h1>Random nmber genrater</h1>
      <h4>value: 0</h4>
      <button>Generate</button>
    </div>
  )
}
