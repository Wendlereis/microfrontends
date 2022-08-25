import React, { useState } from "react";
import ReactDOM from "react-dom";

import PubSub from "pubsub-js";

import { dashboardByClient } from "./data";

import "./index.css";

const App = () => {
  const [client, setClient] = useState();

  function getClient(message, data) {
    setClient(data);
  }

  PubSub.subscribe("client", getClient);

  const data = dashboardByClient.get(client);

  if (!data) {
    return <div> segura ae</div>;
  }

  return (
    <>
      <div className="container">
        <section>
          <h3>Employees</h3>
          <h4>{data.employees.value}</h4>
        </section>

        <section>
          <h3>Members</h3>
          <h4>{data.member.value}</h4>
          <p>
            <span>{data.member.variation}</span> on last 7 days
          </p>
        </section>

        <section>
          <h3>Subscribers</h3>
          <h4>{data.subs.value}</h4>
          <p>
            <span>{data.subs.variation}</span> on last 7 days
          </p>
        </section>

        <section>
          <h3>Active subscribers</h3>
          <h4>{data.actvSubs.value}</h4>
          <p>
            <span>{data.actvSubs.variation}</span> on last 7 days
          </p>
        </section>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
