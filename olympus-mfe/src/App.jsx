import React, { Suspense, useEffect, useState } from "react";

import ReactDOM from "react-dom";

import useClient from "./store";

import PubSub from "pubsub-js";

import "./index.css";

const App = () => {
  //const { client, setClient } = useClient();

  //console.log("olympus app", { client });

  const [company, setCompany] = useState();
  const descriptionTopic = 'MY TOPIC';
  const companyPubSub = localStorage.getItem(descriptionTopic);
  useEffect(() => {
    if (company) {
      localStorage.setItem('MY TOPIC', company)
    }

    PubSub.publish('MY TOPIC', company)
  }, [company])

  function handleClientChangeOnStore(event) {
    setCompany(event.target.value)
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Olympus</h1>

        <select name="client" defaultValue={companyPubSub} onChange={handleClientChangeOnStore}>
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