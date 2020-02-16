import React from "react";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>TODOs:</h1>
      <button>🔄</button>
      <ol>
        <li>
          clean up <button>❌</button>
        </li>
        <li>
          do homework <button>❌</button>
        </li>
        <li>
          <input type="text" />
          <button>Add</button>
        </li>
      </ol>
    </div>
  );
};

export default App;
