import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(null);

  const randomNum = () => {
    const value = Math.floor(Math.random() * 10) + 1; // 1-10
    setNum(value);
  };

  return (
    <div>
      <h1>3 wins</h1>
      {num !== null && <h2>{num}</h2>}
      <button onClick={randomNum}>Click</button>
      {num && (
        num === 3 ? (
          <div>
            <h3>Win</h3>
            <img
             src="https://th.bing.com/th?q=Happy+Baby+No+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
             alt="win"
            />
          </div>
        ) : (
          <div>
            <h1>Lost</h1>
            <img
              src="https://th.bing.com/th/id/OIP.6M3T9clW7Wx0hqTpH7vTUwHaJQ?w=146&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"
              alt="lost"
            />
          </div>
        )
      )}
    </div>
  );
}

export default App;