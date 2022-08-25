import React from "react";
import ReactDOM from "react-dom";

import useClient from "./store";

import "./index.css";

const App = () => {
  const { client, setClient } = useClient();

  console.log("olympus app", { client });

  function handleClientChangeOnStore(event) {
    setClient(event.target.value);
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Olympus</h1>

        <select name="client" onChange={handleClientChangeOnStore}>
          <option value="cool-company">Cool Company</option>
          <option value="nice-company">Nice Company</option>
          <option value="wonder-company">Wonder Company</option>
        </select>
      </header>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
