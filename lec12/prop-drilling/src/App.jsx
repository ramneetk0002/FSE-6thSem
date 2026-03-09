import React from 'react'

// function App() {
//   return (
//     <div>
//       <Child1></Child1>
//     </div>
//   )
// }
// function Child1(props){
//   let price=500;
//   return (
//     <div>
//       <h1>Child1</h1>
//       <Child2 price={price}></Child2>
//     </div>
//   )
// }
// function Child2(props){
//   return (
//     <div>
//       <h1>Child2</h1>
//       <Child3  price={props.price}></Child3>
//       <Child4></Child4>
//     </div>
//   )
// }
// function Child3(props){
//   return (
//     <div>
//       <h1>Child3</h1>
//       <Child5 price={props.price}></Child5>
//     </div>
//   )
// }
// function Child4(props){
//   return (
//     <div>
//       <h1>Child4</h1>
//     </div>
//   )
// }
// function Child5(props){
//   let price=props.price;
//   return (
//     <div>
//       <h1>Child5</h1> 
//       <h3>Price of product is: ${price}</h3>
//     </div>
//   )
// }

import { createContext } from 'react';
let priceContext=createContext("");
function App() {
  return (
    <div>
      <Child1></Child1>
    </div>
  )
}
function Child1(props){
  let price=500;
  return (
    <div>
      <h1>Child1</h1>
      <priceContext.Provider value={price}>
      <Child2></Child2>
      </priceContext.Provider>
    </div>
  )
}
function Child2(props){
  return (
    <div>
      <h1>Child2</h1>
      <Child3></Child3>
      <Child4></Child4>
    </div>
  )
}
function Child3(props){
  return (
    <div>
      <h1>Child3</h1>
      <Child5></Child5>
    </div>
  )
}
function Child4(props){
  return (
    <div>
      <h1>Child4</h1>
    </div>
  )
}
function Child5() {
  return (
    <priceContext.Consumer>
      {price => (
        <div>
          <h1>Child5</h1>
          <h3>Price of product is: {price}</h3>
        </div>
      )}
    </priceContext.Consumer>
  );
}
export default App