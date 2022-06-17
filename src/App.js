import React from "react";

import "./App.css";

function App() {
  const [isDrinking, setIsDrinkin] = React.useState(false);

  const changeMind = () => {
    setIsDrinkin((prev) => !prev);
  };

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like drinking Malört tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isDrinking ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
