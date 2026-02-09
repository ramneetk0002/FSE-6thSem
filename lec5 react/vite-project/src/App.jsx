import React from 'react'

function App ()  {
  let a=Math.random();
  let num1=10;
  let num2=20;
  return (
    <div>
      <h1>Hello world</h1>
      <Header>    </Header>
      <Test></Test>
      <h3>{a}</h3>
      <p>{num1+num2}</p>
    </div>
  )
}
//component should start with capital letter
function Header () {
  return (
    <div> 
      <div className="logo">logo</div>
      <ul className="vanLinks">
      <li className="navlist">Home</li>
      <li className="navlist">About</li>
      <li className="navlist">Contant</li>
      </ul>
    </div>
  )
}

function Test () {
  return (
    <div>
      <h1>sampletest</h1>
    </div>
  )
}
export default App